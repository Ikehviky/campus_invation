import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <div className="bg-gray-900 rounded-md flex items-center justify-center h-full w-full">
                  <img src="../../assets/logo/logo.png" alt="" className="w-5 h-5" />
                </div>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Campus Gate
              </span>
            </div>
            <p className="text-gray-600 text-sm">Your complete campus companion for a safe, productive, and successful academic journey.</p>
            <div className="flex space-x-3">
              {/* Social Media Icons - Notion-inspired minimal style */}
              {[
                { icon: "ri-facebook-fill", link: "#" },
                { icon: "ri-twitter-fill", link: "#" },
                { icon: "ri-instagram-line", link: "#" },
                { icon: "ri-linkedin-fill", link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-md transition-colors duration-200"
                  aria-label={`Follow us on ${social.icon.split('-')[1]}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-medium text-base">Quick Links</h3>
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
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-medium text-base">Resources</h3>
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
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Notion-inspired form */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-medium text-base">Stay Updated</h3>
            <p className="text-gray-600 text-sm">Subscribe to our newsletter for campus tips, safety alerts, and exclusive offers.</p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">
                <span className="text-gray-900">Email:</span> support@campusgate.com
              </p>
              <p className="text-gray-600">
                <span className="text-gray-900">Phone:</span> +234 (0) 903 254 3740
              </p>
              <p className="text-gray-600">
                <span className="text-gray-900">Location:</span> Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Notion-inspired clean separator */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Campus Gate. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            <Link to="/terms" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">Terms</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">Privacy</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}