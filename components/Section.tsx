import React from "react";
import { SectionData } from "../lib/defaults";

const Section: React.FC<{ section: SectionData }> = ({ section }) => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
      <div>
        <h2 className="text-base/7 font-semibold text-gray-900">
          {section.title}
        </h2>
      </div>

      <div className="max-w-2xl space-y-10 md:col-span-2">
        {section.questions.map((question) => (
          <fieldset key={question.id}>
            <legend className="text-sm/6 font-semibold text-gray-900">
              {question.question}
            </legend>
            <div className="mt-6 space-y-6">
              {question.answers.map((answer, index) => (
                <div key={index} className="flex items-center gap-x-3">
                  <input
                    id={question.id}
                    name={question.id}
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label
                    htmlFor={section.title}
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    {answer}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  );
};

export default Section;
