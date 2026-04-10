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
    cta: { label: "Pre Order", href: "/books/cart", style: "buy" },
  },
  {
    id: "broken-promise",
    title: "The (Broken) Promise: Of Love, Restoration, and Renewal",
    description:
      "Please be on the lookout for the relaunch of Threaded Chords of Life and The Broken Promise: Reflections on Healthy Relationships in Summer 2026. Pre-orders for the relaunched edition will be available soon.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e00b71a6c19db1939c1ec4df8216dbb322f7b5e2?width=356",
    cta: { label: "Coming Soon", href: "#", style: "preorder" },
  },
];

export default function Books() {
  return (
    <Layout>
      {/* Main content */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page heading */}
          <h1 className="text-3xl md:text-4xl font-bold font-inter text-black mb-6">
            Books
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-black text-center mb-8">
            Check out iJADE Books
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-normal font-inter text-jade text-center mb-16 max-w-3xl mx-auto">
            At iJADE, LLC books are created to empower growth, healing,
            clarity, and intentional living.
          </p>

          {/* Book cards */}
          <div className="space-y-12">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex flex-col md:flex-row bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden"
              >
                {/* Book cover - Left side */}
                <div className="flex-shrink-0 flex items-center justify-center p-8 md:p-12 bg-white">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-40 md:w-48 h-auto object-cover"
                  />
                </div>

                {/* Book info - Right side */}
                <div className="flex flex-col justify-center px-6 md:px-10 py-8 md:py-12 flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold font-inter text-black mb-6 leading-snug">
                    {book.title}
                  </h3>
                  <p
                    className="text-base md:text-lg font-normal font-inter text-black mb-8 leading-relaxed"
                    style={{ letterSpacing: "0.12px" }}
                  >
                    {book.description}
                  </p>

                  {book.cta.style === "buy" ? (
                    <Link
                      to={book.cta.href}
                      className="inline-block bg-jade text-white text-sm md:text-base font-inter px-8 py-3 rounded-lg hover:bg-jade/90 transition-colors w-fit"
                    >
                      {book.cta.label}
                    </Link>
                  ) : (
                    <button
                      className="inline-block bg-[#D9D9D9] text-black text-sm md:text-base font-bold font-inter px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors w-fit cursor-not-allowed"
                      disabled
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
