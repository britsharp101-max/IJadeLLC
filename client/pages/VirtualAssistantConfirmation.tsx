import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function VirtualAssistantConfirmation() {
  return (
    <Layout>
      {/* Confirmation Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Checkmark Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-jade rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-jade mb-4">
            Thank You!
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-700 mb-8">
            Your Virtual Assistant request has been received.
          </p>

          {/* Description */}
          <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We appreciate you choosing our Virtual Assistant services. Our team will review your request and get back to you shortly at the email and phone number you provided. Thank you for your business!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/virtual-assistant"
              className="inline-block px-8 py-3 bg-jade text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              View Services
            </Link>
            <Link
              to="/"
              className="inline-block px-8 py-3 border-2 border-jade text-jade font-semibold rounded-lg hover:bg-jade/5 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
