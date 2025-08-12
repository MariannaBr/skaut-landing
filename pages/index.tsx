import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Form from "../components/Form";
import {
  title,
  metaDescription,
  domain,
  formTitle,
  paragraphMarianna,
  survey,
  titlePage,
  urlImg300x200,
  titleMarianna,
  titleFounder,
  paragraphFounder,
  titleWhy,
  paragraphWhy,
  roleMarianna,
  linkedInMarianna,
  nameMarianna,
} from "../lib/defaults";

const Homepage: React.FC = () => {
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={urlImg300x200} />
        <meta property="og:url" content={domain} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* <div className="h-screen bg-gray-50 flex items-center justify-center overflow-hidden">
        <div className="w-full max-h-screen overflow-y-auto py-6 sm:py-14">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              {title}
            </h1>
            <div className="mt-6 grid gap-3 sm:mt-8 lg:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              //Marianna's section
              <div className="relative lg:row-span-2">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    {titleMarianna}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {paragraphMarianna}
                  </p>
                  <div className="flex items-center gap-x-6 mt-4">
                    <img
                      alt=""
                      src="/Marianna.jpg"
                      className="size-20 rounded-full outline outline-1 -outline-offset-1 outline-black/5"
                    />
                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                        Marianna Brezinova
                      </h3>
                      <div className="flex items-center gap-x-2">
                        <p className="text-sm/6 font-semibold text-indigo-600">
                          Founder
                        </p>
                        <a
                          href="https://www.linkedin.com/in/mariannabrezinova/"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="size-5"
                          >
                            <path
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5 lg:rounded-l-[2rem]" />
              </div>
              //Founder ROI
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      {titleFounder}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      {paragraphFounder}
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                    <img
                      alt=""
                      src="/values.png"
                      className="w-full max-lg:max-w-xs"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5 max-lg:rounded-t-[2rem]" />
              </div>
              //Why automations
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      {titleWhy}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      {paragraphWhy}
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                    <img
                      alt=""
                      src="/apps.png"
                      className="h-72 w-72 object-cover"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5" />
              </div>
              //Form section
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      {formTitle}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      {survey.question}
                    </p>
                  </div>
                  <div className="flex-1 px-8 pb-8 sm:px-10">
                    <Form />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h3 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            {titleFounder}
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="flex p-px lg:col-span-4">
              <div className="w-full overflow-hidden rounded-lg bg-white shadow outline outline-1 outline-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
                <div className="p-10">
                  <h3 className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                    {titleFounder}
                  </h3>
                  <p className="mt-2 w-full text-sm/6 text-gray-600 dark:text-gray-400">
                    {paragraphFounder}
                  </p>
                </div>
                <img
                  alt=""
                  src="/values.png"
                  className="h-80 object-cover object-left dark:hidden"
                />
              </div>
            </div>
            <div className="relative p-px lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    {formTitle}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {survey.question}
                  </p>
                </div>
                <div className="flex-1 px-8 pb-8 sm:px-10">
                  <Form />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="w-full overflow-hidden rounded-lg bg-white shadow outline outline-1 outline-black/5 lg:rounded-bl-[2rem] dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
                <div>
                  <img
                    alt=""
                    src="/Marianna.png"
                    className="aspect-[3/2] w-full rounded-lg rounded-b-none object-contain bg-black outline outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
                  />
                  <div className="p-10">
                    <h3 className="mt-6 text-lg/8 font-semibold text-gray-900 dark:text-white">
                      {nameMarianna}
                    </h3>
                    <div role="list" className="flex">
                      <p className="text-base/7 text-gray-600 dark:text-gray-400">
                        {roleMarianna}
                      </p>
                      <a
                        href={linkedInMarianna}
                        className="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 ml-4 justify-center flex items-center"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="size-5"
                        >
                          <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                    <p className="mt-4 text-base/7 text-gray-600 dark:text-gray-400">
                      {paragraphMarianna}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-4">
              <div className="w-full overflow-hidden rounded-lg bg-white shadow outline outline-1 outline-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
                <div className="p-10">
                  <h3 className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                    {titleWhy}
                  </h3>
                  <p className="mt-2 w-full text-sm/6 text-gray-600 dark:text-gray-400">
                    {paragraphWhy}
                  </p>
                </div>
                <img
                  alt=""
                  src="/apps.png"
                  className="h-80 object-cover object-left dark:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
