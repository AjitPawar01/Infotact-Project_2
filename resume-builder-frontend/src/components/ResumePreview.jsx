import React, { useState } from "react";
import TemplateSelector from "./TemplateSelector";

const ResumePreview = ({ resumeData }) => {
  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Resume Preview</h1>
      <TemplateSelector data={resumeData} />
    </div>
  );
};

export default ResumePreview;
