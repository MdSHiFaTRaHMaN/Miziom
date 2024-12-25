import { useEffect } from "react";
import { Carousel, Rate } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import Leo from "../../assets/soccer-player-with-shirt-that-says-japan-it_1050053-4379.avif";

const reviews = [
  {
    id: 1,
    image: Leo,
    name: "Lionel Messi",
    role: "GOAT, Football Club",
    rating: 4.5,
    text: "“This platform has revolutionized the way I approach the game. The support and tools provided are unmatched!”",
  },
  {
    id: 2,
    image: Leo,
    name: "Cristiano Ronaldo",
    role: "Football Legend",
    rating: 5,
    text: "“I love the intuitive interface and the customer support. They truly care about our success!”",
  },
  {
    id: 3,
    image: Leo,
    name: "Neymar Jr",
    role: "Football Star",
    rating: 4,
    text: "“The features are innovative, and they continue to add value with constant updates. Highly recommended!”",
  },
];

const CustomArrow = ({ direction, onClick }) => (
  <button
    className={`absolute top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white w-10 h-10 flex justify-center items-center rounded-full shadow-lg z-10 ${
      direction === "prev" ? "left-0" : "right-0"
    }`}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      {direction === "prev" ? (
        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      ) : (
        <path d="M8.59 7.41 10 6l6 6-6 6-1.41-1.41L13.17 12z" />
      )}
    </svg>
  </button>
);

const ReviewSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="py-16 w-full lg:w-8/12 mx-auto">
      <h2
        className="text-3xl font-bold text-center text-gray-800 mb-10"
        data-aos="fade-up"
      >
        What Our Clients Say
      </h2>
      <Carousel
        arrows
        infinite
        autoplay
        prevArrow={<CustomArrow direction="prev" />}
        nextArrow={<CustomArrow direction="next" />}
      >
        {reviews.map((review, index) => (
          <div key={review.id}>
            <section
              className="relative isolate overflow-hidden rounded-lg bg-gray-100 shadow-lg p-8 lg:p-12 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 to-white opacity-20"></div>
              <div className="max-w-3xl mx-auto text-center">
                <blockquote className="text-lg lg:text-xl font-semibold text-gray-800">
                  {review.text}
                </blockquote>
                <figcaption className="mt-8 flex flex-col items-center">
                  <img
                    className="h-16 w-16 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300"
                    src={review.image}
                    alt={review.name}
                  />
                  <div className="mt-4 text-gray-700">
                    <Rate allowHalf value={review.rating} disabled />
                    <h3 className="font-bold text-lg mt-2">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </figcaption>
              </div>
            </section>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewSection;
