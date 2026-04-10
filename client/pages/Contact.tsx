import Layout from '@/components/Layout';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    reset();
  };

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-base tracking-wide uppercase text-black font-light">STAY IN CONTACT</span>
            <h1 className="text-6xl font-light text-black mt-6 font-encode-sans">
              Get in Touch
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-6 py-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade placeholder-gray-500 font-encode-sans"
              />
              <input
                type="tel"
                placeholder="Phone No."
                {...register('phone', { required: 'Phone is required' })}
                className="w-full px-6 py-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade placeholder-gray-500 font-encode-sans"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-6 py-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade placeholder-gray-500 font-encode-sans"
            />

            <textarea
              placeholder="Message"
              {...register('message', { required: 'Message is required' })}
              rows={6}
              className="w-full px-6 py-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade placeholder-gray-500 font-encode-sans"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-jade text-white py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors font-encode-sans"
            >
              Send Message
            </button>
          </form>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-black mb-8">LinkTree</h2>
            <div className="flex items-center justify-center gap-6">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/10c73f506629bf41ca0b1bd1ae11a3a48bb004a2?width=64" alt="YouTube" className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/0d764aaae8323773a459da62ee835f9b2b598915?width=64" alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
