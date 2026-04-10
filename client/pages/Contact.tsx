import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm tracking-wider uppercase text-jade font-semibold">STAY IN CONTACT</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4">
              Get in Touch
            </h1>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
              />
              <input
                type="tel"
                placeholder="Phone No."
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
              />
            </div>
            
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
            />

            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-jade text-white py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">LinkTree</h2>
            <div className="flex items-center justify-center gap-6">
              <a href="#" className="text-gray-600 hover:text-jade transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.6 0h-15.2c-2.4 0-4.4 2-4.4 4.4v15.2c0 2.4 2 4.4 4.4 4.4h15.2c2.4 0 4.4-2 4.4-4.4v-15.2c0-2.4-2-4.4-4.4-4.4zm-11 19.6h-3.2v-9.6h3.2v9.6zm-1.6-10.9c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.6 10.9h-3.2v-4.8c0-1.1-.4-1.9-1.4-1.9-1 0-1.5.6-1.8 1.2-.1.2-.1.4-.1.7v4.8h-3.2v-9.6h3.2v1.3c.4-.6 1.1-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.1v5.7z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-jade transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.5c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2.1 1-3.3 1.3-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.1-.2-7.8-2.2-10.2-5.2-.4.8-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1.7 2.1 2.6 3.6 4.8 3.7-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.1-.1 2.2 1.4 4.8 2.2 7.5 2.2 9 0 13.9-7.5 13.9-13.9 0-.2 0-.4 0-.6.9-.7 1.8-1.6 2.5-2.6z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-jade transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.6 3.4H4.4C3.6 3.4 3 4 3 4.8v14.4c0 .8.6 1.4 1.4 1.4h14.2c.8 0 1.4-.6 1.4-1.4V4.8c0-.8-.6-1.4-1.4-1.4zm-7.1 14.6c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zm7.9-9.5h-3.4c-.6 0-1.1-.5-1.1-1.1v-3.2c0-.6.5-1.1 1.1-1.1h3.4c.6 0 1.1.5 1.1 1.1v3.2c0 .6-.5 1.1-1.1 1.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
