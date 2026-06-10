export default function About() {
  const stats = [
    { label: "Projects", value: "5" },
    { label: "Team Members", value: "12" }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Airella Tech</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Founded in 2026, Airella Tech has been at the forefront of digital innovation. We specialize in delivering transformative technology solutions that empower businesses to achieve their goals.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Our team of experienced developers, designers, and strategists work collaboratively with clients to create solutions that are not just technically sound, but also aligned with business objectives.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Expert team with industry expertise</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Proven track record of success</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Client-centric approach</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300 font-semibold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-700 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            To empower businesses through innovative technology solutions that drive growth, efficiency, and success. We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering solutions that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  )
}
