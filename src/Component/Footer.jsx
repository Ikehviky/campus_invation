import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 md:py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg" />
                <div className="absolute inset-0.5 bg-gray-800 rounded-lg flex items-center justify-center">
                  <img src="../../assets/logo/logo.png" alt="" className="w-5 h-5" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Campus Gate
              </span>
            </div>
            <p className="text-sm mb-4">Your complete campus companion for a safe, productive, and successful academic journey.</p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {[
                { icon: "ri-facebook-fill", link: "#" },
                { icon: "ri-twitter-fill", link: "#" },
                { icon: "ri-instagram-line", link: "#" },
                { icon: "ri-linkedin-fill", link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="bg-gray-800 hover:bg-emerald-600 text-gray-300 hover:text-white p-2 rounded-full transition-colors duration-300"
                  aria-label={`Follow us on ${social.icon.split('-')[1]}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { text: "Home", link: "/" },
                { text: "About Us", link: "/about" },
                { text: "Features", link: "/features" },
                { text: "Pricing", link: "/pricing" },
                { text: "Testimonials", link: "/testimonials" },
                { text: "Blog", link: "/blog" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2 text-xs">→</span> {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { text: "Find Accommodation", link: "/hostels" },
                { text: "Clearance Process", link: "/clearance" },
                { text: "Study Tools", link: "/tools" },
                { text: "Campus Marketplace", link: "/marketplace" },
                { text: "Graduate Support", link: "/graduates" },
                { text: "Help Center", link: "/help" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2 text-xs">→</span> {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for campus tips, safety alerts, and exclusive offers.</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-gray-200 py-2 px-3 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 px-4 rounded-r-lg hover:shadow-lg transition-all duration-300"
                >
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </form>
            <div className="text-sm">
              <p className="flex items-center mb-2">
                <span className="mr-2"><i className="ri-mail-line"></i></span> support@campusgate.com
              </p>
              <p className="flex items-center mb-2">
                <span className="mr-2"><i className="ri-phone-line"></i></span> +234 (0) 903 254 3740
              </p>
              <p className="flex items-center">
                <span className="mr-2"><i className="ri-map-pin-line"></i></span> Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 md:mt-10 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Campus Gate. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 mb-2 md:mb-0">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 mb-2 md:mb-0">Privacy Policy</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 mb-2 md:mb-0">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}