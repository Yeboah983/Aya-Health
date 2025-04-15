import React from "react";
import { FileText, Video, BookOpen } from "lucide-react"; // icons for resource types

const  ResourceDash = () => {
  const resources = [
    {
      id: 1,
      title: "Cognitive Behavioral Therapy (CBT) Guide",
      type: "pdf",
      description: "A detailed guide for CBT techniques and practices.",
      link: "#",
    },
    {
      id: 2,
      title: "Video: Managing Anxiety in Teens",
      type: "video",
      description: "Educational video for therapists working with youth.",
      link: "#",
    },
    {
      id: 3,
      title: "Research on Depression in Ghana",
      type: "article",
      description: "An in-depth article on culturally sensitive therapy.",
      link: "#",
    },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FileText className="text-red-500" />;
      case "video":
        return <Video className="text-blue-500" />;
      case "article":
        return <BookOpen className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-[#124fd1] mb-6">
          Therapist Resources
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-start gap-4 hover:shadow-lg transition"
            >
              <div className="text-3xl">{renderIcon(resource.type)}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  className="text-[#124fd1] hover:underline text-sm font-medium"
                >
                  View Resource
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceDash;
