import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function VisionExperience() {
  const packages = [
    {
      name: 'Copper',
      price: '$85',
      description: 'includes a polaroid photo.',
      color: 'bg-gray-100',
    },
    {
      name: 'Silver',
      price: '$95',
      description: 'includes a polaroid photo and a premium pen.',
      color: 'bg-gray-100',
    },
    {
      name: 'Gold',
      price: '$105',
      description: 'includes a polaroid photo, a premium pen, and one phone-to-phone follow-up.',
      color: 'bg-gray-100',
    },
    {
      name: 'Platinum',
      price: '$110',
      description: 'includes a polaroid photo, a premium pen, and one electronic follow-up.',
      color: 'bg-gray-100',
    },
    {
      name: 'Emerald',
      price: '$90',
      description: 'includes a Vision Book, a premium pen, and five phone-to-phone follow-ups.',
      color: 'bg-gray-100',
    },
    {
      name: 'Pearl',
      price: '$80',
      description: 'includes a Vision Book, a premium pen, and four phone-to-phone follow-ups.',
      color: 'bg-gray-100',
    },
    {
      name: 'Ruby',
      price: '$95',
      description: 'includes a Vision Book, a premium pen, and six phone-to-phone follow-ups.',
      color: 'bg-gray-100',
    },
    {
      name: 'JADE',
      price: '$120',
      description: 'includes a Vision Book, a premium pen, seven phone-to-phone follow-ups, and an autographed copy of Threaded Chords of Life: An Inspirational Memoir.',
      color: 'bg-gray-100',
    },
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-jade text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Vision Experience</h1>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-jade text-center mb-16">
            Vision Experience Session Packages
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`${pkg.color} rounded-lg shadow-lg overflow-hidden flex flex-col`}
              >
                <div className="bg-black text-white text-center py-3">
                  <h3 className="text-sm md:text-base font-semibold">{pkg.name}</h3>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {pkg.price}
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 mb-6 flex-1 leading-snug">
                    {pkg.description}
                  </p>
                  <button className="bg-jade text-white py-2 px-4 rounded text-xs md:text-sm font-semibold hover:bg-opacity-90 transition-colors">
                    Get Connected
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Vision Book Packages Section */}
          <div className="bg-gray-100 rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-jade mb-8">
              Vision Book Packages for Group Sessions
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Practical, purpose-driven workshops designed to support educators, strengthen classrooms, and elevate student experiences.
            </p>
            <Link
              to="#"
              className="inline-block px-8 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded hover:bg-gray-800 hover:text-white transition-colors"
            >
              Get Connected
            </Link>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-jade">
              Your Vision Matters. Book today!
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  );
}
