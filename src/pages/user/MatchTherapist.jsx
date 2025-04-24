import React from "react";
import { Link } from "react-router";
import Image from "../../assets/Images/hero3.jpg";
import Image2 from "../../assets/Images/facetime.png";

const FindTherapist = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
  {/* Text Section */}
  <div className="w-full md:w-[40%] bg-[#F1F3F2] flex items-center px-6 md:px-12">
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#005C65] text-left">
        Find the best therapist for you
      </h1>
      <p className="text-lg md:text-xl text-black font-medium mb-8 text-left">
        “We know finding the right therapist can be hard. That’s why we’ve
        created a personalized match system to help you connect with a
        professional that fits your unique needs, preferences, and goals.”
      </p>
      <div className="flex gap-4">
        <Link to="/search">
          <button className="bg-[#005C65] text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Let’s Get Started
          </button>
        </Link>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-[60%] relative">
    <img
      src={Image}
      alt="man"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-6 h-auto md:h-[500px] mt-10 mb-10">
  {/* Image (Left) */}
  <div className="w-full md:w-1/2 rounded-lg  overflow-hidden flex items-center justify-center ">
    <img
      src={Image2}
      alt="Quality mental health care within reach"
      className="w-full h-full object-contain rounded-lg"
    />
  </div>

  {/* Text Content (Right) */}
  <div className="w-full md:w-1/2 bg-white bg-opacity-75 p-6 rounded-lg flex flex-col justify-between">
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#005C65] mb-4">
        Quality mental health care within reach
      </h1>
      <p className="text-[#4cbac4] mb-4 text-xl">
        Research shows that 56% of Americans want to access a mental
        health care provider. Talkspace connects members to a professional
        therapist or medical provider quickly and without high costs or
        long waits.
      </p>
      <p className="text-[#376468] mb-6 text-xl">
        As a leading digital mental health platform, Aya Health has invested in
        efficacy studies that validate value and member outcomes.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#B9DDFF] p-4 rounded-lg">
          <p className="text-2xl font-bold text-[#2A292D]">55%</p>
          <p className="text-sm">are seeking care for the first time</p>
        </div>
        <div className="bg-[#E7F3FF] p-4 rounded-lg">
          <p className="text-2xl font-bold text-[#2A292D]">60%</p>
          <p className="text-sm">engage with the platform for 3+ months</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default FindTherapist;
