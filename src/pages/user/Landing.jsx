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
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] md:h-screen">
        {/* Fullscreen Background Image */}
        <img
          src={Image}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10" />

        {/* Text Section */}
        <div className="relative z-20 flex items-center justify-center h-full px-4 md:px-20">
          <div className="w-full md:w-1/2 text-[#005C65]  bg-opacity-70 p-6 md:p-10 rounded-lg">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-left">
              Mental Health Support for Ghanaian Youth, Made Accessible
            </h1>
            <p className="text-md sm:text-lg md:text-2xl text-black font-medium mb-6 text-left">
              Affordable, confidential therapy and community support — in your language, on your terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <button className="w-full sm:w-auto bg-[#005C65] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#00474f] transition">
                  Get Started
                </button>
              </Link>
              <Link to="/match-therapist">
                <button className="w-full sm:w-auto bg-transparent border border-[#005C65] text-[#005C65] px-6 py-3 rounded-xl font-semibold hover:bg-[#005C65] hover:text-white transition">
                  Meet Our Therapists
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-12 px-4">
        <section className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Why Choose Aya Health?
          </h2>
          <p className="text-md sm:text-lg text-black text-center mb-8">
            Our mission is to provide accessible and affordable mental health care tailored to your needs.
          </p>
          <FeaturesGrid />
        </section>
      </div>

      {/* How It Works Section */}
      <div className="bg-[#f9f9f9] py-12">
        <ThreeStepProcess />
      </div>

      {/* Meet the Therapists Section */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-black">
          Meet the Therapists
        </h2>

        <div className="flex flex-wrap justify-center gap-6 px-4">
          {therapists.map((therapist, index) => (
            <TherapistProfileCard key={index} {...therapist} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <div className="bg-[#f9f9f9] py-12">
        <Testimonials />
      </div>
    </>
  );
};

export default Landing;
