import React from "react";
import "./heroSection.css";

const heroSection = () => {
  return (
    <section className="bg-gray-900 herosection_outer">
      <div className="grid max-w-screen-xl px-12 py-8 mx-auto my-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-5 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Fix Health
          </h1>
          <p className="max-w-2xl mb-1 font-light  md:text-lg lg:text-xl text-gray-400">
            No.1 Choice For achieving pain relief & improving quality of life.
          </p>
          <p className="max-w-2xl mb-1 font-light  md:text-lg lg:text-xl text-gray-400">
            Experience the Benefits of Advanced Technology and Expert Care
          </p>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            60+ Expert Physiotherapists for 200+ Conditions
          </p>
          <a
            href="/#bookingformm"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-doctors-consultation-4563325-3784166.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default heroSection;
