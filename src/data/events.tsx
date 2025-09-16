import {
  Brain,
  Bug,
  HelpCircle,
  Anchor,
  Image as ImageIcon,
} from "lucide-react";

export interface Event {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  icon: React.ReactElement;
  tagline: string;
  duration: string;
  teamSize: string;
  rules: string[];
  terms: string[];
  timeline: {
    phase: string;
    description: string;
    duration?: string;
  }[];
  prizes?: {
    position: string;
    reward: string;
  }[];
  coordinators: {
    name: string;
    year: string;
    phone: string;
    email?: string;
  }[];
  registrationLink: string;
}

const commonRules = [
  "Participants must carry valid college ID cards.",
  "Teams must submit their answers within the time limit.",
  "Judges’ and coordinators’ decisions are final.",
  "Teams found cheating or misbehaving will be disqualified.",
];

const commonTerms = [
  "Each participant can register in only one team.",
  "Teams once registered cannot be changed.",
  "Coordinators may adjust the number of questions depending on time.",
];

export const events: Event[] = [
  {
    id: "ideathon",
    name: "Ideathon",
    shortDescription:
      "Brainstorm and pitch groundbreaking technical solutions.",
    description:
      "Ideathon is a technical event where participants brainstorm innovative solutions to real-world challenges. Teams must showcase creativity, practicality, and technical feasibility in their ideas.",
    category: "Technical Event",
    icon: <Brain className="w-6 h-6 text-indigo-600" />,
    tagline: "Think. Create. Innovate.",
    duration: "3 hours",
    teamSize: "2 members",
    rules: commonRules,
    terms: commonTerms,
    timeline: [
      {
        phase: "Idea Submission",
        description: "Teams submit their innovative ideas.",
        duration: "30 minutes",
      },
      {
        phase: "Pitch Presentation",
        description: "Teams present their ideas to judges.",
        duration: "1.5 hours",
      },
    ],
    coordinators: [
      {
        name: "Mohammed Ayman",
        year: "2nd Year CSE",
        phone: "+91 63745 16051",
      },
      {
        name: "Devaksh Shankar",
        year: "3rd Year CSE",
        phone: "+91 89256 44553",
      },
    ],
    registrationLink: "https://forms.google.com/ideathon-registration",
  },
  {
    id: "code-debugging",
    name: "Code Debugging",
    shortDescription: "Spot and fix bugs in tricky code snippets.",
    description:
      "Code Debugging challenges participants to identify and resolve logical and syntax errors in code. Speed and accuracy are the keys to success.",
    category: "Technical Event",
    icon: <Bug className="w-6 h-6 text-red-600" />,
    tagline: "Debug. Fix. Win.",
    duration: "3 hours",
    teamSize: "2 members",
    rules: commonRules,
    terms: commonTerms,
    timeline: [
      {
        phase: "Round 1",
        description: "Basic debugging tasks.",
        duration: "30 minutes",
      },
      {
        phase: "Round 2",
        description: "Advanced debugging challenges.",
        duration: "1 hour",
      },
    ],
    coordinators: [
      {
        name: "Thoufiq Afridi A",
        year: "2nd Year CSE",
        phone: "+91 91544 07059",
      },
      {
        name: "Poornima S",
        year: "3rd Year CSE",
        phone: "+91 63828 88577",
      },
      {
        name: "Kirthika R",
        year: "4th Year CSE",
        phone: "+91 93421 75183",
      },
    ],
    registrationLink: "https://forms.google.com/code-debugging-registration",
  },
  {
    id: "technical-quiz",
    name: "Technical Quiz",
    shortDescription: "Test your knowledge of core technical concepts.",
    description:
      "A fun and competitive technical quiz covering programming, algorithms, computer science fundamentals, and latest tech trends.",
    category: "Technical Event",
    icon: <HelpCircle className="w-6 h-6 text-blue-600" />,
    tagline: "Quiz. Compete. Excel.",
    duration: "3 hours",
    teamSize: "2 members",
    rules: commonRules,
    terms: commonTerms,
    timeline: [
      {
        phase: "Preliminary Round",
        description: "Objective-type technical questions.",
        duration: "30 minutes",
      },
      {
        phase: "Final Round",
        description: "Interactive quiz with buzzer questions.",
        duration: "30 minutes",
      },
    ],
    coordinators: [
      {
        name: "Siddhesh Prakash",
        year: "2nd Year CSE",
        phone: "+91 98402 09413",
      },
      {
        name: "Malavikha",
        year: "3rd Year CSE",
        phone: "+91 94441 55412",
      },
      {
        name: "Anushka",
        year: "4th Year CSE",
        phone: "+91 63792 69759",
      },
    ],
    registrationLink: "https://forms.google.com/technical-quiz-registration",
  },
  {
    id: "shipwreck",
    name: "Shipwreck",
    shortDescription: "Roleplay as characters and debate to survive the wreck.",
    description:
      "Shipwreck is a non-technical debate-style event where participants roleplay characters on a sinking ship. Only the most convincing arguments will secure survival.",
    category: "Non-Technical Event",
    icon: <Anchor className="w-6 h-6 text-teal-600" />,
    tagline: "Convince. Survive. Win.",
    duration: "3 hours",
    teamSize: "2 members",
    rules: commonRules,
    terms: commonTerms,
    timeline: [
      {
        phase: "Character Assignment",
        description: "Roles assigned to participants.",
        duration: "30 minutes",
      },
      {
        phase: "Debate",
        description: "Convince the judges why you deserve to survive.",
        duration: "1.5 hours",
      },
    ],
    coordinators: [
      { name: "Jayanthan S", year: "2nd Year CSE", phone: "+91 80726 86423" },
      {
        name: "Swetha Shree S",
        year: "4th Year CSE",
        phone: "+91 63801 41402",
      },
    ],
    registrationLink: "https://forms.google.com/shipwreck-registration",
  },
  {
    id: "meme-creation",
    name: "Meme Creation",
    shortDescription: "Create funny and creative memes on given themes.",
    description:
      "Meme Creation is a light-hearted non-technical event where participants craft witty and humorous memes based on given topics.",
    category: "Non-Technical Event",
    icon: <ImageIcon className="w-6 h-6 text-pink-600" />,
    tagline: "Laugh. Create. Share.",
    duration: "3 hours",
    teamSize: "2 members",
    rules: commonRules,
    terms: commonTerms,
    timeline: [
      {
        phase: "Theme Release",
        description: "Participants receive meme topics.",
        duration: "15 minutes",
      },
      {
        phase: "Meme Creation",
        description: "Teams design and submit their memes.",
        duration: "45 minutes",
      },
    ],
    coordinators: [
      { name: "Ganapathi N", year: "3rd Year CSE", phone: "+91 70102 47177" },
    ],
    registrationLink: "https://forms.google.com/meme-creation-registration",
  },
];
