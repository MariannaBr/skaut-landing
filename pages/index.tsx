import React, { useState } from "react";
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
//import { InlineWidget } from "react-calendly";

// const [calendlyLink, setCalendlyLink] = useState('');

// const setCalendlyLink = (location) => {
//   ;
// };

const Homepage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const locations = [
    {
      title: "Lower Pacific Heights",
      address: "2211 Post St, 3rd Floor - Suite 300\nSan Francisco, CA 94115",
      img: "/loc_lower_pacific_heights.jpg"
    },
    {
      title: "Downtown SF",
      address: "490 Post St - Suite 939, San Francisco, CA 94102",
      img: "/loc_downtown_sf.jpg"
    },
    {
      title: "Menlo Park",
      address: "120 Santa Margarita Ave Building B, Menlo Park, CA 94025",
      img: "/loc_menlo_park.jpg"
    }
  ];

  const calendlyLinks = [
    "https://calendly.com/d/cnb6-pxf-jct/lower-pacific-heights-sf",
    "https://calendly.com/d/cq4r-6wt-2w4/downtown-sf",
    "https://calendly.com/d/cn28-nxz-rhd/menlo-park"
  ];
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
    </>
  );
};

export default Homepage;

{
  /* <div id="form-section" className="mx-4 py-6 lg:py-20">
          <h1 className="text-pretty text-2xl text-center font-semibold tracking-tight text-gray-900 md:text-3xl mb-20">
            Testing Calendly
          </h1>
          <p className="text-pretty text-md text-center text-gray-500 mt-1 mb-10">
            This will be added to the web app for the patient, after his
            workflow is done and he is able to book an appointment.
          </p>

          <div className="p-6 mx-auto max-w-7xl">
            <div className="mx-auto grid grid-cols-3 gap-x-20">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className={`cursor-pointer overflow-hidden rounded-2xl shadow-lg w-72 ${
                    selectedIndex === index ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="overflow-hidden rounded-2xl shadow-lg w-72">
                    <img
                      src={loc.img}
                      alt={loc.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold">{loc.title}</h2>
                      <p className="mt-2 text-gray-700 whitespace-pre-line">
                        {loc.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedIndex !== null && (
              <div className="mt-10 border-t pt-6">
                <InlineWidget
                  url={calendlyLinks[selectedIndex]}
                  styles={{ height: "700px" }}
                />
              </div>
            )}
          </div> */
}

{
  /* Location Buttons */
}
{
  /* <div className="flex">
            <div className="mx-auto grid grid-cols-3 gap-x-14">
              <div className="flex mx-auto lg:mx-0">
                <div className="flex flex-col items-start justify-between shadow-lg rounded-2xl">
                  <div className="post-image">
                    <img
                      alt="Lower Pacific Heights"
                      src="/loc_lower_pacific_heights.jpg"
                      className="w-full rounded-t-2xl object-cover h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">
                      Lower Pacific Heights
                    </h2>
                    <p className="mb-3">
                      2211 Post St, 3rd Floor - Suite 300
                      <br />
                      San Francisco, CA 94115
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mx-auto lg:mx-0">
                <div className="flex flex-col items-start justify-between shadow-lg rounded-2xl">
                  <div className="post-image">
                    <img
                      alt="Lower Pacific Heights"
                      src="/loc_downtown_sf.jpg"
                      className="w-full rounded-t-2xl object-cover h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Downtown SF</h2>
                    <p className="mb-3">
                      490 Post St - Suite 939
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mx-auto lg:mx-0">
                <div className="flex flex-col items-start justify-between shadow-lg rounded-2xl">
                  <div className="post-image">
                    <img
                      alt="Lower Pacific Heights"
                      src="/loc_menlo_park.jpg"
                      className="w-full rounded-t-2xl object-cover h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Menlo Park</h2>
                    <p className="mb-3">
                      120 Santa Margarita Ave Building B,
                      <br />
                      Menlo Park, CA 94025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */
}
{
  /* Location Buttons */
}
{
  /* Calendly inline widget begin */
}
{
  /* <InlineWidget url="https://calendly.com/brezinova-marianna/test-meeting" /> */
}

{
  /*Calendly inline widget end */
}
{
  /* </div> */
}
