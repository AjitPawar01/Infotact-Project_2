import React from "react";

const Template2 = ({ data }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      {/* Header Section */}
      <div className="text-center border-b pb-4 bg-blue-600 text-white p-4 rounded-t-lg">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-lg">{data.jobTitle}</p>
      </div>

      {/* Contact Info */}
      <div className="mt-4 text-center">
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>LinkedIn:</strong> {data.linkedin}</p>
      </div>

      {/* Summary Section */}
      <div className="mt-4 p-4 bg-white rounded-md shadow">
        <h2 className="text-xl font-bold">Summary</h2>
        <p>{data.summary}</p>
      </div>

      {/* Skills Section */}
      <div className="mt-4 p-4 bg-white rounded-md shadow">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {data.skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-4 p-4 bg-white rounded-md shadow">
        <h2 className="text-xl font-bold">Experience</h2>
        {data.experience.map((job, index) => (
          <div key={index} className="mt-3">
            <h3 className="font-semibold text-blue-600">{job.company}</h3>
            <p className="text-sm text-gray-600">{job.position} | {job.year}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template2;
