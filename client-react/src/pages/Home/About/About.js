import React from "react";

const About = () => {
  return (
    <div className="my-20">
      <div className="grid grid-cols-3 gap-10 mx-10">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Resume</h2>
            <p className="text-justify">
              A CV – or Curriculum Vitae – is an itemized list of a person's
              entire education, publications, accomplishments, notable projects,
              awards, honors, achievements, and professional experiences
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Curriculum Vitae</h2>
            <p className="text-justify">
              A CV – or Curriculum Vitae – is an itemized list of a person's
              entire education, publications, accomplishments, notable projects,
              awards, honors, achievements, and professional experiences
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Other PDF</h2>
            <p className="text-justify">
              A CV – or Curriculum Vitae – is an itemized list of a person's
              entire education, publications, accomplishments, notable projects,
              awards, honors, achievements, and professional experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
