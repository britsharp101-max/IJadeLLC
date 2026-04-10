import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function VirtualAssistant() {
  const plans = [
    {
      name: 'COPPER',
      price: '$300',
      hours: '10 Hours Service',
      color: 'bg-purple-200',
    },
    {
      name: 'RUBY',
      price: '$450',
      hours: '20 Hours Service',
      color: 'bg-purple-200',
    },
    {
      name: 'JADE',
      price: '$750',
      hours: '40 Hours Service',
      color: 'bg-purple-200',
    },
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
      {/* Page banner */}
      <div className="bg-jade py-5 text-center">
        <h1 className="text-white text-4xl font-bold font-inter">Virtual Assistant Services</h1>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-inter text-black mb-6">
                Create Your Vision; Achieve Your Dream!
              </h2>
              <p className="text-lg font-normal font-inter text-black leading-relaxed mb-8">
                iJADE LLC provides reliable virtual assistant services to simplify operations and support business growth. From administrative support to creative and operational tasks, flexible service packages help take daily work off your plate so you can focus on what matters most efficiently with peace of mind.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/virtual-assistant-form"
                  className="inline-block px-8 py-3 bg-jade text-white font-bold font-inter rounded-lg hover:bg-jade/90 transition-colors"
                >
                  Get Connected
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/bee053fffd23f8c4d17c4b2d3e45b1774a2d55c6?width=880"
                alt="Virtual Assistant Services"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-inter text-black text-center mb-6">
            Choose your Plan
          </h2>
          <p className="text-center text-jade text-lg font-normal font-inter mb-16">
            Appointment Setting, Calendar Management, Client Mailouts & Gifts, Copy-writing, Data Entry, Document Creation, Email Management, File Management, Invoices, Letter Writing, Program Design, Social Media Graphics, Social Media Post, Travel Arrangements, Website Maintenance, and Zoom Support
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-purple-100 rounded-lg shadow-lg overflow-hidden flex flex-col p-6">
                <h3 className="text-2xl font-bold font-inter text-black mb-4">{plan.name}</h3>
                <p className="text-2xl font-bold font-inter text-black mb-2">{plan.price}</p>
                <p className="text-lg font-normal font-inter text-black mb-6">{plan.hours}</p>
                <Link
                  to="/virtual-assistant-form"
                  className="mt-auto bg-jade text-white py-3 px-4 rounded-lg font-bold font-inter text-center hover:bg-jade/90 transition-colors"
                >
                  Get Connected
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-inter text-jade text-center mb-12">
            iJADE vs Other Virtual Assistant Services
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-black p-4 text-left font-bold font-inter text-black text-xl">
                    Company
                  </th>
                  <th className="border-b-2 border-black p-4 text-left font-bold font-inter text-black text-xl">
                    iJADE
                  </th>
                  <th className="border-b-2 border-black p-4 text-left font-bold font-inter text-black text-xl">
                    Other Services
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border-b border-black p-4 font-bold font-inter text-black text-lg">
                      {row.category}
                    </td>
                    <td className="border-b border-black p-4 font-normal font-inter text-black text-base">
                      {row.ijadeName}
                    </td>
                    <td className="border-b border-black p-4 font-normal font-inter text-black text-base">
                      {row.otherName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-black mb-6">
            Ready to Get Connected?
          </h2>
          <p className="text-lg font-normal font-inter text-black mb-8">
            Let's work together to support your growth and success.
          </p>
          <Link
            to="/virtual-assistant-form"
            className="inline-block px-8 py-3 bg-jade text-white font-bold font-inter rounded-lg hover:bg-jade/90 transition-colors"
          >
            Get Connected
          </Link>
        </div>
      </section>
    </Layout>
  );
}
