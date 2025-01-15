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
    title: "General Experience with the Menstrual Cycle",
    questions: [
      {
        question:
          "How would you describe the impact of your menstrual cycle on your overall mood and mental state?",
        id: "1_1",
        answers: [
          {
            answer: "I don't notice any changes in mood or mental state.",
            points: 1
          },
          {
            answer:
              "I notice slight changes, but they don't affect my daily life.",
            points: 2
          },
          {
            answer:
              "I experience noticeable mood changes that sometimes affect my daily life.",
            points: 3
          },
          {
            answer:
              "My mood changes are severe and significantly disrupt my daily life.",
            points: 4
          }
        ]
      },
      {
        question:
          "Do you track changes in your mood or mental state during your cycle?",
        id: "1_2",
        answers: [
          {
            answer: "No, I don't notice any changes to track.",
            points: 1
          },
          {
            answer: "Occasionally, but I don't see strong patterns.",
            points: 2
          },
          {
            answer: "Yes, I've noticed patterns that vary during the cycle.",
            points: 3
          },
          {
            answer: "Yes, and the changes are consistent and impactful.",
            points: 4
          }
        ]
      }
    ]
  },
  {
    title: "Emotional Symptoms",
    questions: [
      {
        question:
          "How often do you experience mood swings (e.g., irritability, sadness, or anxiety) during your menstrual cycle?",
        id: "2_1",
        answers: [
          {
            answer: "Rarely or never.",
            points: 1
          },
          {
            answer: "Occasionally, but they are mild and manageable.",
            points: 2
          },
          {
            answer: "Frequently, and they are noticeable.",
            points: 3
          },
          {
            answer: "Very frequently, and they are severe and hard to manage.",
            points: 4
          }
        ]
      },
      {
        question:
          "Do you experience feelings of anxiety, tension, or nervousness before or during your period?",
        id: "2_2",
        answers: [
          {
            answer: "Never.",
            points: 1
          },
          {
            answer: "Occasionally, but mildly.",
            points: 2
          },
          {
            answer: "Often, with noticeable intensity.",
            points: 3
          },
          {
            answer:
              "Very often, with significant impact on my mental well-being.",
            points: 4
          }
        ]
      },
      {
        question:
          "Have you ever experienced depressive symptoms (e.g., sadness, hopelessness, or lack of energy) that correlate with your cycle?",
        id: "2_3",
        answers: [
          {
            answer: "Never.",
            points: 1
          },
          {
            answer: "Occasionally, but they don't interfere with my life.",
            points: 2
          },
          {
            answer: "Often, and they sometimes interfere with my life.",
            points: 3
          },
          {
            answer: "Very often, and they severely interfere with my life.",
            points: 4
          }
        ]
      }
    ]
  },
  {
    title: "Physical Symptoms",
    questions: [
      {
        question:
          "How often do you experience physical symptoms (e.g., cramps, bloating, fatigue) during your menstrual cycle?",
        id: "3_1",
        answers: [
          {
            answer: "Rarely or never.",
            points: 1
          },
          {
            answer: "Occasionally, but they are mild.",
            points: 2
          },
          {
            answer: "Often, and they are noticeable.",
            points: 3
          },
          {
            answer:
              "Very often, and they significantly disrupt my daily activities.",
            points: 4
          }
        ]
      },
      {
        question:
          "Do you experience significant cravings for specific foods (e.g., sweets, salty snacks) during your cycle?",
        id: "3_2",
        answers: [
          {
            answer: "Never.",
            points: 1
          },
          {
            answer: "Occasionally, but they're not strong.",
            points: 2
          },
          {
            answer: "Often, and they are noticeable.",
            points: 3
          },
          {
            answer: "Very often, and they strongly affect my eating habits.",
            points: 4
          }
        ]
      }
    ]
  },
  {
    title: "Impact on Daily Life",
    questions: [
      {
        question:
          "How would you describe the impact of your menstrual cycle on your daily routines (work, school, or social life)?",
        id: "4_1",
        answers: [
          {
            answer: "No impact at all.",
            points: 1
          },
          {
            answer: "Slight impact, but I can manage it easily.",
            points: 2
          },
          {
            answer: "Moderate impact that sometimes requires adjustments.",
            points: 3
          },
          {
            answer: "Severe impact that often disrupts my daily life.",
            points: 4
          }
        ]
      },
      {
        question:
          "Do you ever feel the need to take time off or limit activities because of emotional or physical symptoms related to your menstrual cycle?",
        id: "4_2",
        answers: [
          {
            answer: "Never.",
            points: 1
          },
          {
            answer: "Occasionally, but rarely.",
            points: 2
          },
          {
            answer: "Often, but only for a short period.",
            points: 3
          },
          {
            answer:
              "Very often, and it significantly affects my ability to function.",
            points: 4
          }
        ]
      }
    ]
  },
  {
    title: "Perception of Hormonal Sensitivity",
    questions: [
      {
        question:
          "How sensitive do you feel your body and mind are to hormonal changes during your cycle?",
        id: "5_1",
        answers: [
          {
            answer: "Not at all sensitive.",
            points: 1
          },
          {
            answer: "Slightly sensitive.",
            points: 2
          },
          {
            answer: "Moderately sensitive.",
            points: 3
          },
          {
            answer: "Extremely sensitive.",
            points: 4
          }
        ]
      }
    ]
  },
  {
    title: "Emotional and Behavioral Changes",
    questions: [
      {
        question:
          "Do you find yourself feeling more emotional (e.g., crying easily or feeling overwhelmed) during certain parts of your menstrual cycle?",
        id: "6_1",
        answers: [
          {
            answer: "Never.",
            points: 1
          },
          {
            answer: "Rarely, and it's manageable.",
            points: 2
          },
          {
            answer: "Sometimes, and it's noticeable.",
            points: 3
          },
          {
            answer: "Often, and it's difficult to manage.",
            points: 4
          }
        ]
      },
      {
        question:
          "Do you experience heightened conflict in your relationships during certain phases of your cycle (e.g., feeling more irritable or reactive)?",
        id: "6_2",
        answers: [
          {
            answer: "Never.",
            points: 1
          },
          {
            answer: "Rarely, and it's mild.",
            points: 2
          },
          {
            answer: "Sometimes, and it causes occasional tension.",
            points: 3
          },
          {
            answer: "Often, and it leads to significant challenges.",
            points: 4
          }
        ]
      },
      {
        question:
          "Do you notice a change in your confidence, motivation, or productivity at different stages of your cycle?",
        id: "6_3",
        answers: [
          {
            answer: "No, I feel the same throughout the month.",
            points: 1
          },
          {
            answer: "Occasionally, but it doesn't significantly affect me.",
            points: 2
          },
          {
            answer: "Often, and it affects my energy and focus.",
            points: 3
          },
          {
            answer:
              "Very often, and it significantly disrupts my work or goals.",
            points: 4
          }
        ]
      },
      {
        question:
          "Do you find it harder to concentrate or make decisions during specific parts of your menstrual cycle?",
        id: "6_4",
        answers: [
          {
            answer: "No, my concentration is consistent.",
            points: 1
          },
          {
            answer: "Occasionally, but it's manageable.",
            points: 2
          },
          {
            answer: "Often, and it noticeably impacts my work or studies.",
            points: 3
          },
          {
            answer:
              "Very often, and it severely disrupts my ability to think clearly.",
            points: 4
          }
        ]
      }
    ]
  },
  {
    title: "Coping Mechanisms and Self-Care",
    questions: [
      {
        question:
          "How often do you rely on specific coping mechanisms (e.g., rest, exercise, medications, or supplements) to manage menstrual-related symptoms?",
        id: "7_1",
        answers: [
          {
            answer: "Never—I don't need any.",
            points: 1
          },
          {
            answer: "Rarely, and only for mild discomfort.",
            points: 2
          },
          {
            answer: "Often, and they help manage noticeable symptoms.",
            points: 3
          },
          {
            answer: "Very often, and they're necessary for me to function.",
            points: 4
          }
        ]
      },
      {
        question:
          "Do you feel like you can control or predict how your mental and physical state will change during your cycle?",
        id: "7_2",
        answers: [
          {
            answer: "Yes, I feel completely in control.",
            points: 1
          },
          {
            answer: "Yes, but I only experience mild changes.",
            points: 2
          },
          {
            answer:
              "Somewhat—it's predictable but can still be difficult to manage.",
            points: 3
          },
          {
            answer:
              "No, I feel out of control and unable to predict how I'll feel.",
            points: 4
          }
        ]
      },
      {
        question:
          "How often do you plan your activities, work, or social life around your menstrual cycle?",
        id: "7_3",
        answers: [
          {
            answer: "Never—I don't need to.",
            points: 1
          },
          {
            answer: "Rarely, but I might adjust a little.",
            points: 2
          },
          {
            answer: "Often, as symptoms impact my ability to perform.",
            points: 3
          },
          {
            answer: "Very often, as symptoms heavily dictate what I can do.",
            points: 4
          }
        ]
      }
    ]
  },
  {
    title: "Physical and Energy Levels",
    questions: [
      {
        question:
          "Do you experience changes in your energy levels during your menstrual cycle (e.g., feeling more tired or fatigued)?",
        id: "8_1",
        answers: [
          {
            answer: "Never—I feel consistent energy throughout.",
            points: 1
          },
          {
            answer: "Rarely, and it's mild.",
            points: 2
          },
          {
            answer: "Often, and it's noticeable.",
            points: 3
          },
          {
            answer: "Very often, and it significantly impacts my daily life.",
            points: 4
          }
        ]
      },
      {
        question:
          "Do you experience sleep disturbances (e.g., insomnia, excessive tiredness) at any point in your cycle?",
        id: "8_2",
        answers: [
          {
            answer: "Never—I sleep consistently well.",
            points: 1
          },
          {
            answer: "Rarely, and it doesn't affect me much.",
            points: 2
          },
          {
            answer: "Often, and it affects my ability to rest.",
            points: 3
          },
          {
            answer: "Very often, and it disrupts my sleep significantly.",
            points: 4
          }
        ]
      },
      {
        question:
          "How frequently do you experience physical pain (e.g., headaches, cramps, or muscle tension) that impacts your emotional state?",
        id: "8_3",
        answers: [
          {
            answer: "Never.",
            points: 1
          },
          {
            answer: "Rarely, and it's manageable.",
            points: 2
          },
          {
            answer: "Often, and it affects my mood noticeably.",
            points: 3
          },
          {
            answer:
              "Very often, and it severely impacts my mood and mental state.",
            points: 4
          }
        ]
      }
    ]
  },
  {
    title: "Perception of Symptoms",
    questions: [
      {
        question:
          "How often do you feel that your mental or physical symptoms are misunderstood or dismissed by others (e.g., friends, family, coworkers)?",
        id: "9_1",
        answers: [
          {
            answer:
              "Never—I don't experience symptoms that require explanation.",
            points: 1
          },
          {
            answer: "Rarely—it's not much of an issue for me.",
            points: 2
          },
          {
            answer: "Sometimes, and it can feel frustrating.",
            points: 3
          },
          {
            answer:
              "Often, and it's a significant source of stress or isolation.",
            points: 4
          }
        ]
      },
      {
        question:
          "Do you feel that hormonal changes during your cycle impact your self-image or confidence?",
        id: "9_2",
        answers: [
          {
            answer: "Never—I feel the same throughout my cycle.",
            points: 1
          },
          {
            answer: "Rarely, and it's not noticeable.",
            points: 2
          },
          {
            answer: "Often, and it affects how I see myself.",
            points: 3
          },
          {
            answer: "Very often, and it significantly lowers my confidence.",
            points: 4
          }
        ]
      },
      {
        question:
          "Have you ever sought professional help (e.g., doctor, therapist) to manage symptoms related to your menstrual cycle?",
        id: "9_3",
        answers: [
          {
            answer: "No, I've never needed to.",
            points: 1
          },
          {
            answer: "No, but I've considered it.",
            points: 2
          },
          {
            answer: "Yes, and it's been somewhat helpful.",
            points: 3
          },
          {
            answer: "Yes, and it's been essential for managing my symptoms.",
            points: 4
          }
        ]
      }
    ]
  },
  {
    title: "Long-Term Impact",
    questions: [
      {
        question:
          "Over the past year, how would you rate the consistency of your menstrual-related symptoms?",
        id: "10_1",
        answers: [
          {
            answer: "They've been consistently mild or nonexistent.",
            points: 1
          },
          {
            answer:
              "They've been mostly mild with occasional moderate symptoms.",
            points: 2
          },
          {
            answer:
              "They've been consistently moderate with some severe episodes.",
            points: 3
          },
          {
            answer: "They've been consistently severe and disruptive.",
            points: 4
          }
        ]
      },
      {
        question:
          "Do you feel your symptoms are improving, worsening, or staying the same over time?",
        id: "10_2",
        answers: [
          {
            answer: "I don't experience symptoms.",
            points: 1
          },
          {
            answer: "They've stayed the same or improved slightly.",
            points: 2
          },
          {
            answer: "They've become slightly worse.",
            points: 3
          },
          {
            answer: "They've become significantly worse over time.",
            points: 4
          }
        ]
      }
    ]
  }
];

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
