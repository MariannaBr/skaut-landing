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
  urlImg300x200,
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

      <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto py-6 sm:py-8">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-base/7 font-semibold text-indigo-600">
              Deploy faster
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-balance text-center text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <div className="mt-6 grid gap-3 sm:mt-8 lg:grid-cols-3 lg:grid-rows-2">
              {/* Marianna */}
              <div className="relative lg:row-span-2">
                <img
                  alt="Marianna Brezinova"
                  src="/Marianna.jpg"
                  className="mx-auto size-56 rounded-full outline outline-1 -outline-offset-1 outline-black/5 mt-8"
                  //className="aspect-[3/2] w-full rounded-t-2xl object-contain object-center bg-black outline outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <h3 className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Marianna Brezinova
                  </h3>
                  <p className="text-base/7 text-gray-600">Founder</p>
                  <p className="mt-4 text-base/7 text-gray-600">
                    Marianna is a founder of Skaut.ai and I'm here to help you
                    with automation.
                  </p>
                  <ul role="list" className="mt-6 flex gap-x-6">
                    <li>
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
                    </li>
                  </ul>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5 lg:rounded-l-[2rem]" />
              </div>
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      Performance
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit
                      maiores impedit.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                    <img
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                      className="w-full max-lg:max-w-xs"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5 max-lg:rounded-t-[2rem]" />
              </div>
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      Security
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                      suspendisse semper morbi.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                    <img
                      alt=""
                      src="/apps_graph.png"
                      className="h-[min(152px,40cqw)] object-cover"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5" />
              </div>

              {/* Form */}
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      {survey.question}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Help us improve by sharing your feedback. Your input is
                      valuable to us.
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
      </div>
    </>
  );
};

export default Homepage;
