import Layout from '@/components/Layout';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface EducationalConsultingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  workshop: string;
  message: string;
}

export default function EducationalConsultingForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EducationalConsultingFormData>();

  const workshops = [
    'Leading with Vision',
    'From Chaos to Clarity',
    'Connection Before Content',
    'Beyond the Text',
  ];

  const onSubmit = (data: EducationalConsultingFormData) => {
    console.log('Educational Consulting form submitted:', data);
    navigate('/educational-consulting-confirmation');
    reset();
  };

  return (
    <Layout>
      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Book a Workshop
            </h2>
            <p className="text-lg text-black font-light">
              Fill out the form below to book a professional learning workshop for your team.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  {...register('firstName', { required: 'First name is required' })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register('lastName', { required: 'Last name is required' })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                {...register('phone', { required: 'Phone number is required' })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                placeholder="Phone Number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Workshop
              </label>
              <select
                {...register('workshop', { required: 'Please select a workshop' })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
              >
                <option value="">Select a workshop...</option>
                {workshops.map((workshop) => (
                  <option key={workshop} value={workshop}>
                    {workshop}
                  </option>
                ))}
              </select>
              {errors.workshop && (
                <p className="text-red-500 text-sm mt-1">{errors.workshop.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                placeholder="Message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-jade text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
