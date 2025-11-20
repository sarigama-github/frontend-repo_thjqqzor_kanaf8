import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    title: 'Power Washing',
    what: 'High-pressure cleaning for house exteriors, patios, driveways, garages, fences, and siding.',
    benefits: ['Removes grime, mold, and stains', 'Restores curb appeal', 'Prevents long-term damage'],
    img: 'https://images.unsplash.com/photo-1523419409543-8c9bb9c9256e?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Window Cleaning',
    what: 'Streak-free interior and exterior window cleaning including screens and tracks.',
    benefits: ['Crystal-clear views', 'Improves natural light', 'Extends window lifespan'],
    img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Solar Panel Cleaning',
    what: 'Safe, soft-wash cleaning to improve solar efficiency and protect panel coatings.',
    benefits: ['Boosts energy output', 'Manufacturer-safe methods', 'Extends panel life'],
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Roof Soft Washing',
    what: 'Low-pressure soft wash for algae, mold, and debris removal without damage.',
    benefits: ['Protects shingles/tiles', 'Kills organic growth', 'Restores color and look'],
    img: 'https://images.unsplash.com/photo-1523419409543-8c9bb9c9256e?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Commercial Cleaning',
    what: 'Storefronts, office buildings, HOAs, and apartment complexes serviced reliably.',
    benefits: ['Professional appearance', 'Safe walkways and entries', 'Flexible scheduling'],
    img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop'
  },
]

export default function Services(){
  return (
    <div>
      <Navbar />
      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900">Our Services</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">From homes to businesses, we deliver safe, effective cleaning tailored to Arizona properties.</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <img src={s.img} alt={`${s.title} service example`} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-900">{s.title}</h2>
                <p className="mt-2 text-slate-600">{s.what}</p>
                <ul className="mt-4 list-disc pl-5 text-slate-700 text-sm">
                  {s.benefits.map((b) => (<li key={b}>{b}</li>))}
                </ul>
                <a href="/contact" className="inline-block mt-5 px-5 py-2 rounded bg-[#1E90FF] text-white">Request Service</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
