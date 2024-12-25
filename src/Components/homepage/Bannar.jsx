import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import BannarImg from "../../assets/Bannar.png";
import { Button } from "antd";
import { FaCirclePlay } from "react-icons/fa6";

const Bannar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out-cubic", 
      once: false, 
      delay: 100, 
    });
  }, []); 

  return (
    <div className="w-full lg:w-10/12 mx-auto">
      <div className="container mx-auto px-3 py-1 mt-14 md:mt-24 lg:mt-7 lg:py-16 flex flex-col-reverse md:flex-row lg:flex-row lg:items-center lg:space-x-12">
        {/* Animating the left content */}
        <div
          className="lg:w-1/2 space-y-6 -mt-[40px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h1
            className="text-3xl font-extrabold text-gray-800 lg:text-5xl"
            data-aos="zoom-in"
          >
            Welcome To Miziom
          </h1>
          <p className="text-gray-600" data-aos="fade-up">
            miziom.com is a dynamic organization that powers a range of
            businesses, including the renowned gittiom.com, where you can
            conveniently buy and sell cryptocurrencies.
          </p>
          <div className="flex" data-aos="zoom-in-up">
            <Button type="primary">Explore More →</Button>
            <button className="flex items-center gap-3 mx-2">
              <FaCirclePlay /> How we work
            </button>
          </div>
        </div>

        {/* Animating the image */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 relative mx-auto" data-aos="fade-up">
          <img
            src={BannarImg}
            alt="Hero Illustration"
            className="w-[300px] md:w-[830px] lg:w-[450px] h-[300px] md:h-[300px] lg:h-[450px] animate-spin-slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Bannar;
