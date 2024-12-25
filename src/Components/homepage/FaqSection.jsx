import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Collapse } from "antd";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const { Panel } = Collapse;

const FaqSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth animation
      once: false, // Trigger animations only once
    });
  }, []);

  return (
    <section className="bg-white" data-aos="fade-up">
      <div
        className="container w-full lg:w-8/12 mx-auto px-6 py-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Title Section */}
        <h1
          className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl"
          data-aos="zoom-in"
        >
          Frequently Asked Questions
        </h1>

        {/* Collapse Section */}
        <div className="mt-12">
          <Collapse
            accordion
            bordered={false}
            expandIcon={({ isActive }) => (
              <span className="text-gray-400 transition-transform transform duration-300">
                {isActive ? (
                  <AiOutlineMinus className="text-blue-500 w-6 h-6" />
                ) : (
                  <AiOutlinePlus className="w-6 h-6" />
                )}
              </span>
            )}
            expandIconPosition="end" // Moves the icon to the right
          >
            {/* Panels */}
            {[
              {
                header: "How can I pay for my appointment?",
                content:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
              },
              {
                header:
                  "Is the cost of the appointment covered by private health insurance?",
                content:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
              },
              {
                header: "Do I need a referral?",
                content:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
              },
              {
                header: "What are you decided?",
                content:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
              },
            ].map((item, index) => (
              <Panel
                header={
                  <h1 className="font-semibold text-gray-700 text-xl">
                    {item.header}
                  </h1>
                }
                key={index}
                className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-md shadow-md"
                data-aos-delay={`${300 + index * 100}`}
              >
                <p className="p-4 text-base text-gray-600">{item.content}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
