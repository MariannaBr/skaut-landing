import React, { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild
} from "@headlessui/react";
import {
  domain,
  flowerTypes,
  titleClose,
  titleResult,
  titleSharedLink,
  titleShareLink,
  titleShareFlower,
  titleShareAdvice,
  titleShareQuestion
} from "../lib/defaults";

type Props = {
  flowerType: string;
  isOpen: boolean;
  onClose: () => void;
};

const ResultPopup: React.FC<Props> = ({ flowerType, isOpen, onClose }) => {
  const selectedFlower = flowerTypes.find(
    (flower) => flower.type === flowerType
  )?.data;

  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const handleCopyLink = () => {
    const text =
      titleShareFlower +
      selectedFlower?.flower +
      titleShareAdvice +
      selectedFlower?.advice +
      titleShareQuestion +
      domain;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess(true);
      })
      .catch(() => {
        setCopySuccess(false);
      });
  };

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog className="relative z-10" onClose={onClose}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <div>
                    <div className="flex justify-center mb-10">
                      <img
                        src={selectedFlower?.image}
                        className="w-20 h-20 md:w-60 md:h-60 mr-2 md:mr-4"
                        alt="logo"
                      />
                      <h2 className="text-center self-center text-2xl md:text-6xl font-bold tracking-tight text-pink-600">
                        {titleResult} {selectedFlower?.flower}
                      </h2>
                    </div>

                    <div className="text-center">
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 md:text-lg">
                          {selectedFlower?.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="mt-6">
                        <p className="text-sm text-pink-500 md:text-lg font-semibold">
                          {selectedFlower?.advice}
                        </p>
                      </div>
                    </div>
                    <div className="mx-4 xl:mx-auto justify-center p-4 my-10 shadow-lg rounded-lg border-teal-200 border-2">
                      {!copySuccess && (
                        <div>
                          <div className="text-center">
                            <div className="lg:mt-4">
                              <p className="text-sm text-teal-500 md:text-lg font-semibold">
                                {titleShareLink}
                              </p>
                            </div>
                          </div>

                          <div className="mt-5 sm:mt-16">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md bg-teal-100 px-3 py-4 text-sm md:text-md font-semibold text-teal-700 shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
                              onClick={handleCopyLink}
                            >
                              Share
                            </button>
                          </div>
                        </div>
                      )}

                      {copySuccess && (
                        <div>
                          <div className="text-center">
                            <div className="lg:mt-4">
                              <p className="text-sm text-teal-500 md:text-lg font-semibold">
                                {titleSharedLink}
                              </p>
                            </div>
                          </div>
                          <div className="mt-5 sm:mt-16">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md bg-teal-100 px-3 py-2 text-sm md:text-md font-semibold text-teal-700 shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
                              onClick={onClose}
                            >
                              {titleClose}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ResultPopup;
