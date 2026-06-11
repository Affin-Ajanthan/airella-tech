export default function Hero() {
  return (
    <section id="home" className="w-full py-16 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Transform Your Business with <span className="text-blue-600">Airella Tech</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Airella Tech builds software, AI, ML and cloud solutions \u2014 custom web and mobile applications, intelligent systems, and modern designs that drive growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition text-base sm:text-lg font-semibold text-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-sm sm:text-base text-blue-100">Cutting-edge technology solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
