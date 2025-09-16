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
  "Each team must have exactly 2 members.",
  "Participants must carry valid college ID cards.",
  "Use of mobile phones, laptops, or other gadgets is prohibited.",
  "Once a colour is picked in Round 1, it cannot be changed.",
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
    duration: "2 hours",
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
      { name: "Coordinator A", year: "3rd Year CSE", phone: "+91 90000 00001" },
      { name: "Coordinator B", year: "4th Year CSE", phone: "+91 90000 00002" },
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
    duration: "1.5 hours",
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
      { name: "Coordinator C", year: "3rd Year CSE", phone: "+91 90000 00003" },
      { name: "Coordinator D", year: "4th Year CSE", phone: "+91 90000 00004" },
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
    duration: "1 hour",
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
      { name: "Coordinator E", year: "2nd Year CSE", phone: "+91 90000 00005" },
      { name: "Coordinator F", year: "3rd Year CSE", phone: "+91 90000 00006" },
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
    duration: "2 hours",
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
      { name: "Coordinator G", year: "2nd Year CSE", phone: "+91 90000 00007" },
      { name: "Coordinator H", year: "3rd Year CSE", phone: "+91 90000 00008" },
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
    duration: "1 hour",
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
      { name: "Coordinator I", year: "2nd Year CSE", phone: "+91 90000 00009" },
      { name: "Coordinator J", year: "3rd Year CSE", phone: "+91 90000 00010" },
    ],
    registrationLink: "https://forms.google.com/meme-creation-registration",
  },
];
