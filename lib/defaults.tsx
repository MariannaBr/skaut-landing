export const title = "How Do You Handle PMS?";
export const titlePage = "PMS & ME";
export const paragraph =
  "You experience the changes of the menstrual cycle in your own unique way. There are four distinct types, each symbolized by a beautiful flower. Which one are you?";
export const buttonText = "Let's Find Out";
export const formTitle = "Discover Your Flower and Get Advice.";
export const formTitleTime = "It Takes Less Than 2 Minutes :)";
export const titlePersonal = "Little Bit About You";
export const titleName = "Name";
export const titleEmail = "Email Address";
export const titleAge = "Age";
export const titleCancel = "Cancel";
export const titleSubmit = "Submit";
export const titleResult = "You Are";
export const titleClose = "Close";
export const titleShare = "Share";
export const titleShareLink =
  "Share your results with your friends and help them discover their flowers!";
export const titleSharedLink =
  "Great! Link copied to your clipboard! You can now share it with your friends!";
export const titleShareFlower = "My flower is ";
export const titleShareAdvice = " and I got this advice: ";
export const titleShareQuestion = " What flower are you? ";
export const domain = "https://www.pmsandme.com/";
export const urlPageImg =
  "https://storage.googleapis.com/communitiesplatform-pictures/pms_and_me_pics/graph_with_flowers.png";
export const urlImg300x200 =
  "https://storage.googleapis.com/communitiesplatform-pictures/pms_and_me_pics/graph_with_flowers_300_200.png";

export type Question = {
  question: string;
  answers: string[];
};

export interface SurveyFormData {
  email: string;
  response: string | null;
  otherResponse?: string;
}

export const survey: Question = {
  question: "What do you want to solve as first?",
  answers: ["Not missing deals", "Hiring", "Onboarding", "Other"],
};
