import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Image from "../../assets/sub.png";

const NewsletterSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth animation
      once: false, // Trigger animation only once
    });
  }, []);

  return (
    <div className="w-full lg:w-10/12 mx-auto">
      <div
        className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 md:flex-row lg:flex-row md:items-center lg:items-center"
        data-aos="fade-up"
      >
        {/* Text Section */}
        <div
          className="w-full lg:w-1/2"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
              To Get our Weekly & Monthly News. Subscribe Newsletter
            </h1>
          </div>

          {/* Email Input */}
          <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40">
            <form className="flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="button"
                className="h-12 px-4 py-2 m-1 text-white transition-transform transform bg-blue-500 rounded-md hover:scale-105 hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="flex items-center justify-center w-full h-96 lg:w-1/2"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            className="object-cover w-full h-full mx-auto lg:max-w-2xl transform hover:scale-105 transition-transform duration-500"
            src={Image}
            alt="glasses photo"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
