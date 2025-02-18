import React, { useState, useEffect } from 'react';
import { Star, Home, Keyboard, ArrowRight, Award, Book } from 'lucide-react';

interface Level {
  id: number;
  name: string;
  letters: string[];
  words: string[];
  sentences: string[];
  color: string;
}

const levels: Level[] = [
  {
    id: 1,
    name: "Home Row Friends",
    letters: ['A', 'S', 'D', 'F', 'J', 'K', 'L'],
    words: ['sad', 'dad', 'fad', 'ask', 'lad', 'fall', 'salad', 'add', 'all'],
    sentences: [
      'dad is sad',
      'the lad can ask dad',
      'dad had a fad',
      'all lads fall',
      'ask dad to add salad',
      'dad and lad had a fad',
      'the lad did ask dad',
      'all lads add a fad',
      'dad did add all',
      'sad dad did fall'
    ],
    color: "text-pink-500"
  },
  {
    id: 2,
    name: "Top Row Adventure",
    letters: ['R', 'E', 'T', 'W', 'P'],
    words: ['red', 'jet', 'jar', 'saw', 'tap', 'rat', 'sat', 'fat', 'art', 'ear', 'pat'],
    sentences: [
      'dad saw a red jet',
      'the lad sat by a jar',
      'ask dad to tap the rat',
      'the fad is not far',
      'a red jar can add art',
      'all the lads saw a fat rat',
      'dad did tap and add art',
      'the lad did ask for red art',
      'dad and lad sat to see the jet',
      'the red fad did add a jar',
      'ask the fat rat to tap',
      'all lads can add red art',
      'a lad saw a red fad',
      'dad did tap the jar and sat',
      'the rat did pat dads ear'
    ],
    color: "text-purple-500"
  },
  {
    id: 3,
    name: "Bottom Row Fun",
    letters: ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    words: ['cat', 'dog', 'bag', 'zip', 'man', 'cab', 'bat', 'van', 'bug', 'fox', 'cup', 'bus'],
    sentences: [
      'dad saw a red jet and a fat cat',
      'the lad did tap a jar to add art',
      'ask dad to pat the rat in the cab',
      'all lads saw a dog and a red fox',
      'the bag did zip by the van',
      'dad and the lad had a salad and a fad',
      'the cat did fall and dad did add a fad',
      'the dog saw a bug on the cup',
      'a man sat in a cab and held a bag',
      'the bat did zip past the bus',
      'the lad did ask dad to add a red cup',
      'dad and the man did tap a jar and add art',
      'all lads saw a fox and a dog',
      'the rat did pat the ear of the cat',
      'ask the lad to tap the bag on the bus',
      'the van did zip by as the man sat in the cab',
      'dad did fall when the lad saw a fat bug',
      'the dog did tap the red bag on the cup',
      'ask the man to add a bat and a fox',
      'all did see dad the lad and the man with a cup and a cab'
    ],
    color: "text-blue-500"
  }
];

export default function TypingPractice() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentWord, setCurrentWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);
  const [score, setScore] = useState(0);
  const [showSentencePractice, setShowSentencePractice] = useState(false);
  const [currentSentence, setCurrentSentence] = useState('');
  const [levelCompleted, setLevelCompleted] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const level = levels.find(l => l.id === currentLevel) || levels[0];

  const startNewWord = () => {
    const randomWord = level.words[Math.floor(Math.random() * level.words.length)];
    setCurrentWord(randomWord);
    setUserInput('');
  };

  const startNewSentence = () => {
    setCurrentSentence(level.sentences[sentenceIndex]);
    setUserInput('');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase();
    setUserInput(input);

    if (showSentencePractice) {
      if (input === level.sentences[sentenceIndex]) {
        setShowCelebration(true);
        setTimeout(() => {
          setShowCelebration(false);
          setSentenceIndex((prev) => {
            const nextIndex = prev + 1;
            if (nextIndex >= level.sentences.length) {
              return 0;
            }
            return nextIndex;
          });
          setUserInput('');
        }, 1500);
      }
    } else {
      if (input === currentWord) {
        setShowCelebration(true);
        setScore(score + 1);
        setTimeout(() => {
          setShowCelebration(false);
          startNewWord();
        }, 1500);
      }
    }
  };

  useEffect(() => {
    if (showSentencePractice) {
      startNewSentence();
    } else {
      startNewWord();
    }
  }, [currentLevel, showSentencePractice, sentenceIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-pink-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Let's Learn Typing! 🌟
          </h1>
          <div className="flex items-center justify-center gap-4 text-lg">
            <Star className="w-6 h-6 text-yellow-500" />
            <span className="font-medium">Score: {score}</span>
            {showSentencePractice && (
              <span className="font-medium">
                Sentence {sentenceIndex + 1} of {level.sentences.length}
              </span>
            )}
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
        </div>

        {/* Level Selection */}
        <div className="flex justify-center gap-4 mb-8">
          {levels.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                setCurrentLevel(l.id);
                setShowSentencePractice(false);
                setLevelCompleted(false);
                setSentenceIndex(0);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                currentLevel === l.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Level {l.id}
            </button>
          ))}
        </div>

        {/* Current Level Info */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Level {level.id}: {level.name}
          </h2>

          {levelCompleted && !showSentencePractice && (
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-indigo-600 mb-4">
                Level Complete! 🎉
              </h3>
              <p className="text-lg mb-4">
                You typed {score} words correctly!
              </p>
              <button
                onClick={() => {
                  setShowSentencePractice(true);
                  setSentenceIndex(0);
                }}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
              >
                <Book className="w-5 h-5 inline-block mr-2" />
                Try Sentence Practice
              </button>
            </div>
          )}

          {/* Keyboard Visual */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Practice these letters:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {level.letters.map((letter) => (
                <div
                  key={letter}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl border-2 border-gray-200 ${level.color}`}
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>

          {/* Typing Practice */}
          {(showSentencePractice || !levelCompleted) && (
            <div className="text-center mb-8">
              <h3 className="text-lg font-medium mb-4">
                Type this {showSentencePractice ? 'sentence' : 'word'}:
              </h3>
              <div className="text-4xl font-bold mb-6 text-indigo-600">
                {showSentencePractice ? level.sentences[sentenceIndex] : currentWord}
              </div>
              <input
                type="text"
                value={userInput}
                onChange={handleInput}
                className="w-full max-w-md px-6 py-4 text-2xl text-center rounded-lg border-2 border-indigo-200 focus:border-indigo-600 focus:outline-none"
                placeholder="Type here..."
                autoFocus
              />
            </div>
          )}

          {/* Word List */}
          <div>
            <h3 className="text-lg font-medium mb-4">Practice words:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {level.words.map((word) => (
                <div
                  key={word}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Helpful Tips 💡</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Home className="w-5 h-5 text-indigo-600" />
              <span>Keep your fingers on the home row keys</span>
            </li>
            <li className="flex items-center gap-3">
              <Keyboard className="w-5 h-5 text-indigo-600" />
              <span>Look at the screen, not your hands</span>
            </li>
            <li className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-indigo-600" />
              <span>Take your time and have fun!</span>
            </li>
          </ul>
        </div>

        {/* Celebration Overlay */}
        {showCelebration && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl p-8 text-center transform animate-bounce">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-indigo-600">
                Great job! 🎉
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}