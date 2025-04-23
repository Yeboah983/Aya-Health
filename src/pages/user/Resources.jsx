import React from "react";
import Image from "../../assets/Images/hero.png";
import Image2 from "../../assets/Images/article2.jpg";
import Image3 from "../../assets/Images/article3.jpg";
import Image4 from "../../assets/Images/article1.jpg";
import GuideCarousel from "../../components/GuideCarousal"
import EbookGallery from "../../components/EbookGallery";
import ReportsGall from "../../components/ReportsGall";
import CaseStudy from "../../components/CaseStudy";
import Webnar from "../../components/Webnar";


const Resources = () => {
  return (
    <>
      <div className="p-6 justify-center bg-[#F4F6FA]">
        <div className="justify-around pt-20">
          <h1 className="text-3xl md:text-5xl font-serif text-black mb-4">
            Mental health resources
          </h1>
          <h2 className="text-xl font-semibold text-purple-700 mb-5">
            Featured Resource
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-white px-6 py-6">
          {/* Image Section */}
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10">
            <img
              src={Image}
              alt="Mental health resources"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <span className="inline-block bg-[#e6f4f1] text-[#14373f] text-sm px-4 py-1 rounded-full mb-4 w-fit">
              Infographic
            </span>
            <h2 className="text-4xl text-[#14373f] font-semibold mb-6">
              In Our Normalization Era
            </h2>
            <p className="text-lg text-[#5c9ead] leading-relaxed">
              In our second annual survey on mental health attitudes and
              conversations, we uncovered insights on the challenges faced by
              different generations today, people’s shifting expectations for
              their employers, educational institutions, and government leaders,
              and more. Download the free 2024 report “In our Normalization Era”
              today.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#14373f]">
            Articles
          </h2>
          <a
            href="#"
            className="text-sm font-medium text-[#067A6F] hover:underline"
          >
            View all &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Article Card 1 */}
          <div className="flex flex-col group">
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={Image4}
                alt="Managers supporting employees"
                className="w-full h-56 object-cover rounded-xl transform transition duration-300 group-hover:scale-105"
              />
            </div>
            <span className="bg-[#e6f4f1] text-[#14373f] text-xs px-3 py-1 rounded-full w-fit mb-2">
              Employee mental health
            </span>
            <a
              href="#"
              className="text-base font-semibold text-[#14373f] hover:text-[#067A6F] hover:underline"
            >
              10 Effective ways managers can support employees
            </a>
          </div>

          {/* Article Card 2 */}
          <div className="flex flex-col group">
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={Image2}
                alt="Empower students"
                className="w-full h-56 object-cover rounded-xl transform transition duration-300 group-hover:scale-105"
              />
            </div>
            <span className="bg-[#f7e8ed] text-[#A14452] text-xs px-3 py-1 rounded-full w-fit mb-2">
              All
            </span>
            <a
              href="#"
              className="text-base font-semibold text-[#14373f] hover:text-[#067A6F] hover:underline"
            >
              9 Ways to empower students in their learning journey
            </a>
          </div>

          {/* Article Card 3 */}
          <div className="flex flex-col group">
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={Image3}
                alt="Empower employees"
                className="w-full h-56 object-cover rounded-xl transform transition duration-300 group-hover:scale-105"
              />
            </div>
            <span className="bg-[#e6f4f1] text-[#14373f] text-xs px-3 py-1 rounded-full w-fit mb-2">
              Employee mental health
            </span>
            <a
              href="#"
              className="text-base font-semibold text-[#14373f] hover:text-[#067A6F] hover:underline"
            >
              How to empower employees: Unlocking potential in the workplace
            </a>
          </div>
        </div>
      </div>

      {/* Guides Section */}
      <GuideCarousel />
      <EbookGallery/>
      <ReportsGall/>
      <CaseStudy/>
      <Webnar/>
    </>
  );
};

export default Resources;
