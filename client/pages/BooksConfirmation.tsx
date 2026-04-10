import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function BooksConfirmation() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold font-inter text-jade mb-12">
          Thank you for your Purchase!
        </h1>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6a2f90ec50975b7440af1896de313bfe5c68d534?width=260"
          alt="Threaded Chords of Life"
          className="w-32 h-52 object-cover mb-6"
        />

        <p className="font-bold font-inter text-xl text-black mb-10">
          Threaded Chords of Life: An Inspirational Memoir
        </p>

        <Link
          to="/books"
          className="bg-jade text-white font-bold font-inter text-lg px-10 py-3 rounded-lg hover:bg-jade/90 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </Layout>
  );
}
