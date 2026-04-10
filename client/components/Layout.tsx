import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SERVICE_LINKS = [
  { path: '/educational-consulting', label: 'Educational Consulting' },
  { path: '/vision-experience', label: 'Vision Experience' },
  { path: '/virtual-assistant', label: 'Virtual Assistant' },
];

function ServicesDropdown({ isActive }: { isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`text-base transition-colors whitespace-nowrap flex items-center gap-1 ${
          isActive ? 'text-black font-semibold' : 'text-black font-normal hover:text-jade'
        }`}
      >
        Service
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 10 6"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 bg-white border border-black shadow-sm w-44">
          {SERVICE_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="block text-center text-sm font-bold font-inter text-black border-b border-black last:border-b-0 px-3 py-3 hover:bg-jade/10 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = SERVICE_LINKS.some((l) => location.pathname === l.path);

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
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-base transition-colors whitespace-nowrap ${
                isActive('/') ? 'text-black font-semibold' : 'text-black font-normal hover:text-jade'
              }`}
            >
              Home
            </Link>

            <ServicesDropdown isActive={isServiceActive} />

            <Link
              to="/books"
              className={`text-base transition-colors whitespace-nowrap ${
                isActive('/books') ? 'text-black font-semibold' : 'text-black font-normal hover:text-jade'
              }`}
            >
              Books
            </Link>

            <Link
              to="/about"
              className={`text-base transition-colors whitespace-nowrap ${
                isActive('/about') ? 'text-black font-semibold' : 'text-black font-normal hover:text-jade'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-base transition-colors whitespace-nowrap ${
                isActive('/contact') ? 'text-black font-semibold' : 'text-black font-normal hover:text-jade'
              }`}
            >
              Contact
            </Link>

          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-gray-800 text-2xl p-2"
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 flex flex-col gap-4">
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-base font-inter text-black font-medium">Home</Link>
            <div className="flex flex-col gap-2 pl-2">
              <span className="text-base font-inter text-black font-semibold">Service</span>
              {SERVICE_LINKS.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-inter text-black pl-2 hover:text-jade"
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link to="/books" onClick={() => setMobileOpen(false)} className="text-base font-inter text-black font-medium">Books</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="text-base font-inter text-black font-medium">About</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-base font-inter text-black font-medium">Contact</Link>
          </div>
        )}
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
