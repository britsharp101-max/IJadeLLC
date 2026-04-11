import Layout from '@/components/Layout';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface EducationalConsultingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  workshops: string[];
  message: string;
}

interface WorkshopOption {
  id: string;
  name: string;
  date: string;
}

export default function EducationalConsultingForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<EducationalConsultingFormData>({
    defaultValues: {
      workshops: [],
    },
  });

  const workshops: WorkshopOption[] = [
    {
      id: 'calm-consistent-connected-july11',
      name: 'Calm, Consistent, Connected Classrooms',
      date: 'Saturday, July 11, 2026 • 9:00 am - 9:45 am',
    },
    {
      id: 'calm-consistent-connected-july18',
      name: 'Calm, Consistent, Connected Classrooms',
      date: 'Saturday, July 18, 2026 • 9:00 am - 9:45 am',
    },
    {
      id: 'connection-before-content-july11',
      name: 'Connection Before Content',
      date: 'Saturday, July 11, 2026 • 10:00 am - 10:45 am',
    },
    {
      id: 'connection-before-content-july18',
      name: 'Connection Before Content',
      date: 'Saturday, July 18, 2026 • 10:00 am - 10:45 am',
    },
    {
      id: 'leading-with-vision-july11',
      name: 'Leading with Vision',
      date: 'Saturday, July 11, 2026 • 11:00 am - 11:45 am',
    },
    {
      id: 'leading-with-vision-july18',
      name: 'Leading with Vision',
      date: 'Saturday, July 18, 2026 • 11:00 am - 11:45 am',
    },
    {
      id: 'bringing-ela-to-life-july11',
      name: 'Bringing ELA to Life',
      date: 'Saturday, July 11, 2026 • 12:00 pm - 12:45 pm',
    },
    {
      id: 'bringing-ela-to-life-july18',
      name: 'Bringing ELA to Life',
      date: 'Saturday, July 18, 2026 • 12:00 pm - 12:45 pm',
    },
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
                Select Workshops
              </label>
              <div className="space-y-3">
                {workshops.map((workshop) => (
                  <div key={workshop.id} className="flex items-start">
                    <input
                      type="checkbox"
                      id={workshop.id}
                      value={workshop.id}
                      {...register('workshops')}
                      className="w-4 h-4 mt-1 rounded border-gray-300 text-jade focus:ring-2 focus:ring-jade cursor-pointer"
                    />
                    <label htmlFor={workshop.id} className="ml-3 cursor-pointer">
                      <p className="font-medium text-gray-700">{workshop.name}</p>
                      <p className="text-sm text-gray-500">{workshop.date}</p>
                    </label>
                  </div>
                ))}
              </div>
              {errors.workshops && (
                <p className="text-red-500 text-sm mt-1">Please select at least one workshop</p>
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
