import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-jade text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Empowering Growth Through Education, Vision, & Support
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Welcome to the i.J.A.D.E., LLC!
              </h1>
              <p className="text-lg mb-8 text-gray-100 leading-relaxed">
                iJADE, LLC is a multi-dimensional company dedicated to encouraging growth, clarity, and purpose. Through Educational Services, Vision Experience sessions, and Virtual Assistant Support.
              </p>
              <Link
                to="/service"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-jade transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/65fad56a136c6da974a2a07d8c232f4e71f21cce?width=530"
                alt="Professional woman"
                className="w-full max-w-md h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Get The Services You Need
            </h2>
            <div className="w-32 h-1 bg-jade mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 font-semibold">
              iJADE, LLC offers services that help individuals and organizations grow and provide support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Educational Consulting Card */}
            <Link
              to="/service"
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/308adbcdffead533f2e1be4e6ee936e8d1ed2ff3?width=524"
                alt="Educational Consulting"
                className="w-full h-60 object-cover"
              />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Educational Consulting
                </h3>
                <p className="text-gray-600 mb-6 flex-1">
                  Support that strengthens learning environments and student engagement.
                </p>
                <div className="flex items-center gap-2 text-jade font-semibold">
                  <span>Learn more</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Vision Experience Card */}
            <Link
              to="/vision-experience"
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/62650c9f29858f4df20393330a2d7a6bfb65e029?width=550"
                alt="Vision Experience"
                className="w-full h-60 object-cover"
              />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Vision Experience
                </h3>
                <p className="text-gray-600 mb-6 flex-1">
                  Clarify your dreams, goals and purpose. Create affirmations and meaningful visual imagery.
                </p>
                <div className="flex items-center gap-2 text-jade font-semibold">
                  <span>Learn More</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Virtual Assistant Services Card */}
            <Link
              to="/virtual-assistant"
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/409bafb50def86095cab70c47635931bf6fc58e1?width=550"
                alt="Virtual Assistant Services"
                className="w-full h-60 object-cover"
              />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Virtual Assistant Services
                </h3>
                <p className="text-gray-600 mb-6 flex-1">
                  Reliable virtual assistant services to simplify operations and support business growth.
                </p>
                <div className="flex items-center gap-2 text-jade font-semibold">
                  <span>Learn More</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section className="py-20 md:py-32 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            Looking For More Insight?
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-700 mb-12">
            Check out our Blog.
          </p>
          <Link
            to="#"
            className="inline-block px-8 py-3 border-2 border-gray-700 text-gray-800 font-semibold rounded hover:bg-gray-700 hover:text-white transition-colors"
          >
            Blog
          </Link>
        </div>
      </section>
    </Layout>
  );
}
