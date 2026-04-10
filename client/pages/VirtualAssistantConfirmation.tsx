import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function VirtualAssistantConfirmation() {
  return (
    <Layout>
      {/* Confirmation content */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-32 px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-jade rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 w-24 h-24 bg-jade rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#32264D] mb-4">
            Thank You!
          </h1>

          {/* Subheading */}
          <p className="text-xl text-jade font-inter font-semibold mb-6">
            Your Virtual Assistant Request
          </p>

          {/* Message */}
          <p className="text-base text-gray-600 font-inter leading-relaxed mb-12 max-w-lg">
            We appreciate your interest in our Virtual Assistant services. Our team has received your submission and will be in contact with you shortly at the email and phone number you provided. Let's work together to help you achieve your goals!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              to="/virtual-assistant-form"
              className="px-8 py-3 bg-jade text-white font-semibold font-inter rounded-lg hover:bg-jade/90 shadow-md transition-all hover:shadow-lg"
            >
              Submit Another Request
            </Link>
            <Link
              to="/"
              className="px-8 py-3 border-2 border-jade text-jade font-semibold font-inter rounded-lg hover:bg-jade/5 transition-colors"
            >
              Return Home
            </Link>
          </div>

          {/* Divider */}
          <div className="w-16 h-1 bg-jade/20 rounded-full mb-12"></div>

          {/* Bottom CTA */}
          <p className="text-xl font-light font-inter text-jade italic tracking-wide">
            "Let's Get Connected. Book today!"
          </p>
        </div>
      </section>
    </Layout>
  );
}
