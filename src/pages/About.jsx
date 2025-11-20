import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div>
      <Navbar />
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900">About Us</h1>
          <p className="mt-4 text-slate-600 max-w-3xl">
            AZ Window Services LLC is a locally owned and operated exterior cleaning company proudly serving Arizona homeowners and businesses. We believe in honest pricing, dependable service, and results that make your property shine.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop" alt="Team photo placeholder" className="rounded-xl shadow border" />
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-2 text-slate-600">To provide affordable, reliable, and professional exterior cleaning services for Arizona homeowners and businesses.</p>
              <p className="mt-4 text-slate-600">We’re committed to a customer-first approach: clear communication, respectful onsite work, eco-friendly products, and a 100% satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
