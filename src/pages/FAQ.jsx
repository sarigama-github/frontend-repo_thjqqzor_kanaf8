import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
  { q: 'How often should I power wash my home?', a: 'Most homes benefit from an annual wash. High-dust or shaded areas may need more frequent cleaning.' },
  { q: 'Is power washing safe for my roof?', a: 'We use a low-pressure soft wash method for roofs to protect shingles and tiles while removing algae and debris.' },
  { q: 'Do you use eco-friendly detergents?', a: 'Yes. We use biodegradable, eco-friendly solutions safe for landscaping and pets when used as directed.' },
  { q: 'How do you price jobs?', a: 'Pricing is based on size, condition, and access. Contact us for a free, no-obligation quote.' },
]

export default function FAQ(){
  return (
    <div>
      <Navbar />
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900">FAQ</h1>
          <div className="mt-8 divide-y">
            {faqs.map(({q,a}) => (
              <details key={q} className="py-4">
                <summary className="cursor-pointer font-medium text-slate-900">{q}</summary>
                <p className="mt-2 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
