import React from "react";

function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[200px] relative z-20">
          <div className="w-[750px] max-w-full">
            <img
              className="w-full h-fit"
              src="/assets/images/illustration-intro.svg"
              alt="landing"
            />
          </div>
          <div className=" text-white text-center">
            <h1 className="text-[30px] font-semibold mb-[15px] md:text-[40px]">
              All your files in one secure location,
              <br />
              accessible anywhere.
            </h1>
            <p className="text-lg font-normal px-[15px] md:w-[600px] max-w-full mb-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
              nulla impedit commodi.
            </p>
          </div>
          <a href="/" className="btn element-center w-[280px] h-[60px] rounded-[30px] text-white font-medium">
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img
          className="w-full h-full"
          src="/assets/images/bg-intro-mobile.svg"
          alt="bg-intro-mobile"
        />
      </div>
    </section>
  );
}

export default Landing;
