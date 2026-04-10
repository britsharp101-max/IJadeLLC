import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function VisionExperiencePricing() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const packages = [
    {
      name: 'Copper',
      price: '$85',
      description: 'includes a polaroid photo.',
    },
    {
      name: 'Silver',
      price: '$95',
      description: 'includes a polaroid photo and a premium pen.',
    },
    {
      name: 'Gold',
      price: '$105',
      description: 'includes a polaroid photo, a premium pen, and one phone-to-phone follow-up.',
    },
    {
      name: 'Platinum',
      price: '$110',
      description: 'includes a polaroid photo, a premium pen, and one electronic follow-up.',
    },
    {
      name: 'Emerald',
      price: '$90',
      description: 'includes a Vision Book, a premium pen, and five phone-to-phone follow-ups.',
    },
    {
      name: 'Pearl',
      price: '$80',
      description: 'includes a Vision Book, a premium pen, and four phone-to-phone follow-ups.',
    },
    {
      name: 'Ruby',
      price: '$95',
      description: 'includes a Vision Book, a premium pen, and six phone-to-phone follow-ups.',
    },
    {
      name: 'JADE',
      price: '$120',
      description: 'includes a Vision Book, a premium pen, seven phone-to-phone follow-ups, and an autographed copy of Threaded Chords of Life: An Inspirational Memoir.',
    },
  ];

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % packages.length);
  };

  return (
    <Layout>
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-black mb-4">
            Vision Experience Session Packages
          </h2>
          <p className="text-lg text-black mb-12 font-light">
            i.J.A.D.E. "One-to-One" Vision Experience Session Packages
          </p>

          {/* Package Carousel */}
          <div className="relative mb-16">
            <div className="flex items-center gap-8">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="flex-shrink-0 p-2 hover:opacity-70 transition-opacity"
                aria-label="Previous package"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Carousel Display - Show current and adjacent packages */}
              <div className="flex gap-6 overflow-hidden flex-1">
                {[carouselIndex, (carouselIndex + 1) % packages.length, (carouselIndex + 2) % packages.length].map(
                  (index) => {
                    const pkg = packages[index];
                    return (
                      <div
                        key={`${pkg.name}-${index}`}
                        className="flex-shrink-0 w-64 bg-gray-100 rounded-lg shadow-md overflow-hidden"
                      >
                        {/* Header */}
                        <div className="bg-black text-white p-2 text-center text-sm font-semibold">
                          {pkg.name}
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col h-64">
                          <p className="text-2xl font-semibold text-black mb-4">{pkg.price}</p>
                          <p className="text-sm text-black flex-1 mb-4 font-light">{pkg.description}</p>

                          {/* Button */}
                          <Link
                            to="/vision-experience-form"
                            className="block w-full bg-jade text-white text-center py-2 px-4 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
                          >
                            Get Connected
                          </Link>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="flex-shrink-0 p-2 hover:opacity-70 transition-opacity"
                aria-label="Next package"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {packages.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === carouselIndex ? 'bg-black w-8' : 'bg-gray-300 w-2'
                  }`}
                  onClick={() => setCarouselIndex(index)}
                  aria-label={`Go to package ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Group Sessions Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-black mb-6">
            Vision Book Packages for Group Sessions
          </h2>
          <p className="text-2xl text-black mb-8 font-light">
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
          <h2 className="text-3xl font-light text-black">
            Your Vision Matters. Book today!
          </h2>
        </div>
      </section>
    </Layout>
  );
}
