import Layout from '@/components/Layout';

export default function Books() {
  const books = [
    {
      title: 'Threaded Chords of Life: An Inspirational Memoir',
      description: 'My book, Threaded Chords of Life: An Inspirational Memoir (#TCOL), is a seven-chapter journey that weaves personal life experiences with practical application segments and affirmation breaks. Each chapter is designed to encourage readers to activate—or reactivate—their dreams and walk forward with intention.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/9b2840e4bafa4f148cff76914e48bf3ce6310f21?width=358',
    },
    {
      title: 'The (Broken) Promise: Of Love, Restoration, and Renewal',
      description: 'Please be on the lookout for the relaunch of Threaded Chords of Life and The Broken Promise: Reflections on Healthy Relationships in Summer 2026. Pre-orders for the relaunched edition will be available soon.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/e00b71a6c19db1939c1ec4df8216dbb322f7b5e2?width=356',
    },
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-jade text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Books</h1>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
            Check out iJADE Books
          </h2>

          <div className="text-center mb-16">
            <p className="text-2xl text-jade font-light">
              At iJADE, LLC books are created to empower growth, healing, clarity, and intentional living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {books.map((book) => (
              <div key={book.title} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="flex-shrink-0">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {book.title}
                  </h3>
                  <p className="text-black mb-6 flex-1 font-light text-lg">
                    {book.description}
                  </p>
                  <button className="bg-gray-300 text-black py-2 px-6 rounded font-semibold hover:bg-gray-400 transition-colors text-sm">
                    Pre Order Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
