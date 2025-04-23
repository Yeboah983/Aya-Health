import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image6 from "../assets/Images/casestudy2.jpg";
import Image7 from "../assets/Images/casestudy3.png";
import Image8 from "../assets/Images/casestudy1.jpg";
import Image9 from "../assets/Images/casestudy6.jpg";

const guides = [
  {
    image: Image6,
    title: "Tips for Managing Stress Effectively",
    category: "All",
  },
  {
    image: Image7,
    title: "Delivering personalized care and positive change",
    category: "Youth Mental Health",
  },
  {
    image: Image8,
    title: "Mental Health and the Hybrid Campus",
    category: "Student Wellness",
  },
  {
    image: Image9,
    title: "How increasing behavioral healthcare options impacted the lives of their members",
    category: "All",
  },
];

const CaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? guides.length - 2 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 2 >= guides.length ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderDots = () => {
    const totalPages = Math.ceil(guides.length / 2);
    return Array.from({ length: totalPages }).map((_, index) => (
      <span
        key={index}
        className={`h-2 w-2 rounded-full mx-1 inline-block ${
          index === Math.floor(currentIndex / 2)
            ? "bg-[#067A6F]"
            : "bg-gray-300"
        }`}
      />
    ));
  };

  const getCategoryColor = (index) => {
    return index % 2 === 0
      ? "bg-[#e6f4f1] text-[#14373f]"
      : "bg-[#f3e8ff] text-[#5b2a8c]";
  };

  return (
    <div className="relative px-6 py-10 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#14373f]">
        Case studies
        </h2>
      </div>
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 px-4">
          {guides.slice(currentIndex, currentIndex + 2).map((guide, index) => (
            <div key={index} className="flex flex-col group">
              <div className="overflow-hidden rounded-xl mb-3">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full w-fit mb-2 ${getCategoryColor(
                  index
                )}`}
              >
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

export default CaseStudy;
