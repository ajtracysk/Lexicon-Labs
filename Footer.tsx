const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-12 mt-16 sm:mt-20 md:mt-24" style={{ backgroundColor: "#1A1A18" }}>
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-3xl font-bold" style={{ color: "#D4A574" }}>
                EduHub
              </h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A collection of interactive, single-file HTML web applications designed to make ESL learning accessible, engaging, and effective for learners worldwide.
            </p>
            <p className="font-semibold" style={{ color: "#D4A574" }}>Learn Anywhere, Anytime</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-300 hover:transition-colors"
                  style={{ "--hover-color": "#D4A574" } as any}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D1D5DB")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#apps"
                  className="text-gray-300 hover:transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D1D5DB")}
                >
                  Why Our Apps
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D1D5DB")}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D1D5DB")}
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Learning Tips</li>
              <li>App Documentation</li>
              <li>Community Forum</li>
              <li>Feedback & Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} EduHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:transition-colors text-sm"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:transition-colors text-sm"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:transition-colors text-sm"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
