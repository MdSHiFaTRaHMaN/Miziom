import { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../../assets/Logo.png"

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-700 pt-10">
      <div className="container mx-auto px-4 py-5 lg:px-20">
        <div className="flex flex-wrap justify-between" data-aos="fade-up">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <div
              className="flex items-center space-x-3 mb-4"
              data-aos="fade-up"
            >
              {/* Logo */}
                <img src={Logo} alt="Logo Image" className="w-16 h-16" />
              <h2 className="text-2xl font-bold text-indigo-700">Miziom</h2>
            </div>
            <p
              className="text-sm mb-4 text-gray-600"
            >
              This is Photoshop version of Lorem Ipsum. Aenea sollicitudin.
            </p>
            <div
              className="text-sm text-gray-600"
            >
              <p className="mb-2">
                <strong>Address:</strong> House 00, Road No: 01, Street address,
                ABC
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +0 123-456-7890
              </p>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <div
            className="w-full lg:w-1/2 mb-8 lg:mb-0 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"
            data-aos="fade-up"
          >
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Our Community</h3>
              <ul className="space-y-2">
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">
                  App Support
                </li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">
                  Blog
                </li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Tips & Tricks</h3>
              <ul className="space-y-2">
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">
                  Privacy Policy
                </li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">
                  Terms & Condition
                </li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">
                  Portfolio
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">About</h3>
              <ul className="space-y-2">
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">
                  About Us
                </li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">
                  Portfolio
                </li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">
                  Blog
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Instagram</h3>
              <div className="flex space-x-4 text-indigo-700">
                <FaFacebookF className="cursor-pointer hover:scale-125 hover:text-indigo-500 transition-transform duration-300" />
                <FaTwitter className="cursor-pointer hover:scale-125 hover:text-indigo-500 transition-transform duration-300" />
                <FaInstagram className="cursor-pointer hover:scale-125 hover:text-indigo-500 transition-transform duration-300" />
                <FaYoutube className="cursor-pointer hover:scale-125 hover:text-indigo-500 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
