import React from "react";
import {
  SurveyFormData,
  titleCancel,
  titleEmail,
  titleSubmit,
  survey,
} from "../lib/defaults";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebaseConfig.js";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Form() {
  const [formData, setFormData] = useState<SurveyFormData>({
    email: "",
    response: "",
    otherResponse: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      response: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), formData);
      setFormData({ email: "", response: "", otherResponse: "" }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="h-full flex flex-col">
        <div className="flex-1">
          <fieldset className="my-10">
            <div className="space-y-6">
              {survey.answers.map((answer, index) => (
                <div key={index} className="flex items-center gap-x-3">
                  <input
                    id={`${index}`}
                    name="response"
                    type="radio"
                    value={answer}
                    checked={formData.response === answer}
                    onChange={() => handleRadioChange(answer)}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-pink-600 checked:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label
                    //htmlFor={`${sectionIndex}-${question.id}-${index}`}
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    {answer}
                  </label>
                </div>
              ))}

              {/* Conditional text input for "Other" option */}
              {formData.response === "Other" && (
                <div className="ml-7 mt-4">
                  <label
                    htmlFor="otherResponse"
                    className="block text-sm/6 font-medium text-gray-900 mb-2"
                  >
                    Please specify:
                  </label>
                  <input
                    id="otherResponse"
                    name="otherResponse"
                    type="text"
                    value={formData.otherResponse || ""}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-500 sm:text-sm/6"
                    placeholder="Enter your response..."
                  />
                </div>
              )}
            </div>
          </fieldset>

          <div className="sm:col-span-4">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-500 sm:text-sm/6"
            />
          </div>

          <div className="mt-auto flex items-center justify-end gap-x-6 pt-6">
            <button
              type="submit"
              className="rounded-md bg-pink-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              {titleSubmit}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
