import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function VirtualAssistantConfirmation() {
  return (
    <Layout>
      {/* Confirmation content */}
      <section className="bg-white py-24 flex flex-col items-center text-center px-4">
        <h2 className="text-3xl font-bold font-inter text-[#32264D] mb-6">
          Your Request Has Been Received!
        </h2>

        <p className="text-2xl font-light font-inter text-jade max-w-xl mb-12">
          Thank you for your submission! Our team will be in contact with you soon.
        </p>

        <Link
          to="/virtual-assistant-form"
          className="bg-[#D9D9D9] text-jade font-light font-inter text-base px-8 py-3 rounded-[18px] hover:bg-gray-300 transition-colors"
        >
          Submit another request
        </Link>
      </section>

      {/* Bottom CTA */}
      <div className="text-center py-10">
        <p className="text-2xl font-light font-inter text-jade tracking-wide">
          Let's Get Connected. Book today!
        </p>
      </div>
    </Layout>
  );
}
