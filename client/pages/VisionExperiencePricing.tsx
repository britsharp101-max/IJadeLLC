import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function VisionExperiencePricing() {
  const packages = [
    {
      name: 'Copper',
      price: '$85',
      description: 'includes a polaroid photo.',
    },
    {
      name: 'Silver',
      price: '$95',
      description: 'includes a polaroid photo, a premium pen, and one electronic follow-up.',
    },
    {
      name: 'Diamond',
      price: '$120',
      description: 'includes a polaroid photo, a premium pen, and three electronic follow-ups.',
    },
  ];

  return (
    <Layout>
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-jade mb-4">
            Vision Experience Session Packages
          </h2>
          <p className="text-base text-jade font-light mb-12">
            i.J.A.D.E. "One-to-One" Vision Experience Session Packages
          </p>

          {/* Package Carousel - All 3 packages shown */}
          <div className="relative mb-16">
            <div className="flex gap-6 justify-center">
              {packages.map((pkg, index) => (
                <div
                  key={`${pkg.name}-${index}`}
                  className="flex-shrink-0 w-56 bg-gray-100 rounded-lg shadow-md overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-black text-white p-3 text-center text-sm font-semibold uppercase">
                    {pkg.name}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col min-h-64">
                    <p className="text-3xl font-bold text-black mb-4">{pkg.price}</p>
                    <p className="text-xs text-jade flex-1 mb-6 font-light leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Button */}
                    <Link
                      to="/vision-experience-form"
                      className="block w-full bg-jade text-white text-center py-2 px-4 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Get Connected
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optional Add-On Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-jade font-semibold">
            Optional – Add a 15-minute Virtual Follow-Up to your package for <span className="text-2xl font-bold">$44</span>
          </p>
        </div>
      </section>

      {/* Group Sessions Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-jade mb-6">
            Vision Book Packages for Group Sessions
          </h2>
          <p className="text-xl text-jade font-light mb-12 max-w-3xl mx-auto">
            Practical, purpose-driven workshops designed to support educators, strengthen classrooms, and elevate student experiences.
          </p>
          <Link
            to="/vision-experience-form"
            className="inline-block px-8 py-3 border-2 border-black text-black font-semibold rounded hover:bg-black hover:text-white transition-colors"
          >
            Get Connected
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-jade">
            Your Vision Matters. Book today!
          </h2>
        </div>
      </section>
    </Layout>
  );
}
