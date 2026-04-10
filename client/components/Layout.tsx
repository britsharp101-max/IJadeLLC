import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c44ca2e57ba0f9cce8a187b887727a22ab9746c7?width=166"
              alt="iJADE Logo"
              className="w-12 h-12"
            />
            <span className="font-bold text-xl text-jade">iJADE, LLC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-base font-medium transition-colors ${
                isActive('/') ? 'text-jade font-semibold' : 'text-gray-700 hover:text-jade'
              }`}
            >
              Home
            </Link>
            <Link
              to="/service"
              className={`text-base font-medium transition-colors ${
                isActive('/service') ? 'text-jade font-semibold' : 'text-gray-700 hover:text-jade'
              }`}
            >
              Service
            </Link>
            <Link
              to="/books"
              className={`text-base font-medium transition-colors ${
                isActive('/books') ? 'text-jade font-semibold' : 'text-gray-700 hover:text-jade'
              }`}
            >
              Books
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium transition-colors ${
                isActive('/about') ? 'text-jade font-semibold' : 'text-gray-700 hover:text-jade'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-base font-medium transition-colors ${
                isActive('/contact') ? 'text-jade font-semibold' : 'text-gray-700 hover:text-jade'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-gray-800 text-2xl">☰</button>
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
