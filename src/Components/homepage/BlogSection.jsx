import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Messi from "../../assets/soccer-player-with-shirt-that-says-japan-it_1050053-4379.avif";

const blogs = [
  {
    id: 1,
    image: Messi, // Replace with actual image URL
    author: "Philip Hobs",
    date: "02 Feb, 2021",
    title: "How to make money online easily & quickly",
  },
  {
    id: 2,
    image: Messi, // Replace with actual image URL
    author: "Philip Hobs",
    date: "02 Feb, 2021",
    title: "How to grow your business tips & tricks",
  },
  {
    id: 3,
    image: Messi, // Replace with actual image URL
    author: "Philip Hobs",
    date: "02 Feb, 2021",
    title: "Most profitable business case studies tricks",
  },
];

const BlogSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth animation
      once: false, // Trigger animations only once
    });
  }, []);

  return (
    <section className="bg-white w-full lg:w-10/12 mx-auto py-12">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8"
          data-aos="fade-up"
        >
          See our Latest & Popular Tips & Tricks <br /> from our Experts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                  <span className="mr-4">
                    <i className="fas fa-user"></i> {blog.author}
                  </span>
                  <span>
                    <i className="fas fa-calendar-alt"></i> {blog.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {blog.title}
                </h3>
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 group">
                  Read More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
