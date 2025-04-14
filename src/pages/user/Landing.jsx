import React from "react";
import Image from "../../assets/Images/man.jpg";
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
      <div className="relative w-full h-screen text-white">
        <img
          src={Image}
          alt="man"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-90 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center h-full w-full px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-7xl text-yellow-100">
            Mental Health Support for Ghanaian Youth, Made Accessible
          </h1>
          <p className="text-lg md:text-2xl text-white font-medium max-w-5xl mb-8">
            Affordable, confidential therapy and community support — in your
            language, on your terms.
          </p>
          <div className="flex gap-4">
            <Link to="/signup">
              <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
                Get Started
              </button>
            </Link>
            <Link to="/therapists">
              <button className="bg-transparent border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
                Meet Our Therapists
              </button>
            </Link>
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
