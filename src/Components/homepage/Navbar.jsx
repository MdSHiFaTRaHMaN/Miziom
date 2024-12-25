import { useState } from "react";
import { Button } from "antd";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import ContactModel from "../ContactModel";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white w-full shadow-lg fixed top-0 !z-50 bg-opacity-32">
      <div className="w-full lg:w-10/12 mx-auto ">
        <nav className="container mx-auto px-2 lg:px-6 py-0.5 lg:flex lg:justify-between lg:items-center ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Logo */}
              <div className="">
                <img src={Logo} alt="" className="w-16 h-16" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-700">Miziom</h2>
            </div>

            {/* Mobile menu toggle button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-black"
                aria-label="Toggle Navigation"
              >
                {isMenuOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <CiMenuFries size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu items */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-3 mt-4 lg:mt-0`}
          >
            <a
              href="#home"
              className="block px-1 py-2 text-gray-700 rounded hover:bg-blue-100 hover:text-blue-500"
              onClick={closeMenu} // Close menu on click
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-1 py-2 text-gray-700 rounded hover:bg-blue-100 hover:text-blue-500"
              onClick={closeMenu} // Close menu on click
            >
              About
            </a>
            <a
              href="#service"
              className="block px-1 py-2 text-gray-700 rounded hover:bg-blue-100 hover:text-blue-500"
              onClick={closeMenu} // Close menu on click
            >
              Services
            </a>
            <a
              href="#gellary"
              className="block px-1 py-2 text-gray-700 rounded hover:bg-blue-100 hover:text-blue-500"
              onClick={closeMenu} // Close menu on click
            >
              Gellary
            </a>
            <a
              href="#blog"
              className="block px-1 py-2 text-gray-700 rounded hover:bg-blue-100 hover:text-blue-500"
              onClick={closeMenu} // Close menu on click
            >
              Blog
            </a>
            <a
              href="#faq"
              className="block px-1 py-2 text-gray-700 rounded hover:bg-blue-100 hover:text-blue-500"
              onClick={closeMenu} // Close menu on click
            >
              FAQ
            </a>
            <Button type="primary" onClick={showModal}>Contact Us</Button>
            <ContactModel isModalOpen={isModalOpen} handleCancel={handleCancel} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
