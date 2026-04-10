import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-jade mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-700 mb-8">
            The page you're looking for doesn't exist. Feel free to continue prompting us to build the content you need!
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-jade text-white font-semibold rounded hover:bg-opacity-90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
