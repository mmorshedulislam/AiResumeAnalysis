import React from "react";
import cv1 from "../../../assets/images/other/cv-1.png";
import resume1 from "../../../assets/images/other/resume-1.png";

const HowWorks = () => {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2 gap-4">
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
          <figure className="bg-cover">
            <img src={cv1} alt="cv" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Upload CV</h2>
            <p>
              Upload your cv and test yourself about your knowledge and get
              ready for interview.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Try Now</button>
            </div>
          </div>
        </div>
        <div className="card mx-auto w-96 bg-base-100 shadow-xl">
          <figure className="bg-cover">
            <img src={resume1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Upload Resume</h2>
            <p>
              Upload A resume and get question for interview where interview is
              so easy.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Try Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
