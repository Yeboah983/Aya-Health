import {
    UserCheck,
    Video,
    MessageCircle,
    WifiOff,
    Languages,
  } from "lucide-react";
  
  const features = [
    {
      icon: UserCheck,
      title: "Therapist Matching",
      subtitle: "Find your ideal support",
      description:
        "Get paired with a therapist who aligns with your needs, culture, and preferences.",
    },
    {
      icon: Video,
      title: "Chat & Video Sessions",
      subtitle: "Talk your way",
      description:
        "Choose messaging or video calls—connect in the way that feels most comfortable.",
    },
    {
      icon: MessageCircle,
      title: "Anonymous Forums",
      subtitle: "Share without fear",
      description:
        "Open up in safe, moderated spaces where your identity stays private.",
    },
    {
      icon: WifiOff,
      title: "Low-Bandwidth Mode",
      subtitle: "Stay connected anywhere",
      description:
        "Designed to work even with limited data or slow internet connections.",
    },
    {
      icon: Languages,
      title: "Local Language Support",
      subtitle: "Your voice, your language",
      description:
        "Talk in Twi, Ewe, Ga, and more—because comfort begins in familiar words.",
    },
  ];
  
  const FeatureCard = ({ icon: Icon, title, subtitle, description }) => (
    <div className="bg-[#99C5C7] p-6 rounded-2xl shadow-md flex flex-col items-center text-center space-y-3 hover:scale-105 hover:shadow-xl">
      <Icon className="w-10 h-10 text-primary" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <span className="text-sm text-gray-600">{subtitle}</span>
      <p className="text-sm text-gray-800">{description}</p>
    </div>
  );
  
  const FeaturesGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
  
  export default FeaturesGrid;
  