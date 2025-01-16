import React from "react";
import Hero from "../components/Hero";
import Form from "../components/Form";
import { formTitle, formTitleTime, survey } from "../lib/defaults";

const Homepage: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      <Hero />
      <div id="form-section" className="mx-4 py-6 lg:py-20">
        <h2 className="text-pretty text-xl text-center font-semibold tracking-tight text-gray-900 md:text-3xl ">
          {formTitle}
        </h2>
        <p className="text-pretty text-md text-center text-gray-500 mt-1">
          {formTitleTime}
        </p>
      </div>
      <div className="flex mx-4 xl:mx-auto justify-center max-w-7xl px-4 py-10 shadow-2xl shadow-teal-200 rounded-2xl">
        <Form survey={survey} />
      </div>
    </div>
  );
};

export default Homepage;
