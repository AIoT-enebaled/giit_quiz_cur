import React, { useState } from 'react';
import Quiz from './components/Quiz';
import ProjectGuide from './components/ProjectGuide';
import ScratchQuiz from './components/ScratchQuiz';
import AIQuiz from './components/AIQuiz';
import TypingPractice from './components/TypingPractice';
import QuizSelector from './components/QuizSelector';
import CurriculumPage from './components/CurriculumPage';
import { Brain, BookOpen } from 'lucide-react';

function App() {
  const [started, setStarted] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [quizType, setQuizType] = useState<string | null>(null);

  if (showCurriculum) {
    return (
      <div>
        <nav className="bg-gray-800 shadow-lg border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Brain className="w-8 h-8 text-cyan-400" />
                <span className="ml-2 text-xl font-bold text-white">GiiT Curriculum</span>
              </div>
              <button
                onClick={() => setShowCurriculum(false)}
                className="inline-flex items-center px-3 py-2 my-3 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Back to Home
              </button>
            </div>
          </div>
        </nav>
        <CurriculumPage />
      </div>
    );
  }

  if (showGuide) {
    return <ProjectGuide onBack={() => setShowGuide(false)} />;
  }

  if (started && quizType) {
    return (
      <div className="min-h-screen quiz-gradient">
        <nav className="bg-gray-800 shadow-lg border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Brain className="w-8 h-8 text-cyan-400" />
                <span className="ml-2 text-xl font-bold text-white">GiiT Quiz</span>
              </div>
              <button
                onClick={() => {
                  setStarted(false);
                  setQuizType(null);
                }}
                className="inline-flex items-center px-3 py-2 my-3 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Exit Quiz
              </button>
            </div>
          </div>
        </nav>
        {quizType === 'python' && <Quiz />}
        {quizType === 'scratch' && <ScratchQuiz />}
        {quizType === 'ai' && <AIQuiz />}
        {quizType === 'typing' && <TypingPractice />}
      </div>
    );
  }

  if (started) {
    return <QuizSelector onSelect={setQuizType} onBack={() => setStarted(false)} />;
  }

  return (
    <div className="min-h-screen quiz-gradient flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-3xl w-full border border-gray-700">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Brain className="w-16 h-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            Welcome to GiiT! 🌟
          </h1>
          <p className="text-xl text-cyan-400 mb-6">Master Programming, One Step at a Time</p>
        </div>

        <div className="text-center space-y-4">
          <button
            onClick={() => setStarted(true)}
            className="w-full px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
          >
            Start Learning 🚀
          </button>
          
          <button
            onClick={() => setShowGuide(true)}
            className="w-full px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-lg font-semibold"
          >
            <BookOpen className="w-6 h-6 mr-2 inline-block" />
            View Project Guide
          </button>

          <button
            onClick={() => setShowCurriculum(true)}
            className="w-full px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors text-lg font-semibold"
          >
            <BookOpen className="w-6 h-6 mr-2 inline-block" />
            View Curriculum
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;