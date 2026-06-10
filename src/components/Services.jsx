export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for performance and scalability.",
      icon: "🌐"
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      icon: "📱"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions to grow your business without infrastructure concerns.",
      icon: "☁️"
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by AI and ML to automate processes and drive data-driven decisions.",
      icon: "🤖"
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed with your users in mind for maximum engagement.",
      icon: "🎨"
    },
    {
      id: 6,
      title: "Consulting",
      description: "Expert technology consulting to guide your digital transformation and optimize your tech stack.",
      icon: "💡"
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Comprehensive solutions tailored to your business needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
              <a href="#contact" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
