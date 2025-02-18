import React from 'react';
import { Code, Sparkles, Brain, ArrowLeft, Keyboard } from 'lucide-react';

interface QuizSelectorProps {
  onSelect: (type: string) => void;
  onBack: () => void;
}

export default function QuizSelector({ onSelect, onBack }: QuizSelectorProps) {
  return (
    <div className="min-h-screen quiz-gradient flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-4xl w-full border border-gray-700">
        <div className="flex items-center mb-8">
          <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Learning Adventure! 🎯</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Python Quiz Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="text-center mb-4">
              <Code className="w-12 h-12 mx-auto text-white mb-2" />
              <h3 className="text-xl font-bold text-white">Python</h3>
              <p className="text-blue-100 text-sm mt-2">Master the fundamentals of Python programming</p>
            </div>
            <button
              onClick={() => onSelect('python')}
              className="w-full mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Python Quiz
            </button>
          </div>

          {/* Scratch Quiz Card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="text-center mb-4">
              <Sparkles className="w-12 h-12 mx-auto text-white mb-2" />
              <h3 className="text-xl font-bold text-white">Scratch</h3>
              <p className="text-orange-100 text-sm mt-2">Learn block-based programming with Scratch</p>
            </div>
            <button
              onClick={() => onSelect('scratch')}
              className="w-full mt-4 px-4 py-2 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Start Scratch Quiz
            </button>
          </div>

          {/* AI Quiz Card */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="text-center mb-4">
              <Brain className="w-12 h-12 mx-auto text-white mb-2" />
              <h3 className="text-xl font-bold text-white">AI</h3>
              <p className="text-purple-100 text-sm mt-2">Explore the world of Artificial Intelligence</p>
            </div>
            <button
              onClick={() => onSelect('ai')}
              className="w-full mt-4 px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Start AI Quiz
            </button>
          </div>

          {/* Typing Practice Card */}
          <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="text-center mb-4">
              <Keyboard className="w-12 h-12 mx-auto text-white mb-2" />
              <h3 className="text-xl font-bold text-white">Typing</h3>
              <p className="text-pink-100 text-sm mt-2">Learn to type with fun exercises (Ages 5+)</p>
            </div>
            <button
              onClick={() => onSelect('typing')}
              className="w-full mt-4 px-4 py-2 bg-white text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              Start Typing Practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}