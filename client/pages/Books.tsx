import Layout from '@/components/Layout';

export default function Books() {
  return (
    <Layout>
      <section className="bg-jade text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Books</h1>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            Check out iJADE Books
          </h2>
          <div className="w-32 h-1 bg-jade mx-auto mb-16"></div>

          <div className="text-center mb-16">
            <p className="text-xl text-gray-700">
              At iJADE, LLC books are created to empower growth, healing, clarity, and intentional living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Book 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-300 flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9b2840e4bafa4f148cff76914e48bf3ce6310f21?width=358"
                  alt="Threaded Chords of Life"
                  className="h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Threaded Chords of Life: An Inspirational Memoir
                </h3>
                <p className="text-gray-700 mb-6">
                  My book, Threaded Chords of Life: An Inspirational Memoir (#TCOL), is a seven-chapter journey that weaves personal life experiences with practical application segments and affirmation breaks. Each chapter is designed to encourage readers to activate—or reactivate—their dreams and walk forward with intention.
                </p>
                <button className="bg-jade text-white py-2 px-6 rounded font-semibold hover:bg-opacity-90 transition-colors">
                  Pre Order Book
                </button>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-300 flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e00b71a6c19db1939c1ec4df8216dbb322f7b5e2?width=356"
                  alt="The Broken Promise"
                  className="h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The (Broken) Promise: Of Love, Restoration, and Renewal
                </h3>
                <p className="text-gray-700 mb-6">
                  Please be on the lookout for the relaunch of Threaded Chords of Life and The Broken Promise: Reflections on Healthy Relationships in Summer 2026. Pre-orders for the relaunched edition will be available soon.
                </p>
                <button className="bg-jade text-white py-2 px-6 rounded font-semibold hover:bg-opacity-90 transition-colors">
                  Pre Order Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
