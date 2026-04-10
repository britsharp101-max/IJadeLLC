import { useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Layout from "@/components/Layout";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ShippingAddress {
  firstName: string;
  lastName: string;
  country: string;
  street: string;
  apt: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

interface PaymentDetails {
  cardNumber: string;
  nameOnCard: string;
  expirationMonth: string;
  expirationYear: string;
  cvc: string;
  email: string;
}

type Step = "shipping" | "shippingOption" | "payment" | "review";

const SHIPPING_OPTIONS = [
  {
    id: "fc1",
    label: "First Class (approximately $2.75-4.99) for 1-2 Books",
    price: 2.75,
  },
  {
    id: "pm1",
    label: "Priority Mail Domestic (approximately $7.35) for 1-2 Books",
    price: 7.35,
  },
  {
    id: "fc3",
    label: "First Class (approximately $3.00-5.99) for 3-5 Books",
    price: 3.99,
  },
  {
    id: "pm3",
    label: "Priority Mail Domestic (approximately $14.90) for 3-5 Books",
    price: 14.9,
  },
  { id: "mm", label: "Media Mail (2-9 Days) approximately $3.00", price: 3.0 },
  { id: "sr", label: "Special Request", price: 0 },
];

const SUBTOTAL = 14.99;

// ─── Shared components ────────────────────────────────────────────────────────

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="bg-[#3D3C3E] px-6 py-4 rounded-t-none">
      <h2 className="text-white font-bold font-inter text-xl">{label}</h2>
    </div>
  );
}

const InputField = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { label: string }
>(({ label, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-light font-inter text-black">{label}</label>
      <input
        ref={ref}
        {...props}
        className="w-full h-[50px] border border-[#E6E6F0] bg-white px-3 text-base font-light font-inter text-black focus:outline-none focus:ring-2 focus:ring-jade/30"
      />
    </div>
  );
});

InputField.displayName = "InputField";

function OrderSidebar({ shipping }: { shipping: number }) {
  const total = SUBTOTAL + shipping;
  return (
    <div className="w-full lg:w-[420px] bg-[#F5F5F5] p-6 self-start">
      <h2 className="text-2xl font-bold font-inter text-black mb-6">
        Order Summary
      </h2>
      <div className="space-y-3">
        <div className="flex justify-between font-bold font-inter text-lg text-black">
          <span>Subtotal</span>
          <span>${SUBTOTAL.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold font-inter text-lg text-black">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <hr className="border-black" />
        <div className="flex justify-between font-bold font-inter text-lg text-black">
          <span>Order Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function BooksCheckout() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("shipping");
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(null);
  const [shippingOption, setShippingOption] = useState(SHIPPING_OPTIONS[0].id);
  const [payment, setPayment] = useState<PaymentDetails | null>(null);

  const selectedOption =
    SHIPPING_OPTIONS.find((o) => o.id === shippingOption) ?? SHIPPING_OPTIONS[0];

  const {
    register: regShipping,
    handleSubmit: handleShipping,
    formState: { errors: shippingErrors },
  } = useForm<ShippingAddress>();

  const {
    register: regPayment,
    handleSubmit: handlePayment,
    formState: { errors: paymentErrors },
  } = useForm<PaymentDetails>();

  const onShippingSubmit = (data: ShippingAddress) => {
    setShippingAddress(data);
    setStep("shippingOption");
  };

  const onPaymentSubmit = (data: PaymentDetails) => {
    setPayment(data);
    setStep("review");
  };

  const onMakePurchase = () => {
    navigate("/books/confirmation");
  };

  const stepOrder: Step[] = ["shipping", "shippingOption", "payment", "review"];
  const stepIndex = stepOrder.indexOf(step);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold font-inter text-jade mb-8">
          Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: Steps */}
          <div className="flex-1 space-y-4">
            {/* ── Step 1: Shipping Address ─────────────────────────────────── */}
            <div className="bg-[#F5F5F5]">
              <SectionHeader label="SHIPPING ADDRESS" />
              <div className="p-6">
                {step === "shipping" ? (
                  <form onSubmit={handleShipping(onShippingSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <InputField
                          label="First Name"
                          {...regShipping("firstName", { required: true })}
                        />
                        {shippingErrors.firstName && (
                          <p className="text-red-500 text-xs mt-1">Required</p>
                        )}
                      </div>
                      <div>
                        <InputField
                          label="Last Name"
                          {...regShipping("lastName", { required: true })}
                        />
                        {shippingErrors.lastName && (
                          <p className="text-red-500 text-xs mt-1">Required</p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <InputField label="Country" {...regShipping("country")} />
                    </div>
                    <InputField label="Street Name" {...regShipping("street")} />
                    <InputField label="Apt/Suite/Unit" {...regShipping("apt")} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <InputField label="City" {...regShipping("city")} />
                      <InputField label="State" {...regShipping("state")} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <InputField label="Zip Code" {...regShipping("zip")} />
                      <InputField
                        label="Phone Number"
                        type="tel"
                        {...regShipping("phone")}
                      />
                    </div>
                    <div className="flex justify-center pt-2">
                      <button
                        type="submit"
                        className="bg-white border border-jade text-jade font-bold font-inter text-2xl px-12 py-3 hover:bg-jade hover:text-white transition-colors"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                ) : (
                  shippingAddress && (
                    <div className="flex justify-between items-start">
                      <div className="text-black font-light font-inter text-lg space-y-1">
                        <p>
                          {shippingAddress.firstName} {shippingAddress.lastName}
                        </p>
                        <p>
                          {shippingAddress.street}
                          {shippingAddress.apt ? `, ${shippingAddress.apt}` : ""}{" "}
                          {shippingAddress.city} {shippingAddress.state},{" "}
                          {shippingAddress.zip}
                        </p>
                        <p>{shippingAddress.phone}</p>
                      </div>
                      {stepIndex > 0 && (
                        <button
                          onClick={() => setStep("shipping")}
                          className="bg-[#D9D9D9] text-black font-light font-inter text-lg px-6 py-2 ml-4"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ── Step 2: Shipping Option ──────────────────────────────────── */}
            {stepIndex >= 1 && (
              <div className="bg-[#F5F5F5]">
                <SectionHeader label="Shipping Option" />
                <div className="p-6">
                  {step === "shippingOption" ? (
                    <div className="space-y-4">
                      {SHIPPING_OPTIONS.map((opt) => (
                        <label
                          key={opt.id}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <div
                            onClick={() => setShippingOption(opt.id)}
                            className="w-6 h-6 rounded-full border border-black flex items-center justify-center flex-shrink-0"
                          >
                            {shippingOption === opt.id && (
                              <div className="w-3 h-3 rounded-full bg-jade" />
                            )}
                          </div>
                          <span className="text-base font-light font-inter text-black">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                      {shippingOption === "sr" && (
                        <textarea
                          className="w-full bg-[#D9D9D9] h-14 px-4 py-2 text-sm font-inter text-black resize-none focus:outline-none"
                          placeholder="Describe your special request..."
                        />
                      )}
                      <div className="flex justify-center pt-2">
                        <button
                          onClick={() => setStep("payment")}
                          className="bg-white border border-jade text-jade font-bold font-inter text-2xl px-12 py-3 hover:bg-jade hover:text-white transition-colors"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <p className="text-base font-light font-inter text-black">
                        {selectedOption.label}
                      </p>
                      <button
                        onClick={() => setStep("shippingOption")}
                        className="bg-[#D9D9D9] text-black font-light font-inter text-lg px-6 py-2 ml-4"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── Step 3: Payment Details ──────────────────────────────────── */}
            {stepIndex >= 2 && (
              <div className="bg-[#F5F5F5]">
                <SectionHeader label="Payment Details" />
                <div className="p-6">
                  {step === "payment" ? (
                    <form
                      onSubmit={handlePayment(onPaymentSubmit)}
                      className="space-y-4"
                    >
                      <InputField
                        label="Card Number"
                        placeholder="XXXX XXXX XXXX XXXX"
                        {...regPayment("cardNumber", { required: true })}
                      />
                      {paymentErrors.cardNumber && (
                        <p className="text-red-500 text-xs">Required</p>
                      )}
                      <InputField
                        label="Name on Card"
                        {...regPayment("nameOnCard", { required: true })}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField
                          label="Expiration Month"
                          placeholder="MM"
                          {...regPayment("expirationMonth", { required: true })}
                        />
                        <InputField
                          label="Expiration Year"
                          placeholder="YYYY"
                          {...regPayment("expirationYear", { required: true })}
                        />
                      </div>
                      <InputField
                        label="CVC"
                        placeholder="XXX"
                        {...regPayment("cvc", { required: true })}
                      />
                      <InputField
                        label="Email Address"
                        type="email"
                        {...regPayment("email", { required: true })}
                      />
                      <div className="flex justify-center pt-2">
                        <button
                          type="submit"
                          className="bg-white border border-jade text-jade font-bold font-inter text-2xl px-12 py-3 hover:bg-jade hover:text-white transition-colors"
                        >
                          Continue
                        </button>
                      </div>
                    </form>
                  ) : (
                    payment && (
                      <div className="flex justify-between items-start">
                        <div className="text-black font-light font-inter text-lg space-y-1">
                          <p>{payment.nameOnCard}</p>
                          <p>XXX XXXX XXXX {payment.cardNumber.slice(-4)}</p>
                          <p>
                            {payment.expirationMonth} {payment.expirationYear}
                          </p>
                          <p>{payment.email}</p>
                        </div>
                        <button
                          onClick={() => setStep("payment")}
                          className="bg-[#D9D9D9] text-black font-light font-inter text-lg px-6 py-2 ml-4"
                        >
                          Edit
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* ── Step 4: Review Order ─────────────────────────────────────── */}
            {step === "review" && (
              <div className="bg-[#F5F5F5]">
                <SectionHeader label="Review Order" />
                <div className="p-6 space-y-3">
                  <div className="flex justify-between font-bold font-inter text-lg text-black">
                    <span>Subtotal</span>
                    <span>${SUBTOTAL.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold font-inter text-lg text-black">
                    <span>Shipping</span>
                    <span>${selectedOption.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold font-inter text-lg text-black">
                    <span>Order Total</span>
                    <span>
                      ${(SUBTOTAL + selectedOption.price).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={onMakePurchase}
                      className="bg-white border border-jade text-jade font-bold font-inter text-2xl px-12 py-3 hover:bg-jade hover:text-white transition-colors"
                    >
                      Make Purchase
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <OrderSidebar shipping={selectedOption.price} />
        </div>
      </div>
    </Layout>
  );
}
