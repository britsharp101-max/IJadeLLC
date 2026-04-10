import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Navigation links configuration
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/service', label: 'Service' },
    { path: '/books', label: 'Books' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c44ca2e57ba0f9cce8a187b887727a22ab9746c7?width=166"
              alt="iJADE Logo"
              className="w-12 h-12 mr-auto"
            />
            <span className="font-bold text-2xl text-jade hidden sm:inline">iJADE, LLC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-base transition-colors whitespace-nowrap ${
                  isActive(path)
                    ? 'text-black font-semibold'
                    : 'text-black font-normal hover:text-jade'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-gray-800 text-2xl p-2"
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-jade text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2024 iJADE, LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
