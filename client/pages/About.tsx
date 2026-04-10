import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-jade text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-inter">About</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-inter text-black text-center mb-20">
            The iJADE Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/12e24261bc674f6d38b09076dbd682c7d58919d9?width=600"
                alt="Founder"
                className="w-64 h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-xl font-normal font-inter text-black leading-relaxed">
                iJADE, LLC's mission is to empower entrepreneurs, small businesses, and growing brands by providing reliable, strategic virtual support that simplifies operations and fuels sustainable growth. We are committed to delivering detail-oriented administrative, creative, and operational services that remove overwhelm, increase productivity, and create structure behind every vision. Through professionalism, integrity, and excellence, iJADE, LLC exists to help clients focus on what they do best, while we handle the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-jade text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-inter">
            Values — Education Enlightenment Empowerment
          </h2>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-inter text-black text-center mb-20">
            The iJADE Story
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ffttt0NqFGo"
                title="iJADE Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
            <div>
              <p className="text-lg font-normal font-inter text-black leading-relaxed mb-6">
                iJADE, LLC is a multi-dimensional company dedicated to encouraging growth, clarity, and purpose. Through educational services, Vision Experience sessions, and virtual assistant support, iJADE, LLC meets individuals, educators, and entrepreneurs where they are—helping bring ideas to life with intention and excellence. Rooted in collaboration, creativity, and faith, iJADE, LLC exists to cultivate God-given gifts, empower bold vision, and inspire others to move forward with confidence and purpose.
              </p>
              <p className="text-lg font-normal font-inter text-black">
                #DreamForward
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
