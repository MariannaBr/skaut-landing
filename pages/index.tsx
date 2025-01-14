import React from "react";
import Hero from "../components/Hero";
import Form from "../components/Form";
import { survey, SurveyFormData } from "../lib/defaults";
import { getDataFromFirestore } from "../lib/firestore";
import { GetServerSideProps } from "next";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebaseConfig.js";

// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = await getDataFromFirestore();

//   return {
//     props: { data }
//   };
// };

// type Props = {
//   data: SurveyFormData[];
// };

const Homepage: React.FC = () => {
  return (
    <div className="bg-white ">
      <Hero />
      <div className="flex mx-auto justify-center max-w-7xl mb-20 px-8 xl:px-0 py-10 shadow-2xl shadow-teal-200 rounded-2xl">
        <Form survey={survey} />
      </div>
    </div>
  );
};

export default Homepage;
