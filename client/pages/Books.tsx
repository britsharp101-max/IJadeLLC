import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const books = [
  {
    id: "threaded",
    title: "Threaded Chords of Life: An Inspirational Memoir",
    description:
      "My book, Threaded Chords of Life: An Inspirational Memoir (#TCOL), is a seven-chapter journey that weaves personal life experiences with practical application segments and affirmation breaks. Each chapter is designed to encourage readers to activate—or reactivate—their dreams and walk forward with intention.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/9b2840e4bafa4f148cff76914e48bf3ce6310f21?width=358",
    cta: { label: "Buy Now", href: "/books/cart", style: "buy" },
  },
  {
    id: "broken-promise",
    title: "The (Broken) Promise: Of Love, Restoration, and Renewal",
    description:
      "Please be on the lookout for the relaunch of Threaded Chords of Life and The Broken Promise: Reflections on Healthy Relationships in Summer 2026. Pre-orders for the relaunched edition will be available soon.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e00b71a6c19db1939c1ec4df8216dbb322f7b5e2?width=356",
    cta: { label: "Pre Order Book", href: "#", style: "preorder" },
  },
];

export default function Books() {
  return (
    <Layout>
      {/* Page banner */}
      <div className="bg-jade py-5 text-center">
        <h1 className="text-white text-4xl font-bold font-inter">Books</h1>
      </div>

      {/* Main content */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page heading */}
          <h2 className="text-4xl font-bold font-inter text-black text-center mb-6">
            Check out iJADE Books
          </h2>

          {/* Tagline */}
          <p className="text-2xl font-normal font-inter text-jade text-center mb-14 max-w-2xl mx-auto">
            At iJADE, LLC books are created to empower growth, healing,
            clarity, and intentional living.
          </p>

          {/* Book cards */}
          <div className="flex flex-col gap-10">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex flex-col sm:flex-row bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden"
              >
                {/* Book cover */}
                <div className="flex-shrink-0 flex items-start justify-center p-6 sm:p-8">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-36 sm:w-44 h-auto object-cover"
                  />
                </div>

                {/* Book info */}
                <div className="flex flex-col justify-center px-6 sm:px-8 pb-8 sm:py-8 flex-1">
                  <h3 className="text-2xl font-bold font-inter text-black mb-4 leading-snug">
                    {book.title}
                  </h3>
                  <p
                    className="text-lg font-normal font-inter text-black mb-6 leading-relaxed"
                    style={{ letterSpacing: "0.075rem" }}
                  >
                    {book.description}
                  </p>

                  {book.cta.style === "buy" ? (
                    <Link
                      to={book.cta.href}
                      className="inline-block bg-jade text-white text-sm font-bold font-inter px-6 py-2 rounded hover:bg-jade/90 transition-colors w-fit"
                    >
                      {book.cta.label}
                    </Link>
                  ) : (
                    <button
                      className="inline-block bg-[#D9D9D9] text-black text-sm font-bold font-inter px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors w-fit"
                    >
                      {book.cta.label}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
