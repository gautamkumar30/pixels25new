import { Code, Gamepad2, Lightbulb, Monitor, Zap } from "lucide-react";

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

export const events: Event[] = [
  {
    id: "codequest",
    name: "CodeQuest",
    shortDescription:
      "Ultimate competitive programming challenge with algorithmic problem solving.",
    description:
      "CodeQuest is our flagship competitive programming event that challenges participants with complex algorithmic problems. Test your coding skills, optimize your solutions, and compete against the best programmers from across institutions. This event is designed to push your problem-solving abilities to the limit with real-world programming challenges.",
    category: "Competitive Programming",
    icon: <Code className="w-6 h-6 text-blue-600" />,
    tagline: "Code. Compete. Conquer.",
    duration: "3 hours",
    teamSize: "Individual",
    rules: [
      "Participants must bring their own laptops with necessary software installed",
      "Internet access will be restricted during the contest",
      "Only standard libraries and IDEs are allowed",
      "Code must be written during the event duration",
      "Plagiarism will result in immediate disqualification",
      "Questions will be in C++, Java, or Python",
      "Debugging tools are permitted",
      "External help or collaboration is strictly prohibited",
    ],
    terms: [
      "Registration is mandatory before the deadline",
      "Entry fee of ₹150 per participant",
      "Decision of judges will be final",
      "Participants must carry a valid student ID",
      "Event organizers reserve the right to modify rules",
      "Participants must follow the code of conduct",
      "Late entries will not be accepted",
      "Refunds will only be provided if the event is cancelled",
    ],
    timeline: [
      {
        phase: "Registration & Setup",
        description:
          "Participants register and set up their development environment",
        duration: "30 minutes",
      },
      {
        phase: "Qualifier Round",
        description: "Initial screening with basic algorithmic problems",
        duration: "1 hour",
      },
      {
        phase: "Main Contest",
        description: "Advanced problem solving with complex algorithms",
        duration: "2 hours",
      },
      {
        phase: "Evaluation & Results",
        description: "Code review and final rankings announcement",
        duration: "30 minutes",
      },
    ],
    prizes: [
      { position: "1st Place", reward: "₹15,000 + Certificate" },
      { position: "2nd Place", reward: "₹10,000 + Certificate" },
      { position: "3rd Place", reward: "₹5,000 + Certificate" },
    ],
    coordinators: [
      {
        name: "Aditya Singh",
        year: "4th Year CSE",
        phone: "+91 98765 43213",
        email: "aditya.singh@college.edu",
      },
      {
        name: "Sneha Reddy",
        year: "3rd Year CSE",
        phone: "+91 98765 43214",
        email: "sneha.reddy@college.edu",
      },
    ],
    registrationLink: "https://forms.google.com/codequest-registration",
  },
  {
    id: "hackathon",
    name: "InnoHack 25",
    shortDescription:
      "24-hour hackathon to build innovative solutions for real-world problems.",
    description:
      "InnoHack 25 is an intensive 24-hour hackathon where teams collaborate to create innovative solutions for pressing real-world problems. Participants will have access to mentors, APIs, and resources to build functional prototypes. This event emphasizes creativity, technical skills, and practical problem-solving.",
    category: "Hackathon",
    icon: <Lightbulb className="w-6 h-6 text-yellow-600" />,
    tagline: "Hack. Build. Transform.",
    duration: "24 hours",
    teamSize: "2-4 members",
    rules: [
      "Teams must consist of 2-4 members",
      "All code must be written during the event",
      "Use of external APIs and libraries is allowed",
      "Projects must be original and created during the hackathon",
      "Teams must present their solution to judges",
      "Source code must be submitted via GitHub",
      "Final presentation is mandatory for all teams",
      "Internet access will be provided throughout the event",
    ],
    terms: [
      "Team registration required with all member details",
      "Entry fee of ₹400 per team",
      "Accommodation will be provided for outstation participants",
      "Meals will be provided during the event",
      "Teams must bring their own laptops and chargers",
      "Event organizers are not responsible for personal belongings",
      "Participants must follow safety guidelines",
      "Final decision on winners rests with the judging panel",
    ],
    timeline: [
      {
        phase: "Opening Ceremony",
        description: "Problem statement release and team formation",
        duration: "2 hours",
      },
      {
        phase: "Development Phase",
        description: "Intensive coding and solution building",
        duration: "20 hours",
      },
      {
        phase: "Final Presentations",
        description: "Teams present their solutions to judges",
        duration: "2 hours",
      },
    ],
    prizes: [
      { position: "1st Place", reward: "₹25,000 + Certificate" },
      { position: "2nd Place", reward: "₹15,000 + Certificate" },
      { position: "3rd Place", reward: "₹10,000 + Certificate" },
      { position: "Best Innovation", reward: "₹5,000 + Certificate" },
    ],
    coordinators: [
      {
        name: "Vikram Joshi",
        year: "4th Year CSE",
        phone: "+91 98765 43215",
        email: "vikram.joshi@college.edu",
      },
      {
        name: "Ananya Gupta",
        year: "3rd Year CSE",
        phone: "+91 98765 43216",
        email: "ananya.gupta@college.edu",
      },
    ],
    registrationLink: "https://forms.google.com/innohack25-registration",
  },
  {
    id: "webdev",
    name: "WebCraft Pro",
    shortDescription:
      "Frontend and full-stack web development competition with modern frameworks.",
    description:
      "WebCraft Pro challenges developers to create stunning, functional web applications using modern frameworks and technologies. Participants will build responsive, user-friendly websites while demonstrating their skills in both frontend design and backend development.",
    category: "Web Development",
    icon: <Monitor className="w-6 h-6 text-green-600" />,
    tagline: "Design. Develop. Deploy.",
    duration: "4 hours",
    teamSize: "1-2 members",
    rules: [
      "Use of modern frameworks (React, Vue, Angular) is encouraged",
      "Responsive design is mandatory",
      "Backend implementation is optional but rewarded",
      "Pre-written code templates are not allowed",
      "Design assets and icons can be used from free resources",
      "Website must be deployable and functional",
      "Version control using Git is required",
      "Cross-browser compatibility will be tested",
    ],
    terms: [
      "Individual or team participation allowed (max 2 members)",
      "Entry fee of ₹200 per participant/team",
      "Judging criteria includes design, functionality, and code quality",
      "Participants must use their own development setup",
      "Internet access will be available for resources and deployment",
      "Final submission must include live deployed link",
      "Code review session may be conducted for top entries",
      "Plagiarism will lead to immediate disqualification",
    ],
    timeline: [
      {
        phase: "Problem Statement",
        description: "Requirements and design brief provided to participants",
        duration: "30 minutes",
      },
      {
        phase: "Development Phase",
        description: "Building the web application with full functionality",
        duration: "3 hours",
      },
      {
        phase: "Deployment & Testing",
        description: "Final deployment and functionality testing",
        duration: "30 minutes",
      },
    ],
    prizes: [
      { position: "1st Place", reward: "₹12,000 + Certificate" },
      { position: "2nd Place", reward: "₹8,000 + Certificate" },
      { position: "3rd Place", reward: "₹5,000 + Certificate" },
    ],
    coordinators: [
      {
        name: "Rohan Mehta",
        year: "3rd Year CSE",
        phone: "+91 98765 43217",
        email: "rohan.mehta@college.edu",
      },
      {
        name: "Kavya Sharma",
        year: "4th Year CSE",
        phone: "+91 98765 43218",
        email: "kavya.sharma@college.edu",
      },
    ],
    registrationLink: "https://forms.google.com/webcraft-registration",
  },
  {
    id: "gamedev",
    name: "GameForge",
    shortDescription:
      "Game development challenge using Unity, Unreal Engine, or web technologies.",
    description:
      "GameForge is an exciting game development competition where participants create engaging games using popular engines like Unity, Unreal Engine, or web-based technologies. Focus on gameplay mechanics, user experience, and creative storytelling to build the next hit game.",
    category: "Game Development",
    icon: <Gamepad2 className="w-6 h-6 text-purple-600" />,
    tagline: "Create. Play. Win.",
    duration: "6 hours",
    teamSize: "1-3 members",
    rules: [
      "Games can be 2D or 3D based on team preference",
      "Use of game engines like Unity, Unreal, or web frameworks allowed",
      "Original art and audio assets preferred but free resources permitted",
      "Game must be playable and demonstrate core mechanics",
      "Documentation of game design and features required",
      "Multiplayer features are bonus but not mandatory",
      "Mobile game development is encouraged",
      "Final build must be executable on provided testing machines",
    ],
    terms: [
      "Teams of 1-3 members allowed",
      "Entry fee of ₹300 per team",
      "Game engines and development tools must be pre-installed",
      "Testing will be done on Windows and Android platforms",
      "Judges will evaluate gameplay, graphics, and innovation",
      "Source files and build must be submitted",
      "Participants retain intellectual property rights",
      "Winners may be featured on event social media channels",
    ],
    timeline: [
      {
        phase: "Theme Announcement",
        description: "Game theme and constraints revealed to all teams",
        duration: "30 minutes",
      },
      {
        phase: "Game Development",
        description: "Intensive game creation with mechanics and features",
        duration: "5 hours",
      },
      {
        phase: "Testing & Submission",
        description: "Final testing, bug fixes, and submission preparation",
        duration: "30 minutes",
      },
    ],
    prizes: [
      { position: "1st Place", reward: "₹18,000 + Certificate" },
      { position: "2nd Place", reward: "₹12,000 + Certificate" },
      { position: "3rd Place", reward: "₹8,000 + Certificate" },
      { position: "Most Creative", reward: "₹3,000 + Certificate" },
    ],
    coordinators: [
      {
        name: "Arjun Rao",
        year: "4th Year CSE",
        phone: "+91 98765 43219",
        email: "arjun.rao@college.edu",
      },
      {
        name: "Meera Nair",
        year: "3rd Year CSE",
        phone: "+91 98765 43220",
        email: "meera.nair@college.edu",
      },
    ],
    registrationLink: "https://forms.google.com/gameforge-registration",
  },
  {
    id: "aiml",
    name: "AI Challenge",
    shortDescription:
      "Machine learning and AI competition with real-world datasets and problems.",
    description:
      "AI Challenge brings together data scientists and ML enthusiasts to solve complex real-world problems using artificial intelligence and machine learning techniques. Participants will work with provided datasets to build, train, and deploy AI models that deliver practical solutions.",
    category: "Artificial Intelligence",
    icon: <Zap className="w-6 h-6 text-orange-600" />,
    tagline: "Learn. Analyze. Predict.",
    duration: "5 hours",
    teamSize: "1-3 members",
    rules: [
      "Participants must use provided datasets exclusively",
      "Any ML/AI framework (TensorFlow, PyTorch, Scikit-learn) allowed",
      "Pre-trained models can be used as base models",
      "Data preprocessing and feature engineering is encouraged",
      "Model validation and testing methodology must be documented",
      "Jupyter notebooks or Python scripts for submission",
      "Final model must demonstrate accuracy metrics",
      "Explanation of approach and methodology required",
    ],
    terms: [
      "Individual or team participation (max 3 members)",
      "Entry fee of ₹250 per participant/team",
      "Python environment setup is participant responsibility",
      "Internet access limited to downloading libraries only",
      "Evaluation based on model performance and innovation",
      "Dataset will be provided 30 minutes before start",
      "Final presentation of results and approach mandatory",
      "Code and model files must be submitted via provided platform",
    ],
    timeline: [
      {
        phase: "Dataset Release",
        description:
          "Problem statement and dataset provided to all participants",
        duration: "30 minutes",
      },
      {
        phase: "Data Exploration",
        description:
          "Understanding data, preprocessing, and feature engineering",
        duration: "1.5 hours",
      },
      {
        phase: "Model Development",
        description: "Building, training, and optimizing ML models",
        duration: "2.5 hours",
      },
      {
        phase: "Evaluation & Results",
        description: "Model testing, validation, and final presentation",
        duration: "30 minutes",
      },
    ],
    prizes: [
      { position: "1st Place", reward: "₹20,000 + Certificate" },
      { position: "2nd Place", reward: "₹12,000 + Certificate" },
      { position: "3rd Place", reward: "₹8,000 + Certificate" },
      { position: "Best Approach", reward: "₹4,000 + Certificate" },
    ],
    coordinators: [
      {
        name: "Deepak Kumar",
        year: "4th Year CSE",
        phone: "+91 98765 43221",
        email: "deepak.kumar@college.edu",
      },
      {
        name: "Riya Singh",
        year: "4th Year CSE",
        phone: "+91 98765 43222",
        email: "riya.singh@college.edu",
      },
    ],
    registrationLink: "https://forms.google.com/aichallenge-registration",
  },
];
