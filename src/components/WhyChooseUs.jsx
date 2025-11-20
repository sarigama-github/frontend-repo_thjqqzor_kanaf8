import { ShieldCheck, Leaf, MapPin, Star } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Licensed & insured', desc: 'Fully licensed and insured for your peace of mind.' },
  { icon: Leaf, title: 'Eco-friendly detergents', desc: 'Safe, biodegradable solutions that protect your property.' },
  { icon: MapPin, title: 'Local Arizona business', desc: 'Proudly serving Phoenix and surrounding cities.' },
  { icon: Star, title: '100% Satisfaction Guaranteed', desc: 'We stand behind our work. If you’re not happy, we’ll make it right.' }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Why Choose Us</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <Icon className="w-8 h-8 text-[#1E90FF]" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
