import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "antd";

const Gellary = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth animation
      once: false, // Trigger animations only once
    });
  }, []);

  return (
    <div>
      <div className="container mx-auto  px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {/* Left Column */}
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div
              className="w-1/2 p-1 md:p-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div
              className="w-1/2 p-1 md:p-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div
              className="w-full p-1 md:p-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div
              className="w-full p-1 md:p-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div
              className="w-1/2 p-1 md:p-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div
              className="w-1/2 p-1 md:p-2"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>

        {/* Button with Animation */}
        <div className="w-full mx-auto text-center my-6" data-aos="zoom-in">
          <Button
            type="primary"
            className="px-6 py-2 text-lg rounded-lg font-semibold transition-transform duration-300 hover:scale-105"
          >
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gellary;
