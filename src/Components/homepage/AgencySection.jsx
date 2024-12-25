import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import AgencyImg from "../../assets/bannar3.png";

const AgencySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth animation
      once: false, // Trigger animations only once
    });
  }, []);

  return (
    <section
      className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center gap-10"
      data-aos="fade-up"
    >
      {/* Left Image Section */}
      <div
        className="relative flex-1"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="rounded-full overflow-hidden relative z-10 w-full max-w-lg mx-auto md:max-w-none">
          <img
            src={AgencyImg}
            alt="Agency image"
            className="object-cover w-full transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div
        className="flex-1 space-y-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <p className="text-blue-500 font-medium uppercase">About Agency</p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          A helping hand agency <br /> for Business
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, seila
          eiusmod dui too consectetur elite more. According to ipsum dolor seat
          amet consectetur elite.
        </p>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            className="text-center"
            data-aos="flip-up"
            data-aos-delay="600"
          >
            <div className="text-blue-500 text-4xl font-bold">2382+</div>
            <p className="text-gray-500 mt-2">Projects Completed</p>
          </div>
          <div
            className="text-center"
            data-aos="flip-up"
            data-aos-delay="800"
          >
            <div className="text-orange-500 text-4xl font-bold">1382+</div>
            <p className="text-gray-500 mt-2">Team Members</p>
          </div>
          <div
            className="text-center"
            data-aos="flip-up"
            data-aos-delay="1000"
          >
            <div className="text-blue-500 text-4xl font-bold">2382+</div>
            <p className="text-gray-500 mt-2">Happy Clients</p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div data-aos="fade-up" data-aos-delay="1200"className="text-center lg:text-left " >
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
          >
            Explore More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AgencySection;
