import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function BooksConfirmation() {
  return (
    <Layout>
      {/* Confirmation content */}
      <section className="bg-white py-24 flex flex-col items-center text-center px-4">
        <h2 className="text-3xl font-bold font-inter text-[#32264D] mb-6">
          Thank You for Your Purchase!
        </h2>

        <p className="text-2xl font-light font-inter text-jade max-w-xl mb-12">
          We appreciate your order! Your book will be shipped to you soon.
        </p>

        <Link
          to="/books"
          className="bg-[#D9D9D9] text-jade font-light font-inter text-base px-8 py-3 rounded-[18px] hover:bg-gray-300 transition-colors"
        >
          Continue shopping
        </Link>
      </section>

      {/* Bottom CTA */}
      <div className="text-center py-10">
        <p className="text-2xl font-light font-inter text-jade tracking-wide">
          Inspire Your Journey. Order today!
        </p>
      </div>
    </Layout>
  );
}
