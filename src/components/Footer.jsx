export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white">Airella</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Transforming businesses through innovative technology solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition text-sm">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition text-sm">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition text-sm">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition text-sm">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition text-sm">Mobile Apps</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition text-sm">Cloud Solutions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition text-sm">Consulting</a></li>
            </ul>
          </div>

          {/* Email Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Email</h4>
            <a href="mailto:hr@airella.org" className="text-gray-400 hover:text-blue-400 transition text-sm break-all leading-relaxed">
              hr@airella.org
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Airella Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
