import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function VirtualAssistant() {
  const plans = [
    {
      name: 'COPPER',
      price: '$300',
      hours: '10 Hours Service',
      description: 'Perfect for getting started',
    },
    {
      name: 'RUBY',
      price: '$450',
      hours: '20 Hours Service',
      description: 'For growing businesses',
    },
    {
      name: 'JADE',
      price: '$750',
      hours: '40 Hours Service',
      description: 'Complete support package',
    },
  ];

  const features = [
    'Appointment Setting',
    'Calendar Management',
    'Client Mailouts & Gifts',
    'Copy-writing',
    'Data Entry',
    'Document Creation',
    'Email Management',
    'File Management',
    'Invoices',
    'Letter Writing',
    'Program Design',
    'Social Media Graphics',
    'Social Media Post',
    'Travel Arrangements',
    'Website Maintenance',
    'Zoom Support',
  ];

  const comparison = [
    {
      category: 'Approach',
      ijadeName: 'Partners with clients — strategic support, empathy, goal-oriented',
      otherName: 'Functional support — execute tasks as requested',
    },
    {
      category: 'Style',
      ijadeName: 'Warm, supportive, relationship-driven',
      otherName: 'Efficient, task-focused',
    },
    {
      category: 'Customization',
      ijadeName: "Tailored to client's vision + long-term goals",
      otherName: 'Standard task packages',
    },
    {
      category: 'Support',
      ijadeName: 'Built into packages (e.g., virtual follow-ups, ongoing accountability)',
      otherName: 'Limited or add-on only',
    },
    {
      category: 'Growth',
      ijadeName: 'Offers tools, frameworks, and teaching focused on growth',
      otherName: 'Focuses on execution (no growth training)',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-inter text-black mb-6 leading-tight">
                Create Your Vision<br />
                Achieve Your Dream!
              </h2>
              <p className="text-xl text-black mb-8 font-light leading-relaxed">
                iJADE, LLC provides reliable virtual assistant services to simplify operations and support business growth. From administrative support to creative and operational tasks, flexible service packages help take daily work off your plate so you can focus on what matters most efficiently with peace of mind.
              </p>
              <Link
                to="/virtual-assistant-form"
                className="inline-block px-8 py-3 border-2 border-black text-black font-semibold rounded hover:bg-black hover:text-white transition-colors"
              >
                Get Connected
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/bee053fffd23f8c4d17c4b2d3e45b1774a2d55c6?width=880"
                alt="Virtual Assistant Services"
                className="w-full max-w-lg h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-inter text-black text-center mb-4">
            Choose Your Plan
          </h2>
          <p className="text-center text-black text-lg font-normal font-inter mb-4 max-w-3xl mx-auto">
            Select the perfect package for your business needs
          </p>

          <div className="mb-12 bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold font-inter text-black mb-6 text-center">Services Included</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-jade font-bold text-xl mt-1">✓</span>
                  <span className="font-normal font-inter text-black">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow border-t-4 border-jade">
                <div className="bg-gradient-to-r from-jade to-jade/80 p-6 text-white">
                  <h3 className="text-3xl font-bold font-inter mb-2">{plan.name}</h3>
                  <p className="text-sm font-normal">{plan.description}</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-6">
                    <p className="text-4xl font-bold font-inter text-jade mb-1">{plan.price}</p>
                    <p className="text-lg font-normal font-inter text-black">{plan.hours}</p>
                  </div>
                  <Link
                    to="/virtual-assistant-form"
                    className="mt-auto bg-jade text-white py-3 px-6 rounded-lg font-bold font-inter text-center hover:bg-jade/90 transition-colors"
                  >
                    Get Connected
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What iJADE Provides Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-inter text-black text-center mb-12">
            What iJADE Provides
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold font-inter text-jade mb-4">Strategic Support</h3>
              <p className="font-normal font-inter text-black leading-relaxed">
                We partner with you to understand your goals and provide customized solutions that align with your vision and business objectives.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold font-inter text-jade mb-4">Professional Execution</h3>
              <p className="font-normal font-inter text-black leading-relaxed">
                From administrative tasks to creative projects, we handle everything with excellence and attention to detail.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold font-inter text-jade mb-4">Growth Focused</h3>
              <p className="font-normal font-inter text-black leading-relaxed">
                We provide tools, frameworks, and guidance to help your business grow while we handle the operational burden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-inter text-black text-center mb-12">
            iJADE vs Other Virtual Assistant Services
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-jade">
                  <th className="border-b-2 border-jade p-6 text-left font-bold font-inter text-white text-lg">
                    Category
                  </th>
                  <th className="border-b-2 border-jade p-6 text-left font-bold font-inter text-white text-lg">
                    iJADE
                  </th>
                  <th className="border-b-2 border-jade p-6 text-left font-bold font-inter text-white text-lg">
                    Other Services
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border-b border-gray-200 p-6 font-bold font-inter text-black text-base whitespace-nowrap">
                      {row.category}
                    </td>
                    <td className="border-b border-gray-200 p-6 font-normal font-inter text-black text-base">
                      {row.ijadeName}
                    </td>
                    <td className="border-b border-gray-200 p-6 font-normal font-inter text-black text-base">
                      {row.otherName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-jade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-white mb-6">
            Ready to Get Connected?
          </h2>
          <p className="text-xl font-normal font-inter text-white mb-8 max-w-2xl mx-auto">
            Let's work together to support your growth and success. Choose your plan and get started today.
          </p>
          <Link
            to="/virtual-assistant-form"
            className="inline-block px-12 py-4 bg-white text-jade font-bold font-inter text-lg rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Connected Now
          </Link>
        </div>
      </section>
    </Layout>
  );
}
