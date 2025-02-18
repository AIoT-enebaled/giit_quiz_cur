export interface ScratchQuestion {
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
export const scratchQuestions: ScratchQuestion[] = [
  {
    id: 1,
    text: "What is Scratch?",
    options: [
      "A visual programming language",
      "A type of drawing tool",
      "A secret code language",
      "A computer game"
    ],
    answer: "A visual programming language",
    hint: "It uses colorful blocks that snap together like puzzle pieces."
  },
  {
    id: 2,
    text: "Who developed Scratch?",
    options: [
      "The NASA team",
      "A group of video game designers",
      "A famous cartoon studio",
      "The MIT Media Lab"
    ],
    answer: "The MIT Media Lab",
    hint: "It was created by smart people at a well-known university lab."
  },
  {
    id: 3,
    text: "What do we call the colorful blocks in Scratch?",
    options: [
      "Puzzle pieces",
      "Snap blocks",
      "Code blocks",
      "Building bricks"
    ],
    answer: "Code blocks",
    hint: "They are like building blocks that create programs."
  },
  {
    id: 4,
    text: "What is the stage in Scratch?",
    options: [
      "The control panel for code",
      "The list of available blocks",
      "The drawing area for costumes",
      "The area where sprites perform"
    ],
    answer: "The area where sprites perform",
    hint: "Think of it as a theater stage where your sprites act."
  },
  {
    id: 5,
    text: "What is a sprite in Scratch?",
    options: [
      "A type of sound effect",
      "A character or object that performs actions",
      "A background image",
      "A coding tool"
    ],
    answer: "A character or object that performs actions",
    hint: "It's the person, animal, or object you control in your project."
  },
  {
    id: 6,
    text: "What is a backdrop in Scratch?",
    options: [
      "The background of the stage",
      "A sound clip",
      "A costume for a sprite",
      "A special effect"
    ],
    answer: "The background of the stage",
    hint: "It sets the scene for your story or game."
  },
  {
    id: 7,
    text: "What does the \"when green flag clicked\" block do?",
    options: [
      "Changes the sprite's color",
      "Stops the project",
      "Starts the program",
      "Plays a sound"
    ],
    answer: "Starts the program",
    hint: "Clicking the green flag begins your Scratch project."
  },
  {
    id: 8,
    text: "What does the \"move 10 steps\" block do?",
    options: [
      "Changes the sprite's size",
      "Rotates the sprite 10 degrees",
      "Repeats a command 10 times",
      "Moves the sprite 10 steps forward"
    ],
    answer: "Moves the sprite 10 steps forward",
    hint: "It makes your sprite move forward a little bit."
  },
  {
    id: 9,
    text: "What does the \"say Hello!\" block do?",
    options: [
      "Displays a speech bubble with \"Hello!\"",
      "Makes the sprite jump",
      "Changes the backdrop",
      "Plays a greeting sound"
    ],
    answer: "Displays a speech bubble with \"Hello!\"",
    hint: "It shows a message from the sprite on the screen."
  },
  {
    id: 10,
    text: "What is a loop in Scratch?",
    options: [
      "A list of sprites",
      "A set of blocks that repeat actions",
      "A type of sound",
      "A special effect"
    ],
    answer: "A set of blocks that repeat actions",
    hint: "It helps you repeat the same instructions over and over."
  },
  {
    id: 11,
    text: "Which block is used to repeat actions a certain number of times?",
    options: [
      "The \"forever\" block",
      "The \"if\" block",
      "The \"repeat\" block",
      "The \"wait\" block"
    ],
    answer: "The \"repeat\" block",
    hint: "It repeats the blocks inside it a specific number of times."
  },
  {
    id: 12,
    text: "What does the \"forever\" block do?",
    options: [
      "Stops the program",
      "Repeats actions a few times",
      "Delays the program",
      "Repeats actions continuously"
    ],
    answer: "Repeats actions continuously",
    hint: "It keeps running until you stop your project."
  },
  {
    id: 13,
    text: "How do you add a new sprite in Scratch?",
    options: [
      "By drawing a costume",
      "By clicking the \"Choose a Sprite\" button",
      "By typing a code command",
      "By clicking on the stage"
    ],
    answer: "By clicking the \"Choose a Sprite\" button",
    hint: "It's like adding a new character to your project."
  },
  {
    id: 14,
    text: "What is the \"costumes\" tab used for?",
    options: [
      "To change the sprite's appearance",
      "To change the sprite's sound",
      "To adjust the sprite's speed",
      "To add a new sprite"
    ],
    answer: "To change the sprite's appearance",
    hint: "You can make your sprite look different by switching costumes."
  },
  {
    id: 15,
    text: "How do you add a new backdrop in Scratch?",
    options: [
      "By clicking the \"Add Sound\" button",
      "By drawing a sprite",
      "By using the \"switch backdrop\" block",
      "By clicking the \"Choose a Backdrop\" button"
    ],
    answer: "By clicking the \"Choose a Backdrop\" button",
    hint: "It allows you to set a new background for your stage."
  },
  {
    id: 16,
    text: "What does the \"wait\" block do?",
    options: [
      "Speeds up the project",
      "Changes the sprite's color",
      "Pauses the program for a set time",
      "Loops the code"
    ],
    answer: "Pauses the program for a set time",
    hint: "It makes your sprite take a little break before doing the next action."
  },
  {
    id: 17,
    text: "What is the purpose of the \"if\" block?",
    options: [
      "To repeat actions",
      "To make decisions based on conditions",
      "To add sounds",
      "To switch costumes"
    ],
    answer: "To make decisions based on conditions",
    hint: "It checks if something is true before running the code inside it."
  },
  {
    id: 18,
    text: "What does the \"touching\" block check for?",
    options: [
      "If a sprite is touching the mouse pointer",
      "If a sprite is touching a sound icon",
      "If a sprite is touching the edge of the stage",
      "If a sprite is touching another sprite or color"
    ],
    answer: "If a sprite is touching another sprite or color",
    hint: "It helps your project know when objects bump into each other."
  },
  {
    id: 19,
    text: "How do you add sound to a project in Scratch?",
    options: [
      "By using the \"sound\" blocks",
      "By drawing a sound wave",
      "By clicking the \"costume\" tab",
      "By using the \"repeat\" block"
    ],
    answer: "By using the \"sound\" blocks",
    hint: "You can play sounds to make your project more fun."
  },
  {
    id: 20,
    text: "What is a script in Scratch?",
    options: [
      "A type of sprite costume",
      "A background image",
      "A set of instructions for a sprite",
      "A sound effect"
    ],
    answer: "A set of instructions for a sprite",
    hint: "It's like a set of instructions that tells a sprite what to do."
  }
].map(q => ({
  ...q,
  options: shuffleArray(q.options) // Randomize options for each question
}));

// Additional randomization to prevent predictable patterns
export function getRandomizedQuestions(count: number = 20): ScratchQuestion[] {
  return shuffleArray(scratchQuestions).slice(0, count);
}