export interface AIQuestion {
  id: number;
  text: string;
  options: string[];
  answer: string;
  hint: string;
}

// Utility function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Create the questions with shuffled options
export const aiQuestions: AIQuestion[] = [
  {
    id: 1,
    text: "What does AI stand for?",
    options: [
      "Amazing Ideas",
      "Artificial Intelligence",
      "Automatic Invention",
      "Advanced Innovation"
    ],
    answer: "Artificial Intelligence",
    hint: "It means making machines smart."
  },
  {
    id: 2,
    text: "What is a machine learning model?",
    options: [
      "A computer program that learns from data",
      "A type of robot",
      "A gaming system",
      "A digital assistant"
    ],
    answer: "A computer program that learns from data",
    hint: "It improves with experience as it processes more data."
  },
  {
    id: 3,
    text: "What does computer vision refer to?",
    options: [
      "The ability to hear sounds",
      "The ability to speak",
      "The ability to think",
      "The ability to understand images"
    ],
    answer: "The ability to understand images",
    hint: "It helps computers 'see' and interpret pictures."
  },
  {
    id: 4,
    text: "What is a chatbot?",
    options: [
      "A program that simulates conversation",
      "A digital painting tool",
      "A data storage system",
      "A machine that moves"
    ],
    answer: "A program that simulates conversation",
    hint: "It talks with users like a friendly computer helper."
  },
  {
    id: 5,
    text: "What is natural language processing?",
    options: [
      "Teaching computers to use human language",
      "Making computers run faster",
      "A method for sorting images",
      "A tool for creating music"
    ],
    answer: "Teaching computers to use human language",
    hint: "It helps computers understand and generate human language."
  },
  {
    id: 6,
    text: "What is the role of data in AI?",
    options: [
      "It confuses AI",
      "It is not needed",
      "It provides examples for learning",
      "It fuels learning"
    ],
    answer: "It fuels learning",
    hint: "More data means more practice and better learning."
  },
  {
    id: 7,
    text: "What is an algorithm?",
    options: [
      "A type of computer virus",
      "A random set of numbers",
      "A step-by-step procedure for solving a problem",
      "A data storage system"
    ],
    answer: "A step-by-step procedure for solving a problem",
    hint: "It's like a recipe that tells the computer exactly what to do."
  },
  {
    id: 8,
    text: "What is deep learning?",
    options: [
      "A branch of machine learning using layered neural networks",
      "A type of ocean exploration",
      "A simple algorithm",
      "A tool for drawing"
    ],
    answer: "A branch of machine learning using layered neural networks",
    hint: "It uses many layers to process and learn from data."
  },
  {
    id: 9,
    text: "What does 'training' an AI mean?",
    options: [
      "Resting the system",
      "Rebooting the system",
      "Turning off the lights",
      "Teaching it through data and practice"
    ],
    answer: "Teaching it through data and practice",
    hint: "Training helps AI improve by learning from examples."
  },
  {
    id: 10,
    text: "What is pattern recognition?",
    options: [
      "A random process",
      "The ability to identify regularities in data",
      "A type of robot",
      "A language tool"
    ],
    answer: "The ability to identify regularities in data",
    hint: "It helps AI spot similarities and make sense of information."
  },
  {
    id: 11,
    text: "What is reinforcement learning?",
    options: [
      "A type of speech recognition",
      "A data storage method",
      "Learning by trial and error with rewards",
      "A computer game"
    ],
    answer: "Learning by trial and error with rewards",
    hint: "It rewards the system for making good decisions so it learns over time."
  },
  {
    id: 12,
    text: "What is a neural network?",
    options: [
      "A computer network connecting many computers",
      "A set of algorithms modeled after the human brain",
      "A database system",
      "A robotic sensor"
    ],
    answer: "A set of algorithms modeled after the human brain",
    hint: "It mimics how our brains process information."
  },
  {
    id: 13,
    text: "What is supervised learning?",
    options: [
      "Learning with guidance using labeled data",
      "Learning without any data",
      "A method to randomize data",
      "Learning through playing games"
    ],
    answer: "Learning with guidance using labeled data",
    hint: "It uses examples with correct answers to teach the AI."
  },
  {
    id: 14,
    text: "What is unsupervised learning?",
    options: [
      "Learning with many teachers",
      "Learning from videos",
      "Learning by guessing",
      "Learning without labeled data"
    ],
    answer: "Learning without labeled data",
    hint: "The AI finds hidden patterns on its own without guidance."
  },
  {
    id: 15,
    text: "What is computer vision?",
    options: [
      "The study of computer hardware",
      "The ability of computers to see",
      "A type of computer program",
      "A speech recognition tool"
    ],
    answer: "The ability of computers to see",
    hint: "It enables computers to analyze and interpret images."
  },
  {
    id: 16,
    text: "What is the purpose of AI in self-driving cars?",
    options: [
      "To help the car navigate safely",
      "To play music",
      "To change tire pressure",
      "To make coffee"
    ],
    answer: "To help the car navigate safely",
    hint: "It detects obstacles, road signs, and helps steer the vehicle."
  },
  {
    id: 17,
    text: "What is the Turing Test?",
    options: [
      "A car inspection test",
      "A computer speed test",
      "A test to see if a computer can fool a human into thinking it's human",
      "A typing speed test"
    ],
    answer: "A test to see if a computer can fool a human into thinking it's human",
    hint: "It measures whether a machine's responses can be indistinguishable from a human's."
  },
  {
    id: 18,
    text: "What is a digital assistant?",
    options: [
      "A personal organizer",
      "A voice-controlled helper",
      "A smart home device",
      "A program that helps answer questions and perform tasks"
    ],
    answer: "A program that helps answer questions and perform tasks",
    hint: "It uses AI to assist with daily activities and answer queries."
  },
  {
    id: 19,
    text: "What is a dataset?",
    options: [
      "A single image",
      "A collection of data used for training",
      "A hardware component",
      "A coding language"
    ],
    answer: "A collection of data used for training",
    hint: "It provides the examples the AI needs to learn."
  },
  {
    id: 20,
    text: "What is a model in AI?",
    options: [
      "A program that makes predictions based on data",
      "A physical robot",
      "A type of hardware",
      "A video game"
    ],
    answer: "A program that makes predictions based on data",
    hint: "It represents the knowledge the AI has learned from data."
  },
  {
    id: 21,
    text: "What does it mean for AI to 'learn'?",
    options: [
      "To simply save data",
      "To perform actions randomly",
      "To forget previous information",
      "To improve performance over time with experience"
    ],
    answer: "To improve performance over time with experience",
    hint: "The AI adapts and gets better as it processes more examples."
  },
  {
    id: 22,
    text: "What is a decision tree?",
    options: [
      "A list of commands",
      "A linear sequence of instructions",
      "A method for organizing decisions in a tree structure",
      "A random process"
    ],
    answer: "A method for organizing decisions in a tree structure",
    hint: "It splits data by asking a series of questions."
  },
  {
    id: 23,
    text: "What does the term 'big data' refer to?",
    options: [
      "Extremely large datasets used for analysis",
      "A minimal set of information",
      "Data from small devices",
      "Random numbers"
    ],
    answer: "Extremely large datasets used for analysis",
    hint: "It involves vast amounts of information collected from various sources."
  },
  {
    id: 24,
    text: "What is the purpose of training data in AI?",
    options: [
      "To confuse the model",
      "To teach the model how to perform tasks",
      "To slow down the algorithm",
      "To reduce processing power"
    ],
    answer: "To teach the model how to perform tasks",
    hint: "Training data provides examples that guide the learning process."
  },
  {
    id: 25,
    text: "What is overfitting in machine learning?",
    options: [
      "When a model is balanced",
      "When a model works for all data",
      "When a model forgets information",
      "When a model learns the training data too perfectly, failing to generalize"
    ],
    answer: "When a model learns the training data too perfectly, failing to generalize",
    hint: "Overfitting means the model may not perform well on new, unseen data."
  },
  {
    id: 26,
    text: "What is underfitting?",
    options: [
      "When a model performs excellently",
      "When a model is too complex",
      "When a model doesn't learn enough from the data",
      "When a model learns perfectly"
    ],
    answer: "When a model doesn't learn enough from the data",
    hint: "It indicates that the model is too simple to capture the underlying patterns."
  },
  {
    id: 27,
    text: "What is a robot?",
    options: [
      "A machine that performs tasks automatically",
      "A computer algorithm",
      "A type of data",
      "A natural language processing tool"
    ],
    answer: "A machine that performs tasks automatically",
    hint: "Robots can use AI to make decisions and perform actions."
  },
  {
    id: 28,
    text: "What is the role of sensors in AI systems?",
    options: [
      "To decorate the system",
      "To collect information from the environment",
      "To reduce processing speed",
      "To store code"
    ],
    answer: "To collect information from the environment",
    hint: "Sensors provide vital input data for the AI to analyze."
  },
  {
    id: 29,
    text: "What is natural language generation?",
    options: [
      "A language translation tool",
      "A speech recognition system",
      "A method for data storage",
      "A technique to produce human-like text"
    ],
    answer: "A technique to produce human-like text",
    hint: "It enables AI to create written content that resembles human writing."
  },
  {
    id: 30,
    text: "What is sentiment analysis?",
    options: [
      "A method to determine the emotional tone in text",
      "A way to process images",
      "A technique for data encryption",
      "A programming paradigm"
    ],
    answer: "A method to determine the emotional tone in text",
    hint: "It examines text to identify feelings and opinions."
  }
].map(q => ({
  ...q,
  options: shuffleArray(q.options) // Randomize options for each question
}));

// Additional randomization to prevent predictable patterns
export function getRandomizedQuestions(count: number = 30): AIQuestion[] {
  return shuffleArray(aiQuestions).slice(0, count);
}