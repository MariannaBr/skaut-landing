import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="sm:h-screen relative isolate overflow-hidden pt-8 pb-20 lg:pb-0 flex justify-center">
      <img
        alt=""
        src="/graph.png"
        className="absolute -z-10 lg:size-full object-scale-down opacity-30"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 md:text-7xl">
              How do you handle hormone changes?
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
              Every woman reacts to the changes during the menstrual cycle
              differently...there are four types, each represented by beautiful
              flower. Which one are you?
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#form-section"
                className="rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Let's find out
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-8 -mt-20 sm:-mt-44 md:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="w-24 md:w-32 xl:w-44 flex-none space-y-8 sm:mr-0 pt-32 sm:pt-52 lg:pt-36">
              <div className="relative">
                <img
                  alt=""
                  src="/sunflower.png"
                  className="w-full rounded-xl object-cover shadow-2xl p-3"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl" />
              </div>
              <div className="relative">
                <img
                  alt=""
                  src="/cherry.png"
                  className="w-full rounded-xl object-cover shadow-2xl p-3"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl" />
              </div>
            </div>
            <div className="w-24 md:w-32 xl:w-44 flex-none space-y-8 sm:pt-0">
              <div className="relative">
                <img
                  alt=""
                  src="/lavender.png"
                  className="w-full rounded-xl object-cover shadow-2xl p-3"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl" />
              </div>
              <div className="relative">
                <img
                  alt=""
                  src="/poppy.png"
                  className="w-full rounded-xl object-cover shadow-2xl p-3"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
