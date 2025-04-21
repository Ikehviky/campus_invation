import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Main Footer Content */}
        <div className="mx-auto text-center">
          {/* Company Info */}
          <div className="space-y-4 max-w-md mx-auto">
            <div className="flex items-center space-x-2 justify-center">
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
            <p className="text-gray-600 text-sm">Contact us: <a href="mailto:contact@campusgate.com" className="text-emerald-600 hover:underline">contact@campusgate.com</a></p>
            <div className="flex space-x-3 justify-center">
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

          {/* Contact Information section removed */}
        </div>

        {/* Bottom Bar - Notion-inspired clean separator */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm text-center mb-4 md:mb-0 md:mr-6">
            © {new Date().getFullYear()} Campus Gate. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            <Link to="/terms" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">Terms</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}