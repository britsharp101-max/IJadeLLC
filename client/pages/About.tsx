import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-jade text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">About</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            The iJADE Mission
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/12e24261bc674f6d38b09076dbd682c7d58919d9?width=600"
                alt="Founder"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                iJADE, LLC's mission is to empower entrepreneurs, small businesses, and growing brands by providing reliable, strategic virtual support that simplifies operations and fuels sustainable growth. We are committed to delivering detail-oriented administrative, creative, and operational services that remove overwhelm, increase productivity, and create structure behind every vision. Through professionalism, integrity, and excellence, iJADE, LLC exists to help clients focus on what they do best, while we handle the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-jade text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Values — Education Enlightenment Empowerment
          </h2>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            The iJADE Story
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                iJADE, LLC is a multi-dimensional company dedicated to encouraging growth, clarity, and purpose. Through educational services, Vision Experience sessions, and virtual assistant support, iJADE, LLC meets individuals, educators, and entrepreneurs where they are—helping bring ideas to life with intention and excellence. Rooted in collaboration, creativity, and faith, iJADE, LLC exists to cultivate God-given gifts, empower bold vision, and inspire others to move forward with confidence and purpose.
              </p>
              <p className="text-lg font-semibold text-jade">
                #DreamForward
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ab24b6fd3e11f589aa0a0393e091aa84f56b09fa?width=946"
                alt="iJADE Story"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
