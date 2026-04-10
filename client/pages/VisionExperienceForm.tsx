import Layout from '@/components/Layout';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormType = 'individual' | 'organization';

interface IndividualFormData {
  firstName: string;
  lastName: string;
  package: string;
  plan: string;
  email: string;
  phone: string;
}

interface OrganizationFormData {
  organization: string;
  attendees: string;
  package: string;
  plan: string;
  email: string;
  phone: string;
}

type FormData = IndividualFormData | OrganizationFormData;

export default function VisionExperienceForm() {
  const navigate = useNavigate();
  const [formType, setFormType] = useState<FormType>('individual');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const packages = [
    'Copper - $85',
    'Silver - $95',
    'Gold - $105',
    'Platinum - $110',
    'Emerald - $90',
    'Pearl - $80',
    'Ruby - $95',
    'JADE - $120',
  ];

  const plans = ['Standard', 'Premium', 'Deluxe'];

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', { type: formType, ...data });
    navigate('/vision-experience-confirmation');
    // Here you would typically send the data to a backend
    reset();
    // Show success message or redirect
  };

  const handleFormTypeChange = (type: FormType) => {
    setFormType(type);
    reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-jade mb-4">
            Create Your Vision, Achieve Your Dream!
          </h1>
          <p className="text-lg text-black font-light">
            Fill out i.J.A.D.E. Vision Experience form to get connected
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Form Type Selector */}
          <div className="flex gap-4 mb-8 border-b-2 border-gray-200">
            <button
              onClick={() => handleFormTypeChange('individual')}
              className={`px-6 py-3 font-semibold border-b-4 transition-colors ${
                formType === 'individual'
                  ? 'border-jade text-jade'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => handleFormTypeChange('organization')}
              className={`px-6 py-3 font-semibold border-b-4 transition-colors ${
                formType === 'organization'
                  ? 'border-jade text-jade'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Organization/Group
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Individual Form */}
            {formType === 'individual' && (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                      placeholder="Enter your first name"
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
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Package
                    </label>
                    <select
                      {...register('package', { required: 'Please select a package' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a package...</option>
                      {packages.map((pkg) => (
                        <option key={pkg} value={pkg}>
                          {pkg}
                        </option>
                      ))}
                    </select>
                    {errors.package && (
                      <p className="text-red-500 text-sm mt-1">{errors.package.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plan
                    </label>
                    <select
                      {...register('plan', { required: 'Please select a plan' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a plan...</option>
                      {plans.map((plan) => (
                        <option key={plan} value={plan}>
                          {plan}
                        </option>
                      ))}
                    </select>
                    {errors.plan && (
                      <p className="text-red-500 text-sm mt-1">{errors.plan.message}</p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Organization Form */}
            {formType === 'organization' && (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization/Group Name
                    </label>
                    <input
                      type="text"
                      {...register('organization', { required: 'Organization name is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                      placeholder="Enter organization name"
                    />
                    {errors.organization && (
                      <p className="text-red-500 text-sm mt-1">{errors.organization.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Attendees
                    </label>
                    <input
                      type="number"
                      {...register('attendees', { required: 'Number of attendees is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                      placeholder="Enter number of attendees"
                      min="1"
                    />
                    {errors.attendees && (
                      <p className="text-red-500 text-sm mt-1">{errors.attendees.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Package
                    </label>
                    <select
                      {...register('package', { required: 'Please select a package' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a package...</option>
                      {packages.map((pkg) => (
                        <option key={pkg} value={pkg}>
                          {pkg}
                        </option>
                      ))}
                    </select>
                    {errors.package && (
                      <p className="text-red-500 text-sm mt-1">{errors.package.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plan
                    </label>
                    <select
                      {...register('plan', { required: 'Please select a plan' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jade focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a plan...</option>
                      {plans.map((plan) => (
                        <option key={plan} value={plan}>
                          {plan}
                        </option>
                      ))}
                    </select>
                    {errors.plan && (
                      <p className="text-red-500 text-sm mt-1">{errors.plan.message}</p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Common Fields */}
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
                placeholder="Enter your email"
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
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-jade text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get Connected
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
