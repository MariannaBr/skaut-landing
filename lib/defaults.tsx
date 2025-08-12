export const title = "Everything you need to deploy your app";
export const metaDescription =
  "Move faster. Spend less. Achieve more. Our clients reclaim 5–10+ hours per week, see faster response times, and reduce operational costs by up to 30%. Automation lets you scale your impact without adding headcount—so your startup grows stronger, not busier.";
export const titlePage = "PMS & ME";
export const titleMarianna = " I automate so you can innovate";
export const roleMarianna = "CEO & Founder";
export const paragraphMarianna =
  "Marianna is a founder of Skaut.ai and I'm here to help you with automation.";
export const nameMarianna = "Marianna Brezinova";
export const titleFounder = "Founder ROI";
export const paragraphFounder =
  "Move faster. Spend less. Achieve more. Our clients reclaim 5–10+ hours per week, see faster response times, and reduce operational costs by up to 30%. Automation lets you scale your impact without adding headcount—so your startup grows stronger, not busier.";
export const titleWhy = "Why automation matters?";
export const paragraphWhy =
  "For Startups speed is everything—yet hiring floods, lead follow-ups, and nonstop meetings can choke growth. Thoughtful automation stitches these workflows together, giving you back critical hours and ensuring no candidate, customer, or deal falls through the cracks.";
export const formTitle = "What’s slowing you down right now?";
export const titleName = "Name";
export const titleEmail = "Email Address";
export const titleCancel = "Cancel";
export const titleSubmit = "Submit";
export const titleResult = "You Are";
export const titleClose = "Close";
export const titleShare = "Share";
export const domain = "https://www.pmsandme.com/";
export const urlPageImg =
  "https://storage.googleapis.com/communitiesplatform-pictures/pms_and_me_pics/graph_with_flowers.png";
export const urlImg300x200 =
  "https://storage.googleapis.com/communitiesplatform-pictures/pms_and_me_pics/graph_with_flowers_300_200.png";
export const linkedInMarianna =
  "https://www.linkedin.com/in/marianna-brezinova/";

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
  question: "What’s slowing you down right now?",
  answers: [
    "Hiring & onboarding overload",
    "Lost leads, slow follow-ups",
    "Inbox clutter & calendar chaos",
    "Other",
  ],
};
