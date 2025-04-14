import { UserPlus, HeartHandshake, Video } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-8 h-8 text-[#BD701A]" />,
    title: "Sign Up & Choose Preferences",
    text: "Tell us a bit about yourself and your support preferences to personalize your experience.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-[#BD701A]" />,
    title: "Get Matched with a Therapist",
    text: "We’ll pair you with a therapist who best understands your cultural and emotional needs.",
  },
  {
    icon: <Video className="w-8 h-8 text-[#BD701A]" />,
    title: "Start Healing — Your Way",
    text: "Begin chat or video sessions at your pace, with support that meets you where you are.",
  },
];

const ThreeStepProcess = () => (
  <section className="py-10 bg-[#99C5C7] text-black">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">How Aya Works</h2>
      <p className="text-lg font-semibold mb-5">Get support in 3 easy steps</p>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-800 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center items-center w-12 h-12 mx-auto bg-black rounded-full mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-800">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeStepProcess;
