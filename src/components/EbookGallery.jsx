import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image11 from "../assets/Images/ebooks1.jpeg";
import Image12 from "../assets/Images/ebooks2.jpg";
import Image13 from "../assets/Images/ebooks3.png";
import Image14 from "../assets/Images/ebooks4.jpg";
import Image15 from "../assets/Images/eboooks5.jpg";

const ebooks = [
  {
    image: Image11,
    title: "Mental Wellness Basics",
    description: "An introductory guide to understanding mental health.",
  },
  {
    image: Image12,
    title: "Stress Management",
    description: "Learn techniques to manage everyday stress.",
  },
  {
    image: Image13,
    title: "Work-Life Balance",
    description: "Strategies for maintaining a healthy work-life balance.",
  },
  {
    image: Image14,
    title: "Student Support",
    description: "Mental health support for students in all stages.",
  },
  {
    image: Image15,
    title: "Emotional Intelligence",
    description: "Improving self-awareness and interpersonal relationships.",
  },
];

const EbooksCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? ebooks.length - 3 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 3 >= ebooks.length ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderDots = () => {
    const totalPages = Math.ceil(ebooks.length / 3);
    return Array.from({ length: totalPages }).map((_, index) => (
      <span
        key={index}
        className={`h-2 w-2 rounded-full mx-1 inline-block ${
          index === Math.floor(currentIndex / 3)
            ? "bg-white"
            : "bg-gray-400"
        }`}
      />
    ));
  };

  return (
    <div className="relative px-6 py-10 bg-[#0a2540] text-white">
      <h2 className="text-2xl font-bold mb-4">Ebooks</h2>
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-white text-[#0a2540] rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 px-4">
          {ebooks.slice(currentIndex, currentIndex + 3).map((ebook, index) => (
            <div key={index} className="overflow-hidden rounded-xl group">
              <img
                src={ebook.image}
                alt={ebook.title}
                className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105 rounded-xl"
              />
              <h3 className="text-lg font-semibold mt-3">{ebook.title}</h3>
              <p className="text-sm">{ebook.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-2 bg-white text-[#0a2540] rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center mt-4">{renderDots()}</div>
    </div>
  );
};

export default EbooksCarousel;
