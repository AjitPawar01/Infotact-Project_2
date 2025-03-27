import React from "react";

const Template1 = ({ data }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="text-center border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
        <p className="text-gray-600">{data.jobTitle}</p>
      </div>

      {/* Contact Info */}
      <div className="mt-4">
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>LinkedIn:</strong> {data.linkedin}</p>
      </div>

      {/* Skills Section */}
      <div className="mt-4">
        <h2 className="text-xl font-bold">Skills</h2>
        <ul className="list-disc pl-5">
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mt-4">
        <h2 className="text-xl font-bold">Experience</h2>
        {data.experience.map((job, index) => (
          <div key={index} className="mt-2">
            <h3 className="font-semibold">{job.company}</h3>
            <p className="text-sm text-gray-600">{job.position} | {job.year}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template1;
