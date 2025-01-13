import React from "react";
import { GetServerSideProps } from "next";
import { getDataFromFirestore } from "../lib/firestore";
import { SectionData, survey } from "../lib/defaults";
import Section from "../components/Section";
import Hero from "../components/Hero";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getDataFromFirestore();

  return {
    props: { data }
  };
};

type Props = {
  data: [];
  survey: SectionData[];
};

const Homepage: React.FC<Props> = () => {
  return (
    <div className="bg-white ">
      <Hero />

      <div className="flex mx-auto justify-center max-w-7xl mb-20 px-8 xl:px-0 py-10 shadow-2xl shadow-teal-200 rounded-2xl">
        <form>
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Little bit about you
                </h2>
              </div>

              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-500 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-500 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="age"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Age
                  </label>
                  <div className="mt-2">
                    <input
                      id="age"
                      name="age"
                      type="text"
                      autoComplete="age"
                      className="block w-1/5 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-500 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
            {survey.map((item) => (
              <Section key={item.title} section={item} />
            ))}

            <div className="mt-6 mb-20 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-pink-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
