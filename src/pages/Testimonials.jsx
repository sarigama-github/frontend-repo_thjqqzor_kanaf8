import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Stars({ count = 5 }){
  return (
    <div className="flex gap-0.5" aria-label={`${count} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={i < count ? '#F59E0B' : '#E5E7EB'} className="w-5 h-5">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.175 0L6.605 16.28c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.97 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.079-3.293z" />
        </svg>
      ))}
    </div>
  )
}

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'They made our windows sparkle and the driveway looks brand new. Fast, friendly, and professional!'
  },
  {
    name: 'Daniel K.',
    text: 'Excellent soft wash on our roof and siding. Night-and-day difference. Highly recommend.'
  },
  {
    name: 'HOA Manager',
    text: 'Reliable service for our community walkways and common areas. Great communication and results.'
  }
]

const gallery = [
  { before: 'https://images.unsplash.com/photo-1515266591878-f93e32bc5937?q=80&w=1400&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1600585154340-1e166e8f00f4?q=80&w=1400&auto=format&fit=crop', alt: 'Patio cleaning before and after' },
  { before: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1597007062591-43cc04c0e7b9?q=80&w=1400&auto=format&fit=crop', alt: 'Window cleaning before and after' },
  { before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1523419409543-8c9bb9c9256e?q=80&w=1400&auto=format&fit=crop', alt: 'Driveway cleaning before and after' },
]

export default function Testimonials(){
  return (
    <div>
      <Navbar />
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900">Testimonials</h1>
          <p className="mt-2 text-slate-600">Real feedback from homeowners and businesses across the Valley.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
                <Stars count={5} />
                <p className="mt-3 text-slate-700">“{t.text}”</p>
                <p className="mt-4 text-sm font-medium text-slate-900">{t.name}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 mt-14">Before / After Gallery</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {gallery.map((g, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-2">
                <img src={g.before} alt={`${g.alt} - before`} className="rounded-lg border object-cover h-40 w-full" />
                <img src={g.after} alt={`${g.alt} - after`} className="rounded-lg border object-cover h-40 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
