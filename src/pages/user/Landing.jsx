import React from "react";
import Image from "../../assets/Images/land.jpg";
import { Link } from "react-router";
import FeaturesGrid from "../../components/FeatureGrid";
import ThreeStepProcess from "../../components/ThreeStepsProcess";
import TherapistProfileCard from "../../components/TherapistProfileCard";
import Image2 from "../../assets/Images/doc.jpg";
import Image3 from "../../assets/Images/femaledoc.jpg";
import Image4 from "../../assets/Images/doc2.jpg";
import Testimonials from "../../components/Testimonials";

const Landing = () => {
  const therapists = [
    {
      name: "Dr. Nana Mensah",
      specialty: "Adolescent Therapy",
      language: "Twi, English",
      photo: Image2,
    },
    {
      name: "Esi Owusu",
      specialty: "Trauma & Grief",
      language: "Ewe, English",
      photo: Image3,
    },
    {
      name: "Kwame Boateng",
      specialty: "Depression & Anxiety",
      language: "Ga, English",
      photo: Image4,
    },
  ];

  return (
    <>
   <div className="relative w-full h-screen">
  {/* Fullscreen Background Image */}
  <img
    src={Image}
    alt="background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  {/* Dark overlay for better readability */}
  <div className="absolute inset-0 bg-opacity-50 z-10" />

  {/* Text Section on Left Side */}
  <div className="relative z-20 flex items-center h-full px-6 md:px-20">
    <div className="w-full md:w-1/2 text-[#005C65] bg-opacity-40 p-8 rounded-lg">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-left">
        Mental Health Support for Ghanaian Youth, Made Accessible
      </h1>
      <p className="text-lg md:text-2xl text-black font-medium mb-8 text-left">
        Affordable, confidential therapy and community support — in your language, on your terms.
      </p>
      <div className="flex gap-4">
        <Link to="/signup">
          <button className="bg-[#005C65] text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </Link>
        <Link to="/match-therapist">
          <button className="bg-transparent border border-[#005C65] text-[#005C65] px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
            Meet Our Therapists
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>




      <div className="bg-white py-12">
        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Choose Aya Health?
          </h2>
          <p className="text-2xl text-black text-center pb-5">
            Our mission is to provide accessible and affordable mental health
          </p>
          <FeaturesGrid />
        </section>
      </div>

      <div>
        <ThreeStepProcess />
      </div>

      <section className="py-10 bg-[#f9f9f9]">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
            Meet the Therapists
          </h2>

          <div className="overflow-x-auto flex justify-center space-x-10 pb-4">
            {therapists.map((t, index) => (
              <TherapistProfileCard key={index} {...t} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};
export default Landing;
