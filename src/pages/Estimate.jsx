import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Estimate(){
  const [status, setStatus] = useState(null)
  const [files, setFiles] = useState([])

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('Submitting...')
    const form = new FormData(e.currentTarget)
    files.forEach(f => form.append('photos', f))
    try{
      const res = await fetch(`${BACKEND_URL}/api/estimate`, { method: 'POST', body: form })
      const data = await res.json()
      if(data.success){
        setStatus('Request received! We\'ll email you an estimate shortly.')
        setFiles([])
        e.currentTarget.reset()
      } else {
        setStatus('Could not submit. Please call us directly.')
      }
    }catch(err){
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <div>
      <Navbar />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900">Online Estimate</h1>
          <p className="mt-2 text-slate-600">Upload photos and tell us what you need cleaned for a fast, accurate quote.</p>

          <form onSubmit={handleSubmit} className="mt-8 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" placeholder="Name" className="px-4 py-3 rounded border w-full bg-white" required />
              <input type="email" name="email" placeholder="Email" className="px-4 py-3 rounded border w-full bg-white" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="phone" placeholder="Phone" className="px-4 py-3 rounded border w-full bg-white" required />
              <input name="service_needed" placeholder="Service Needed" className="px-4 py-3 rounded border w-full bg-white" required />
            </div>
            <input name="address" placeholder="Address" className="px-4 py-3 rounded border w-full bg-white" />
            <textarea name="message" placeholder="Describe the areas to clean" className="px-4 py-3 rounded border w-full h-32 bg-white" />

            <div>
              <label className="block text-sm font-medium text-slate-700">Photos (optional)</label>
              <input type="file" multiple accept="image/*" onChange={(e)=>setFiles(Array.from(e.target.files || []))} className="mt-1" />
              {files.length > 0 && (
                <p className="text-xs text-slate-500 mt-1">{files.length} file(s) selected</p>
              )}
            </div>

            <button className="bg-[#1E90FF] text-white px-5 py-3 rounded">Request Estimate</button>
            {status && <p className="text-sm text-slate-600">{status}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
