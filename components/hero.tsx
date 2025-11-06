"use client"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-screen bg-white">
        <img src="/hero-bg.jpg" alt="Streetwear model" className="w-full h-full object-cover" />

        {/* Left side overlay - Text content positioned as overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10">
              <div className="absolute -inset-20 opacity-5 text-9xl font-black text-gray-300 pointer-events-none">
                UNIQ
              </div>
              <div className="relative max-w-sm">
                <div className="bg-black p-12 text-white">
                  <h1 className="text-5xl font-bold mb-4">
                    STREET
                    <br />
                    WEARS
                  </h1>
                  <p className="text-sm text-gray-300 mb-6 uppercase tracking-wide">
                    HIGH QUALITY COOL STREET FOR STREET FASHION
                  </p>
                  <button className="border border-white text-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-black transition">
                    START SHOPPING →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
