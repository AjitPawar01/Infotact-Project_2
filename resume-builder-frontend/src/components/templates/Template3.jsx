import React from "react";

const Template3 = ({ data }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white border border-gray-300 rounded-md">
      {/* Header Section */}
      <div className="text-center border-b pb-3">
        <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
        <p className="text-gray-700">{data.jobTitle}</p>
      </div>

      {/* Contact Info */}
      <div className="mt-3 text-sm text-gray-800">
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>LinkedIn:</strong> {data.linkedin}</p>
      </div>

      {/* Skills Section */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Skills</h2>
        <ul className="list-disc pl-4 text-gray-700">
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Experience</h2>
        {data.experience.map((job, index) => (
          <div key={index} className="mt-2">
            <h3 className="font-medium text-gray-900">{job.company}</h3>
            <p className="text-sm text-gray-600">{job.position} | {job.year}</p>
            <p className="text-gray-700">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template3;
