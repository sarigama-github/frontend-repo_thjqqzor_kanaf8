export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <p className="text-white font-semibold">AZ Window Services LLC</p>
          <p className="text-sm text-slate-400 mt-2">Phoenix • Scottsdale • Chandler • Gilbert • Mesa • Tempe</p>
          <p className="text-sm text-slate-500 mt-4">Mon–Sat 8 AM–6 PM</p>
        </div>
        <div>
          <p className="text-white font-semibold">Contact</p>
          <p className="text-sm text-slate-400 mt-2">Phone: (555) 123-4567</p>
          <p className="text-sm text-slate-400">Email: hello@azwindowservices.com</p>
        </div>
        <div>
          <p className="text-white font-semibold">Follow</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="text-slate-400 hover:text-white text-sm underline">Google Business</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm underline">Facebook</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm underline">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} AZ Window Services LLC. All rights reserved.</div>
    </footer>
  )
}
