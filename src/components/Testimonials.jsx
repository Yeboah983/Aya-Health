import React, { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Aya gave me a safe space I never had before.",
    name: "Ama B.",
  },
  {
    quote: "Speaking Twi with my therapist made it feel real and personal.",
    name: "Kojo M.",
  },
  {
    quote: "Affordable and easy to use — I finally feel seen.",
    name: "Akosua D.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#99C5C7] py-10">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-black">
        Success Stories
      </h2>

      <div className="relative w-full flex justify-center items-center overflow-hidden px-4">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
              style={{ maxWidth: "100%" }}
            >
              <div className="bg-[#f1f1f1] p-4 md:p-6 rounded-2xl shadow-md text-center mx-auto w-[90%] md:w-[500px]">
                <p className="text-lg md:text-2xl italic text-gray-800">“{t.quote}”</p>
                <p className="mt-4 font-semibold text-black">— {t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
