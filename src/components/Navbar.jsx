import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#1E90FF] flex items-center justify-center text-white font-bold">AZ</div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">AZ Window Services LLC</p>
              <p className="text-xs text-slate-500">Exterior Cleaning • Arizona</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-[#1E90FF]' : 'text-slate-700 hover:text-[#1E90FF]'} `}
              >
                {label}
              </NavLink>
            ))}
            <a href="tel:5551234567" className="inline-flex items-center gap-2 bg-[#1E90FF] text-white px-4 py-2 rounded-md text-sm shadow hover:opacity-90">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </nav>

          <button className="md:hidden p-2 rounded hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map(({ to, label }) => (
                <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-blue-50 text-[#1E90FF]' : 'text-slate-700 hover:bg-slate-100'}`}>
                  {label}
                </NavLink>
              ))}
              <a href="tel:5551234567" className="px-3 py-2 rounded bg-[#1E90FF] text-white text-center">Call Today</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
