import { useState } from 'react'

export default function BeforeAfter() {
  const [position, setPosition] = useState(50)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">See the Difference</h2>
        <p className="text-slate-600 text-center mt-2 mb-8">Slide to compare before and after</p>

        <div className="relative max-w-3xl mx-auto select-none">
          <div className="relative overflow-hidden rounded-xl shadow-lg border border-slate-200">
            <img src="https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?q=80&w=1600&auto=format&fit=crop" alt="Before cleaning" className="w-full h-[380px] object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{width: position + '%'}}>
              <img src="https://images.unsplash.com/photo-1698526211660-028469a60ad7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZnRlciUyMGNsZWFuaW5nfGVufDB8MHx8fDE3NjM2ODI4NzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="After cleaning" className="w-full h-[380px] object-cover" />
            </div>
            <div className="absolute inset-y-0" style={{left: `calc(${position}% - 1px)`}}>
              <div className="w-0.5 bg-white/80 h-full shadow" />
            </div>
            <input type="range" min="0" max="100" value={position} onChange={(e)=>setPosition(Number(e.target.value))} className="absolute inset-0 w-full opacity-0 cursor-ew-resize" aria-label="Before after slider" />
          </div>
        </div>
      </div>
    </section>
  )
}
