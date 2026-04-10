import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function EducationalConsulting() {
  const workshops = [
    {
      title: 'Leading with Vision',
      description: 'Learn how to plan, manage, and sustain impactful student programs. Participants engage in strategic planning and leadership practices that align programs with student needs and organizational goals.',
    },
    {
      title: 'From Chaos to Clarity',
      description: 'Build proactive classroom systems rooted in consistency, clarity, and connection. Educators explore real classroom scenarios and research-based strategies that reduce disruptions, increase student ownership, and foster positive learning environments.',
    },
    {
      title: 'Connection Before Content',
      description: 'Discover how strong relationships drive student engagement and academic success. This workshop equips educators with practical strategies to create inclusive, trust-centered classrooms where students feel seen, valued, and supported.',
    },
    {
      title: 'Beyond the Text',
      description: 'Re-imagine ELA instruction through active learning and collaboration. Educators experience strategies as learners first, then adapt them to boost engagement and deepen comprehension across diverse classrooms.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Let's strengthen teaching and learning together.<br />
                Book a consultation today!
              </h1>
              <p className="text-xl text-black mb-8 font-light leading-relaxed">
                iJADE, LLC partners with schools to build learning environments rooted in respect, strong relationships, and shared accountability. Through student-centered practices, iJADE, LLC supports engagement, responsibility, and confident growth, while addressing learning gaps through curriculum design, instructional support, and developmental education research.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/educational-consulting-form"
                  className="inline-block px-8 py-3 border-2 border-black text-black font-semibold rounded hover:bg-black hover:text-white transition-colors"
                >
                  Book Workshop
                </Link>
                <button className="inline-block px-8 py-3 border-2 border-black text-black font-semibold rounded hover:bg-black hover:text-white transition-colors">
                  View Workshop
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e35935485ee100168778cc0b161fc99943349c46?width=776"
                alt="Educational Consulting"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-black text-center mb-4">
            Professional Learning Workshops
          </h2>
          <p className="text-xl text-black text-center mb-12 font-light">
            Practical, purpose-driven workshops designed to support educators, strengthen and elevate student experiences.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {workshops.map((workshop) => (
              <div key={workshop.title} className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-neutral-grey mb-4">{workshop.title}</h3>
                <p className="text-sm text-neutral-grey font-light leading-relaxed flex-1">{workshop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-black">
            Let's strengthen your teaching and learning today!
          </h2>
        </div>
      </section>
    </Layout>
  );
}
