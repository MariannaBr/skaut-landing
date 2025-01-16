import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Form from "../components/Form";
import {
  title,
  domain,
  formTitle,
  formTitleTime,
  paragraph,
  survey,
  titlePage,
  urlImg300x200
} from "../lib/defaults";

const Homepage: React.FC = () => {
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content={paragraph} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={paragraph} />
        <meta property="og:image" content={urlImg300x200} />
        <meta property="og:url" content={domain} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>
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
    </>
  );
};

export default Homepage;
