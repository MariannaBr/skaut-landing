export const title = "How Do You Handle PMS?";
export const titlePage = "PMS & ME";
export const paragraph =
  "You experience the changes  of the menstrual cycle in your own unique way. There are four distinct types, each symbolized by a beautiful flower. Which one resonates with you?";
export const buttonText = "Let's Find Out";
export const formTitle = "Discover Your Flower and Get Advice.";
export const formTitleTime = "It Takes Less Than 2 Minutes.";
export const titlePersonal = "Little Bit About You";
export const titleName = "Name";
export const titleEmail = "Email Address";
export const titleAge = "Age";
export const titleCancel = "Cancel";
export const titleSubmit = "Submit";
export const titleResult = "You Are";
export const titleClose = "Close";
export const titleShareLink =
  "Help your friend to discover her flower! Share your result with your bestfriend!";
export const titleSharedLink =
  "Great! Link copied to your clipboard! You can now share it with your bestfriend!";
export const titleShareFlower = "I'm ";
export const titleShareAdvice = " and I got this advice: ";
export const titleShareQuestion = " What flower are you? ";
export const domain = "https://www.pmsandme.com/";
export const urlPageImg =
  "https://storage.googleapis.com/communitiesplatform-pictures/pms_and_me_pics/graph_with_flowers.png";
export const urlImg300x200 =
  "https://storage.googleapis.com/communitiesplatform-pictures/pms_and_me_pics/graph_with_flowers_300_200.png";

export type SectionData = {
  title: string;
  questions: Question[];
};

export type Question = {
  question: string;
  id: string;
  answers: Answer[];
};

export type Answer = {
  answer: string;
  points: number;
};

export interface SurveyFormData {
  name?: string;
  email?: string;
  age?: string;
  responses: Record<string, Record<string, { answer: string; points: number }>>;
}

export interface FormComponentProps {
  survey: SectionData[];
}

export const survey: SectionData[] = [
  {
    title: "How is Your Mood?",
    questions: [
      {
        question: "How does your cycle affect your mood?",
        id: "1_1",
        answers: [
          {
            answer: "No changes.",
            points: 1
          },
          {
            answer: "Small changes.",
            points: 2
          },
          {
            answer: "Noticeable changes.",
            points: 3
          },
          {
            answer: "Big changes.",
            points: 4
          }
        ]
      },
      {
        question: "Do you feel anxious, sad or low energy around your period?",
        id: "1_2",
        answers: [
          { answer: "Never.", points: 1 },
          { answer: "Sometimes, but it's mild.", points: 2 },
          { answer: "Often, and it's noticeable.", points: 3 },
          { answer: "Very often, and it's intense.", points: 4 }
        ]
      },
      {
        question: "Does your confidence or motivation change?",
        id: "1_3",
        answers: [
          { answer: "No, I feel steady all month.", points: 1 },
          { answer: "Occasionally, but it's not a big deal.", points: 2 },
          { answer: "Often, and it affects my energy.", points: 3 },
          { answer: "Very often, and it disrupts my goals.", points: 4 }
        ]
      }
    ]
  },
  {
    title: "How Does Your Body Feel?",
    questions: [
      {
        question: "How often do you get cramps, bloating, or feel tired?",
        id: "2_1",
        answers: [
          { answer: "Rarely or never.", points: 1 },
          { answer: "Sometimes, but it's mild.", points: 2 },
          { answer: "Often, and it's noticeable.", points: 3 },
          { answer: "Very often, and it disrupts my day.", points: 4 }
        ]
      },
      {
        question: "Do you get strong cravings during your cycle?",
        id: "2_2",
        answers: [
          { answer: "Never.", points: 1 },
          { answer: "Sometimes.", points: 2 },
          { answer: "Often.", points: 3 },
          { answer: "Very often.", points: 4 }
        ]
      }
    ]
  },
  {
    title: "How is Your Sleep?",
    questions: [
      {
        question:
          "Do you have trouble falling asleep or you feel overly tired?",
        id: "3_1",
        answers: [
          { answer: "No -I sleep well all the time.", points: 1 },
          { answer: "Rarely, and it's not a big issue.", points: 2 },
          { answer: "Yes, and it disrupts my rest.", points: 3 },
          { answer: "Very often - it really affects how I sleep.", points: 4 }
        ]
      }
    ]
  },
  {
    title: "How is Your Day Affected?",
    questions: [
      {
        question: "Does your cycle affect your work, school, or social life?",
        id: "4_1",
        answers: [
          { answer: "Not at all.", points: 1 },
          { answer: "A little, but I handle it easily.", points: 2 },
          { answer: "Sometimes, I need to adjust.", points: 3 },
          { answer: "Often, it disrupts my day.", points: 4 }
        ]
      }
    ]
  },
  {
    title: "How Do You Care for Yourself?",
    questions: [
      {
        question:
          "Do you use rest, exercise, or medication to handle your symptoms?",
        id: "5_1",
        answers: [
          { answer: "Never - I don't need to.", points: 1 },
          { answer: "Rarely, just for mild discomfort.", points: 2 },
          { answer: "Often, and they help a lot.", points: 3 },
          { answer: "Very often - I can't function without them.", points: 4 }
        ]
      },
      {
        question: "Have you ever sought professional help?",
        id: "5_2",
        answers: [
          { answer: "No, I've never needed it.", points: 1 },
          { answer: "No, but I've thought about it.", points: 2 },
          { answer: "Yes, and it helped a bit.", points: 3 },
          { answer: "Yes, and it's been essential.", points: 4 }
        ]
      }
    ]
  },
  {
    title: "How is Your Relationship Affected?",
    questions: [
      {
        question:
          "Do you notice more conflicts or irritability around your period?",
        id: "6_1",
        answers: [
          { answer: "Never.", points: 1 },
          { answer: "Rarely, and it's mild.", points: 2 },
          { answer: "Sometimes, and it causes tension.", points: 3 },
          { answer: "Often, and it leads to challenges.", points: 4 }
        ]
      },
      {
        question:
          "Should your partner be informed about your hormonal changes?",
        id: "6_2",
        answers: [
          { answer: "No, I prefer to handle it myself.", points: 1 },
          {
            answer: "Yes, but only when necessary.",
            points: 2
          },
          {
            answer: "Yes, it's important for them to understand.",
            points: 3
          },
          {
            answer: "Yes, it improves our relationship.",
            points: 4
          }
        ]
      },
      {
        question: "Would you like more support from your partner?",
        id: "6_3",
        answers: [
          { answer: "No, I can manage on my own.", points: 1 },
          { answer: "Occasionally, but not often.", points: 2 },
          { answer: "Yes, I would appreciate more support.", points: 3 },
          {
            answer: "Yes, I need consistent support to feel better.",
            points: 4
          }
        ]
      },
      {
        question: "How would you prefer your partner to support you?",
        id: "6_4",
        answers: [
          {
            answer: "No support needed.",
            points: 1
          },
          {
            answer: "Emotional support - listening and comforting me.",
            points: 2
          },
          {
            answer: "Physical support - helping with tasks.",
            points: 3
          },
          {
            answer: "Both emotional and physical support.",
            points: 4
          }
        ]
      }
    ]
  }
];

export const pointCategories = () => {
  let numQuestions = 0;

  survey.forEach((section) => {
    numQuestions += section.questions.length;
  });

  const minPoints = numQuestions;
  const maxPoints = numQuestions * 4;
  const range = Math.ceil((maxPoints - minPoints) / 4);

  const rangeA = minPoints + range / 2;
  const rangeB = rangeA + range;
  const rangeC = maxPoints - range;

  return { A: rangeA, B: rangeB, C: rangeC };
};

export type Flower = {
  flower: string;
  image: string;
  description: string;
  advice: string;
};

export type FlowerType = {
  type: string;
  data: Flower;
};

export const flowerTypes: FlowerType[] = [
  {
    type: "A",
    data: {
      flower: "Sunflower",
      image: "/sunflower.png",
      description:
        "The sunflower symbolizes consistency, strength, and positivity. Just as the sunflower remains steady, always turning toward the sun, you exhibit resilience and stability regardless of hormonal fluctuations.",
      advice:
        "Keep embracing your stability and use your strength to inspire those around you."
    }
  },
  {
    type: "B",
    data: {
      flower: "Cherry Blossom",
      image: "/cherry.png",
      description:
        "Cherry blossoms represent grace, subtle beauty, and fleeting change. You experience mild, manageable shifts during your cycle, much like the delicate and temporary bloom of the cherry blossom.",
      advice:
        "Focus on mindfulness practices to enhance your ability to adapt gracefully to changes."
    }
  },
  {
    type: "C",
    data: {
      flower: "Lavender",
      image: "/lavender.png",
      description:
        "Lavender symbolizes calmness and balance, often associated with managing stress or noticeable shifts. You may experience stronger changes, but your predictability allows you to maintain balance and harmony over time.",
      advice:
        "Prioritize self-care routines that enhance your sense of calm and balance."
    }
  },
  {
    type: "D",
    data: {
      flower: "Poppy",
      image: "/poppy.png",
      description:
        "Poppies represent remembrance, resilience, and rest. They symbolize the need for recovery and peace after enduring intense struggles, which aligns with your experience.",
      advice:
        "Take time to rest and recharge, ensuring you honor your need for recovery during challenging times."
    }
  }
];
