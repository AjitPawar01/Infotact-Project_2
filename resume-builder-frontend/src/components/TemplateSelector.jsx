import React, { useState } from "react";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";

const TemplateSelector = ({ data }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("Template1");

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "Template1":
        return <Template1 data={data} />;
      case "Template2":
        return <Template2 data={data} />;
      case "Template3":
        return <Template3 data={data} />;
      default:
        return <Template1 data={data} />;
    }
  };

  return (
    <div className="w-full p-4">
      {/* Template Selection Buttons */}
      <div className="flex gap-4 mb-4">
        <button 
          className={`px-4 py-2 rounded ${selectedTemplate === "Template1" ? "bg-blue-500 text-white" : "bg-gray-300"}`} 
          onClick={() => setSelectedTemplate("Template1")}>Template 1</button>
        <button 
          className={`px-4 py-2 rounded ${selectedTemplate === "Template2" ? "bg-blue-500 text-white" : "bg-gray-300"}`} 
          onClick={() => setSelectedTemplate("Template2")}>Template 2</button>
        <button 
          className={`px-4 py-2 rounded ${selectedTemplate === "Template3" ? "bg-blue-500 text-white" : "bg-gray-300"}`} 
          onClick={() => setSelectedTemplate("Template3")}>Template 3</button>
      </div>

      {/* Display Selected Template */}
      {renderTemplate()}
    </div>
  );
};

export default TemplateSelector;
