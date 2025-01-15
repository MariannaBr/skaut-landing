import React from "react";
import Hero from "../components/Hero";
import Form from "../components/Form";
import { survey } from "../lib/defaults";

const Homepage: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      <Hero />
      <div id="form-section" className="flex mx-auto justify-center">
        <h2 className="text-pretty text-xl font-semibold tracking-tight text-gray-900 md:text-3xl py-6 lg:py-20">
          Let&apos;s Explore Your Hormonal Journey
        </h2>
      </div>
      <div className="flex mx-4 xl:mx-auto justify-center max-w-7xl px-4 xl:px-0 py-10 shadow-2xl shadow-teal-200 rounded-2xl">
        <Form survey={survey} />
      </div>
    </div>
  );
};

export default Homepage;
