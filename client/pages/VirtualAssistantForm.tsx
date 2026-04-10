import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

interface VirtualAssistantFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
}

const plans = [
  "Copper – $300 / 10 Hours",
  "Ruby – $450 / 20 Hours",
  "Jade – $750 / 40 Hours",
];

export default function VirtualAssistantForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VirtualAssistantFormData>();

  const onSubmit = (data: VirtualAssistantFormData) => {
    console.log(data);
    navigate("/virtual-assistant");
  };

  return (
    <Layout>
      {/* Page banner */}
      <div className="bg-jade py-5 text-center">
        <h1 className="text-white text-4xl font-bold font-inter">
          Virtual Assistant
        </h1>
      </div>

      {/* Form section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-inter text-black text-center mb-12">
            Get Connected With Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* First / Last name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-normal font-inter text-[#4E4958]">
                  First Name
                </label>
                <input
                  {...register("firstName", { required: "First name is required" })}
                  className="w-full h-[53px] rounded-lg border border-[#E6E6F0] bg-[#FAFAFC] px-4 text-sm font-inter text-[#32264D] placeholder-[#C1BCCC] focus:outline-none focus:ring-2 focus:ring-jade/40"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">{errors.firstName.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-normal font-inter text-[#4E4958]">
                  Last Name
                </label>
                <input
                  {...register("lastName", { required: "Last name is required" })}
                  className="w-full h-[53px] rounded-lg border border-[#E6E6F0] bg-[#FAFAFC] px-4 text-sm font-inter text-[#32264D] placeholder-[#C1BCCC] focus:outline-none focus:ring-2 focus:ring-jade/40"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-normal font-inter text-[#4E4958]">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                })}
                className="w-full h-[53px] rounded-lg border border-[#E6E6F0] bg-[#FAFAFC] px-4 text-sm font-inter text-[#32264D] placeholder-[#C1BCCC] focus:outline-none focus:ring-2 focus:ring-jade/40"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-normal font-inter text-[#4E4958]">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full h-[53px] rounded-lg border border-[#E6E6F0] bg-[#FAFAFC] px-4 text-sm font-inter text-[#32264D] placeholder-[#C1BCCC] focus:outline-none focus:ring-2 focus:ring-jade/40"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone.message}</p>
              )}
            </div>

            {/* Plan */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-normal font-inter text-[#4E4958]">
                Plan
              </label>
              <select
                {...register("plan", { required: "Please select a plan" })}
                className="w-full h-[52px] rounded-lg border border-[#E6E6F0] bg-[#FAFAFC] px-4 text-sm font-inter text-[#32264D] focus:outline-none focus:ring-2 focus:ring-jade/40"
              >
                <option value="">Select a plan</option>
                {plans.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {errors.plan && (
                <p className="text-red-500 text-xs">{errors.plan.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-normal font-inter text-[#4E4958]">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={6}
                className="w-full rounded-lg border border-[#E6E6F0] bg-[#FAFAFC] px-4 py-3 text-sm font-inter text-[#32264D] placeholder-[#C1BCCC] resize-none focus:outline-none focus:ring-2 focus:ring-jade/40"
                placeholder="Tell us more about what you need..."
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-jade text-white font-bold font-inter text-base px-12 py-3 rounded-lg hover:bg-jade/90 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
