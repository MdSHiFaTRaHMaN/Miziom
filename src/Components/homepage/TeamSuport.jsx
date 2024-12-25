import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaTools } from "react-icons/fa";
import { FaStar, FaUser, FaUserShield } from "react-icons/fa6";

const TeamSuport = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth easing
      once: false, // Trigger animation only once
    });
  }, []);

  return (
    <div className="w-full">
      <section className="w-full  mx-auto p-6">
        <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 shadow-lg rounded-lg p-2 lg:p-10">
          <h2
            className="text-2xl font-bold text-center text-gray-700 mb-8"
            data-aos="fade-up"
          >
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Support Alltime */}
            <div
              className="text-center space-y-4 transition-transform transform hover:-translate-y-2 shadow-md hover:shadow-lg p-6 rounded-lg bg-white"
              data-aos="zoom-in"
            >
              <div className="text-red-500 text-5xl">
                <FaTools className=" mx-auto" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                Support Alltime
              </h3>
              <p className="text-gray-500 text-sm">
                We are available to support you anytime, anywhere.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Read more
              </a>
            </div>

            {/* Great Team */}
            <div
              className="text-center space-y-4 transition-transform transform hover:-translate-y-2  shadow-md hover:shadow-lg p-6 rounded-lg bg-white"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-blue-500 text-5xl">
                <FaUser className=" mx-auto" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                Great Team
              </h3>
              <p className="text-gray-500 text-sm">
                Our team consists of experts dedicated to your success.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Read more
              </a>
            </div>

            {/* Trusted Agency */}
            <div
              className="text-center space-y-4 transition-transform transform hover:-translate-y-2  shadow-md hover:shadow-lg p-6 rounded-lg bg-white"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="text-orange-500 text-5xl">
                <FaUserShield className=" mx-auto" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                Trusted Agency
              </h3>
              <p className="text-gray-500 text-sm">
                Thousands of happy clients trust our reliable services.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Read more
              </a>
            </div>

            {/* Top Rated Agency */}
            <div
              className="text-center space-y-4 transition-transform transform hover:-translate-y-2  shadow-md hover:shadow-lg p-6 rounded-lg bg-white"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-teal-500 text-5xl">
                <FaStar className=" mx-auto" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                Top Rated Agency
              </h3>
              <p className="text-gray-500 text-sm">
                Highly rated for exceptional performance and quality.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSuport;
