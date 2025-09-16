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

const ideatonRules = [
  "Each team must have 2–4 members only.",
  "Teams must submit an abstract (max 250–300 words) within the deadline.",
  "Abstracts/ideas must be original and not copied from existing projects.",
  "Any form of plagiarism or previously published work will result in disqualification.",
  "Use of AI/automatic content generators for idea submission is not allowed.",
  "Each team will get 7–8 minutes for presentation followed by 2–3 minutes Q&A.",
  "Presentations must be made in English (unless permitted otherwise by the coordinators).",
  "Teams should ensure their laptops/pen drives are virus-free and files are compatible (PPT/PDF).",
  "Internet usage during the event is allowed only if specified by coordinators.",
  "Teams must maintain discipline and professionalism throughout the event.",
  "Evaluation will be based on: Innovation & Creativity, Feasibility & Practicality, Technical Implementation, Presentation & Communication.",
  "If a team or any team member is unable to attend the venue for a valid reason (for example, for out-of-state students), they may still participate by emailing their team details and abstract to pixels@saec.ac.in. Shortlisted teams will be notified by email and may be given the opportunity to present their idea online.",
];

const ideathonTerms = [
  "Shortlisted teams must report before 9:00 AM at the registration desk on event day.",
  "Teams must carry their presentation materials (PPT/Prototype) in a pen drive or upload in advance as instructed.",
  "Participants should be dressed in a formal/professional manner during presentations.",
  "The organizing committee reserves the right to modify rules or schedules if necessary.",
];

const technicalQuizRules = [
  "Each team must have exactly 2 members.",
  "Use of AI or other gadgets is prohibited.",
  "Participants must bring their mobile phone with good internet connectivity.",
];

const technicalQuizTerms = [
  "Participants should confirm their participation on the event day before 9 am at the registration desk.",
  "Participants should be dressed in a decent/Professional manner.",
  "Kindly check our website for the latest changes in the event.",
];

const shipwreckRules = [
  "This can be an individual or dual participation event.",
  "Each participant/team will be given a character (celebrity, historical figure, fictional role, etc.).",
  "You must defend your survival as that character and convince why you deserve the spot on the lifeboat.",
  "Preparation time will be given before you present your role.",
  "Time limit: 2–3 minutes per participant.",
  "Language: English/Tamil (depending on comfort, but be clear & convincing).",
  "Humor, creativity, and confidence are highly encouraged.",
  "In case of a tie/uncertainty, the audience’s vote will decide the winner.",
  "Vulgar or offensive content will lead to disqualification.",
  "No Registration Fee – participation is completely free.",
  "Participants should confirm their participation on the event day before 9 am at the registration desk.",
  "Participants should be dressed in a decent/Professional manner.",
  "Kindly check our website for the latest changes in the event.",
];

const memeCreationRules = [
  "Open to students from all engineering colleges.",
  "Be original, creative & engaging.",
  "Tamil / English allowed.",
  "No vulgar/offensive content.",
  "Kindly check our website for the latest changes in the event.",
];

const memeCreationTerms = [
  "Teams must report before 9:00 AM at the registration desk on event day.",
  "The organizing committee reserves the right to modify rules or schedules if necessary.",
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
    duration: "9:00 AM - 3:00 PM",
    teamSize: "2-4 members",
    rules: [...commonRules, ...ideatonRules],
    terms: [...commonTerms, ...ideathonTerms],
    timeline: [
      {
        phase: "Event",
        description: "-",
        duration: "3 hours",
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
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf423XVfNwoVnasvt4e5oI7q00jwevn-wXUmKz4YnXm5hUyPg/viewform?usp=dialog",
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
    duration: "9:00 AM - 3:00 PM",
    teamSize: "2 members",
    rules: commonRules,
    terms: commonTerms,
    timeline: [
      {
        phase: "Event",
        description: "-",
        duration: "3 hours",
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
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdzj25ELS0xx5qGcOAcLyKx_8Ibtc-sFUMuKjaf-fPshY_udA/viewform",
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
    duration: "9:00 AM - 3:00 PM",
    teamSize: "2 members",
    rules: [...commonRules, ...technicalQuizRules],
    terms: [...commonTerms, ...technicalQuizTerms],
    timeline: [
      {
        phase: "Event",
        description: "-",
        duration: "3 hours",
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
    registrationLink: "https://forms.gle/sfmRFrLP8Gepdtoe7",
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
    duration: "9:00 AM - 3:00 PM",
    teamSize: "2 members",
    rules: [...commonRules, ...shipwreckRules],
    terms: commonTerms,
    timeline: [
      {
        phase: "Event",
        description: "-",
        duration: "3 hours",
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
    duration: "9:00 AM - 3:00 PM",
    teamSize: "2 members",
    rules: [...commonRules, ...memeCreationRules],
    terms: [...commonTerms, ...memeCreationTerms],
    timeline: [
      {
        phase: "Event",
        description: "-",
        duration: "3 hours",
      },
    ],
    coordinators: [
      { name: "Ganapathi N", year: "3rd Year CSE", phone: "+91 70102 47177" },
    ],
    registrationLink: "https://forms.gle/pC3Mmxge8vBccfZi7",
  },
];
