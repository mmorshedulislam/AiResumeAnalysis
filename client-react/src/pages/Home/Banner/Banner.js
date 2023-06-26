import React from "react";
import bg2 from "../../../assets/images/banner/bg2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ background: `url(${bg2})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h1 className="mb-5 text-5xl font-bold">Hey, We Save Your Valuable Time!</h1>
            <p className="mb-5 text-xl">Upload your CV or Resume and see the Magic!</p>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
