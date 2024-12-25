import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out", 
      once: false, 
    });
  }, []); 

  return (
    <div className="w-full lg:w-10/12 mx-auto">
      <section className="text-center py-12 px-6">
        {/* Section Header */}
        <h2 className="text-lg text-blue-500 font-semibold mb-2">What We Do</h2>
        <h1 className="text-3xl font-bold mb-8">
          We Providing Some Special Services To our Clients.
        </h1>

        {/* Services Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div
            className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
            data-aos="fade-up" // Animation for card 1
          >
            <div className="text-blue-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Business Analysis</h3>
            <p className="text-gray-600 mb-4">
              According to lorem ipsum dolor sit amet du too consectetur
              consectetur elite.
            </p>
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Explore Service
            </a>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
            data-aos="zoom-in"
          >
            <div className="text-orange-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-3.864 0-7 3.136-7 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Financial Planning</h3>
            <p className="text-gray-600 mb-4">
              According to lorem ipsum dolor sit amet du too consectetur
              consectetur elite.
            </p>
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Explore Service
            </a>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
            data-aos="fade-up" // Animation for card 3
          >
            <div className="text-red-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 17a4 4 0 01-8 0V9a4 4 0 018 0v8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-600 mb-4">
              According to lorem ipsum dolor sit amet du too consectetur
              consectetur elite.
            </p>
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Explore Service
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-gray-600">
          If you have any project or task for us, please{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Contact Us
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default ServicesSection;
