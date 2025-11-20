import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf4ff] to-white">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage:'radial-gradient(#1E90FF 1px, transparent 1px)', backgroundSize:'24px 24px'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Professional Exterior Cleaning You Can Trust.
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              AZ Window Services LLC provides power washing, window cleaning, solar panel cleaning, driveway & sidewalk cleaning, and full exterior home washing across the Phoenix metro.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="bg-[#1E90FF] text-white px-6 py-3 rounded-md shadow hover:opacity-90">Get a Free Quote</Link>
              <a href="tel:5551234567" className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">Call Now</a>
            </div>
            <p className="mt-6 text-sm text-slate-500">Serving Phoenix, Scottsdale, Chandler, Gilbert, Mesa, Tempe, and surrounding Arizona cities.</p>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1759355787121-eaef014a501d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGVhbiUyMGhvbWUlMjBleHRlcmlvcnxlbnwwfDB8fHwxNzYzNjgyODcyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Clean home exterior" className="rounded-xl shadow-2xl border border-slate-200" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#1E90FF]/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-[#1E90FF]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
