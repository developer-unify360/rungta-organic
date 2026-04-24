import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Logo.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">

        {/* LEFT — Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Rungta Exports Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* CENTER — Nav Links (desktop) */}
        <ul className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm font-semibold tracking-widest uppercase transition-all duration-200 relative group ${
                  location.pathname === link.to
                    ? 'text-green-700'
                    : 'text-gray-500 hover:text-green-700'
                }`}
              >
                {link.label}
                {/* underline animation */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-700 transition-all duration-300 ${
                  location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT — CTA Button (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="bg-[#1E3D1F] hover:bg-[#B8860B] text-white text-sm font-bold tracking-widest uppercase px-7 py-4 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-8 py-4">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-bold tracking-widest uppercase border-b border-gray-100 transition-colors ${
                location.pathname === link.to ? 'text-green-700' : 'text-gray-500 hover:text-green-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 text-center bg-[#1E3D1F] hover:bg-[#B8860B] text-white text-sm font-bold tracking-widest uppercase px-7 py-4 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </nav>
  )
}
