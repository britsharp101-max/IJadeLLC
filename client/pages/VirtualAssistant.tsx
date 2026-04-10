import Layout from '@/components/Layout';

export default function VirtualAssistant() {
  return (
    <Layout>
      <section className="bg-jade text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Virtual Assistant Services</h1>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-jade text-center mb-8">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-700 text-center">
            More details about our Virtual Assistant Services will be available soon.
          </p>
        </div>
      </section>
    </Layout>
  );
}
