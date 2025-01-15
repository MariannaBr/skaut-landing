export type SectionData = {
  title: string;
  questions: Question[];
};

export type Question = {
  question: string;
  id: string;
  answers: string[];
};

export interface SurveyFormData {
  name?: string;
  email?: string;
  age?: string;
  responses: Record<string, Record<string, string>>; // Section title -> Question ID -> Answer
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
        id: "general_1",
        answers: [
          "I don't notice any changes in mood or mental state.",
          "I notice slight changes, but they don't affect my daily life.",
          "I experience noticeable mood changes that sometimes affect my daily life.",
          "My mood changes are severe and significantly disrupt my daily life."
        ]
      },
      {
        question:
          "Do you track changes in your mood or mental state during your cycle?",
        id: "general_2",
        answers: [
          "No, I don't notice any changes to track.",
          "Occasionally, but I don't see strong patterns.",
          "Yes, I've noticed patterns that vary during the cycle.",
          "Yes, and the changes are consistent and impactful."
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
        id: "emotional_1",
        answers: [
          "Rarely or never.",
          "Occasionally, but they are mild and manageable.",
          "Frequently, and they are noticeable.",
          "Very frequently, and they are severe and hard to manage."
        ]
      },
      {
        question:
          "Do you experience feelings of anxiety, tension, or nervousness before or during your period?",
        id: "emotional_2",
        answers: [
          "Never.",
          "Occasionally, but mildly.",
          "Often, with noticeable intensity.",
          "Very often, with significant impact on my mental well-being."
        ]
      },
      {
        question:
          "Have you ever experienced depressive symptoms (e.g., sadness, hopelessness, or lack of energy) that correlate with your cycle?",
        id: "emotional_3",
        answers: [
          "Never.",
          "Occasionally, but they don't interfere with my life.",
          "Often, and they sometimes interfere with my life.",
          "Very often, and they severely interfere with my life."
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
        id: "physical_1",
        answers: [
          "Rarely or never.",
          "Occasionally, but they are mild.",
          "Often, and they are noticeable.",
          "Very often, and they significantly disrupt my daily activities."
        ]
      },
      {
        question:
          "Do you experience significant cravings for specific foods (e.g., sweets, salty snacks) during your cycle?",
        id: "physical_2",
        answers: [
          "Never.",
          "Occasionally, but they're not strong.",
          "Often, and they are noticeable.",
          "Very often, and they strongly affect my eating habits."
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
        id: "impact_1",
        answers: [
          "No impact at all.",
          "Slight impact, but I can manage it easily.",
          "Moderate impact that sometimes requires adjustments.",
          "Severe impact that often disrupts my daily life."
        ]
      },
      {
        question:
          "Do you ever feel the need to take time off or limit activities because of emotional or physical symptoms related to your menstrual cycle?",
        id: "impact_2",
        answers: [
          "Never.",
          "Occasionally, but rarely.",
          "Often, but only for a short period.",
          "Very often, and it significantly affects my ability to function."
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
        id: "sensitivity_1",
        answers: [
          "Not at all sensitive.",
          "Slightly sensitive.",
          "Moderately sensitive.",
          "Extremely sensitive."
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
        id: "changes_1",
        answers: [
          "Never.",
          "Rarely, and it's manageable.",
          "Sometimes, and it's noticeable.",
          "Often, and it's difficult to manage."
        ]
      },
      {
        question:
          "Do you experience heightened conflict in your relationships during certain phases of your cycle (e.g., feeling more irritable or reactive)?",
        id: "changes_2",
        answers: [
          "Never.",
          "Rarely, and it's mild.",
          "Sometimes, and it causes occasional tension.",
          "Often, and it leads to significant challenges."
        ]
      },
      {
        question:
          "Do you notice a change in your confidence, motivation, or productivity at different stages of your cycle?",
        id: "changes_3",
        answers: [
          "No, I feel the same throughout the month.",
          "Occasionally, but it doesn't significantly affect me.",
          "Often, and it affects my energy and focus.",
          "Very often, and it significantly disrupts my work or goals."
        ]
      },
      {
        question:
          "Do you find it harder to concentrate or make decisions during specific parts of your menstrual cycle?",
        id: "changes_4",
        answers: [
          "No, my concentration is consistent.",
          "Occasionally, but it's manageable.",
          "Often, and it noticeably impacts my work or studies.",
          "Very often, and it severely disrupts my ability to think clearly."
        ]
      }
    ]
  },
  {
    title: "Section 7: Coping Mechanisms and Self-Care",
    questions: [
      {
        question:
          "How often do you rely on specific coping mechanisms (e.g., rest, exercise, medications, or supplements) to manage menstrual-related symptoms?",
        id: "coping-mechanisms",
        answers: [
          "Never—I don't need any.",
          "Rarely, and only for mild discomfort.",
          "Often, and they help manage noticeable symptoms.",
          "Very often, and they're necessary for me to function."
        ]
      },
      {
        question:
          "Do you feel like you can control or predict how your mental and physical state will change during your cycle?",
        id: "control-predict-state",
        answers: [
          "Yes, I feel completely in control.",
          "Yes, but I only experience mild changes.",
          "Somewhat—it's predictable but can still be difficult to manage.",
          "No, I feel out of control and unable to predict how I'll feel."
        ]
      },
      {
        question:
          "How often do you plan your activities, work, or social life around your menstrual cycle?",
        id: "plan-activities",
        answers: [
          "Never—I don't need to.",
          "Rarely, but I might adjust a little.",
          "Often, as symptoms impact my ability to perform.",
          "Very often, as symptoms heavily dictate what I can do."
        ]
      }
    ]
  },
  {
    title: "Section 8: Physical and Energy Levels",
    questions: [
      {
        question:
          "Do you experience changes in your energy levels during your menstrual cycle (e.g., feeling more tired or fatigued)?",
        id: "energy-levels",
        answers: [
          "Never—I feel consistent energy throughout.",
          "Rarely, and it's mild.",
          "Often, and it's noticeable.",
          "Very often, and it significantly impacts my daily life."
        ]
      },
      {
        question:
          "Do you experience sleep disturbances (e.g., insomnia, excessive tiredness) at any point in your cycle?",
        id: "sleep-disturbances",
        answers: [
          "Never—I sleep consistently well.",
          "Rarely, and it doesn't affect me much.",
          "Often, and it affects my ability to rest.",
          "Very often, and it disrupts my sleep significantly."
        ]
      },
      {
        question:
          "How frequently do you experience physical pain (e.g., headaches, cramps, or muscle tension) that impacts your emotional state?",
        id: "physical-pain",
        answers: [
          "Never.",
          "Rarely, and it's manageable.",
          "Often, and it affects my mood noticeably.",
          "Very often, and it severely impacts my mood and mental state."
        ]
      }
    ]
  },
  {
    title: "Section 9: Perception of Symptoms",
    questions: [
      {
        question:
          "How often do you feel that your mental or physical symptoms are misunderstood or dismissed by others (e.g., friends, family, coworkers)?",
        id: "misunderstood-symptoms",
        answers: [
          "Never—I don't experience symptoms that require explanation.",
          "Rarely—it's not much of an issue for me.",
          "Sometimes, and it can feel frustrating.",
          "Often, and it's a significant source of stress or isolation."
        ]
      },
      {
        question:
          "Do you feel that hormonal changes during your cycle impact your self-image or confidence?",
        id: "self-image-impact",
        answers: [
          "Never—I feel the same throughout my cycle.",
          "Rarely, and it's not noticeable.",
          "Often, and it affects how I see myself.",
          "Very often, and it significantly lowers my confidence."
        ]
      },
      {
        question:
          "Have you ever sought professional help (e.g., doctor, therapist) to manage symptoms related to your menstrual cycle?",
        id: "professional-help",
        answers: [
          "No, I've never needed to.",
          "No, but I've considered it.",
          "Yes, and it's been somewhat helpful.",
          "Yes, and it's been essential for managing my symptoms."
        ]
      }
    ]
  },
  {
    title: "Section 10: Long-Term Impact",
    questions: [
      {
        question:
          "Over the past year, how would you rate the consistency of your menstrual-related symptoms?",
        id: "symptom-consistency",
        answers: [
          "They've been consistently mild or nonexistent.",
          "They've been mostly mild with occasional moderate symptoms.",
          "They've been consistently moderate with some severe episodes.",
          "They've been consistently severe and disruptive."
        ]
      },
      {
        question:
          "Do you feel your symptoms are improving, worsening, or staying the same over time?",
        id: "symptom-trend",
        answers: [
          "I don't experience symptoms.",
          "They've stayed the same or improved slightly.",
          "They've become slightly worse.",
          "They've become significantly worse over time."
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
