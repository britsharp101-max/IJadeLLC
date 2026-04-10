import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const BOOK = {
  title: "Threaded Chords of Life: An Inspirational Memoir",
  author: "By: Jasmin Jade Vann",
  price: 14.99,
  shipping: 2.75,
  image:
    "https://api.builder.io/api/v1/image/assets/TEMP/6a2f90ec50975b7440af1896de313bfe5c68d534?width=260",
};

const RECOMMENDED = {
  title: "The (Broken) Promise Of Love, Restoration, and Renewal",
  image:
    "https://api.builder.io/api/v1/image/assets/TEMP/709877eeb81a73ee5ca7c3662c24af76fba2c0fe?width=394",
};

export default function BooksCart() {
  const [autograph, setAutograph] = useState(false);
  const navigate = useNavigate();

  const subtotal = BOOK.price + (autograph ? 5.0 : 0);
  const total = subtotal + BOOK.shipping;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold font-inter text-jade mb-8">
          My Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="flex-1 border border-black rounded-sm p-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src={BOOK.image}
                alt={BOOK.title}
                className="w-32 h-52 object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h2 className="font-bold text-lg font-inter text-black mb-1">
                  {BOOK.title}
                </h2>
                <p className="text-sm text-black font-inter mb-4">
                  {BOOK.author}
                </p>

                {/* Autograph option */}
                <label className="flex items-start gap-3 cursor-pointer mt-4">
                  <div
                    onClick={() => setAutograph(!autograph)}
                    className="mt-0.5 w-6 h-6 rounded-full border border-black flex items-center justify-center flex-shrink-0"
                  >
                    {autograph && (
                      <div className="w-3 h-3 rounded-full bg-jade" />
                    )}
                  </div>
                  <span className="text-sm font-light font-inter text-black">
                    I would like 1 autographed book for $19.99. (Each
                    autographed book is $19.99.)
                  </span>
                </label>

                <div className="mt-6 space-y-1">
                  <div className="flex justify-between font-bold font-inter text-lg">
                    <span>Price</span>
                    <span>${BOOK.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold font-inter text-lg">
                    <span>Shipping</span>
                    <span>${BOOK.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold font-inter text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary sidebar */}
          <div className="w-full lg:w-[420px] border border-black rounded-sm p-6 flex flex-col">
            <h2 className="text-2xl font-bold font-inter text-black mb-6">
              Order Summary
            </h2>

            <div className="space-y-2 flex-1">
              <div className="flex justify-between font-bold font-inter text-lg">
                <span>Price</span>
                <span>${BOOK.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold font-inter text-lg">
                <span>Shipping</span>
                <span>${BOOK.shipping.toFixed(2)}</span>
              </div>
              <hr className="border-black my-2" />
              <div className="flex justify-between font-bold font-inter text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/books"
                className="w-full flex items-center justify-center border border-black rounded-2xl h-14 font-bold font-inter text-lg text-black hover:bg-gray-50 transition-colors"
              >
                Continue shopping
              </Link>
              <button
                onClick={() => navigate("/books/checkout")}
                className="w-full flex items-center justify-center rounded-2xl h-14 font-bold font-inter text-lg text-black bg-[#A6A6A6] hover:bg-gray-500 hover:text-white transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>

        {/* Recommended section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-[#D9D9D9] flex-1" />
            <h3 className="text-2xl font-normal font-inter text-black">
              Recommended
            </h3>
            <div className="h-px bg-[#D9D9D9] flex-1" />
          </div>

          <div className="flex flex-col items-center">
            <img
              src={RECOMMENDED.image}
              alt={RECOMMENDED.title}
              className="w-48 h-72 object-cover"
            />
            <p className="mt-4 text-center font-bold font-inter text-lg text-black max-w-xs">
              {RECOMMENDED.title}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
