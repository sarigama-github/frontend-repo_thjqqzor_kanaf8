import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('Submitting...')
    const form = new FormData(e.currentTarget)
    try{
      const res = await fetch(`${BACKEND_URL}/api/lead`, {
        method: 'POST',
        body: form
      })
      const data = await res.json()
      if(data.success){
        setStatus('Thanks! We\'ll be in touch shortly.')
        e.currentTarget.reset()
      } else {
        setStatus('Something went wrong. Please call us directly.')
      }
    } catch(err){
      setStatus('Could not submit. Please try again later.')
    }
  }

  return (
    <div>
      <Navbar />
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
            <p className="mt-2 text-slate-600">Call, email, or send a message. We\'re here to help.</p>

            <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" placeholder="Name" className="px-4 py-3 rounded border w-full" required />
                <input type="email" name="email" placeholder="Email" className="px-4 py-3 rounded border w-full" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="phone" placeholder="Phone" className="px-4 py-3 rounded border w-full" required />
                <input name="service_needed" placeholder="Service Needed" className="px-4 py-3 rounded border w-full" required />
              </div>
              <input name="address" placeholder="Address" className="px-4 py-3 rounded border w-full" />
              <textarea name="message" placeholder="Message" className="px-4 py-3 rounded border w-full h-32" />
              <button className="bg-[#1E90FF] text-white px-5 py-3 rounded">Send Message</button>
              {status && <p className="text-sm text-slate-600">{status}</p>}
            </form>

            <div className="mt-8 text-sm text-slate-700 space-y-1">
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@azwindowservices.com</p>
              <p>Hours: Mon–Sat 8 AM–6 PM</p>
            </div>
          </div>

          <div>
            <div className="aspect-video rounded-xl overflow-hidden border bg-white">
              <iframe title="Arizona Map" width="100%" height="100%" frameBorder="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-115.0%2C31.0%2C-108.0%2C37.0&layer=mapnik"></iframe>
            </div>
            <p className="mt-3 text-sm text-slate-600">Serving Phoenix, Scottsdale, Chandler, Gilbert, Mesa, Tempe, and nearby cities.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
