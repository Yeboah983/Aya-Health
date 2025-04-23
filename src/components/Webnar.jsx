import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image5 from "../assets/Images/webinar7.png";
import Image6 from "../assets/Images/webinar8.png";
import Image7 from "../assets/Images/webinar9.png";
import Image8 from "../assets/Images/webinars1.png";

const guides = [
  {
    image: Image5,
    title:
      "On-demand webinar | Building a World of Accessible, Affordable Healthcare for All Women,Men and Youth",
    category: "All",
  },
  {
    image: Image6,
    title: "The difference between grief and depression and why it matters",
    category: "Research",
  },
  {
    image: Image7,
    title:
      "On-demand webinar | Supporting students when the world feels uncertain",
    category: "Student Mental Health",
  },
  {
    image: Image8,
    title: "Inside the health and wellness industry",
    category: "Youth Wellness",
  },
];

const Webnar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? guides.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= guides.length ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderDots = () => {
    const totalPages = Math.ceil(guides.length / 3);
    return Array.from({ length: totalPages }).map((_, index) => (
      <span
        key={index}
        className={`h-2 w-2 rounded-full mx-1 inline-block ${
          index === Math.floor(currentIndex / 3)
            ? "bg-[#067A6F]"
            : "bg-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="relative px-6 py-16 bg-[#F4F6FA] overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#14373f]">
          Webinars
        </h2>
      </div>

      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 px-4">
          {guides.slice(currentIndex, currentIndex + 3).map((guide, index) => (
            <div key={index} className="flex flex-col group">
              <div className="overflow-hidden rounded-xl mb-3">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="bg-[#e6f4f1] text-[#14373f] text-xs px-3 py-1 rounded-full w-fit mb-2">
                {guide.category}
              </span>
              <h3 className="text-base font-semibold text-[#14373f] group-hover:text-[#067A6F]">
                {guide.title}
              </h3>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center mt-4">{renderDots()}</div>
    </div>
  );
};

export default Webnar;
