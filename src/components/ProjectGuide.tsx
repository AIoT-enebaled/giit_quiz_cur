import React, { useState } from 'react';
import { BookOpen, ArrowLeft, Code, Brain, Sparkles, Target, List, TestTube, Lightbulb } from 'lucide-react';
import CodeEditor from './CodeEditor';

export default function ProjectGuide({ onBack }: { onBack: () => void }) {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div className="min-h-screen quiz-gradient flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-4xl w-full border border-gray-700 overflow-y-auto max-h-[90vh]">
        <div className="flex items-center justify-between mb-8 sticky top-0 bg-gray-800 py-2 z-10">
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-cyan-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-100">Project Guide: GiiT Python Quiz</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowEditor(!showEditor)}
              className="flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors"
            >
              <Code className="w-5 h-5 mr-2" />
              {showEditor ? 'Hide Editor' : 'Open Editor'}
            </button>
            <button
              onClick={onBack}
              className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Quiz
            </button>
          </div>
        </div>

        {showEditor && (
          <div className="mb-8">
            <CodeEditor 
              defaultValue="# Welcome to the Python Playground! 🐍
# Try out your Python code here

def greet(name):
    return f'Hello, {name}!'

# Test the function
print(greet('Python Learner'))"
              height="400px"
            />
          </div>
        )}

        <div className="space-y-8">
          {/* Objective Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Objective
            </h2>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 mb-4">
                This project involves building a Python-based Quiz Application for beginners, focusing on foundational Python topics including data types, loops, conditionals, functions, data structures, and error handling.
              </p>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-100">Key Goals:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Test user's Python knowledge interactively</li>
                  <li>Provide immediate feedback for each question</li>
                  <li>Offer helpful hints when needed</li>
                  <li>Track and display progress</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2" />
              Problem Statement
            </h2>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">1.</span>
                  <span>Present multiple-choice questions to users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">2.</span>
                  <span>Enable interactive answer selection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">3.</span>
                  <span>Track and display scores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">4.</span>
                  <span>Provide hints on request</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">5.</span>
                  <span>Handle errors gracefully</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">6.</span>
                  <span>Create an engaging user experience</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Project Requirements */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center">
              <List className="w-6 h-6 mr-2" />
              Project Requirements
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Question Bank Structure</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 100+ questions in structured format</li>
                  <li>• Question text</li>
                  <li>• Four multiple-choice options (a, b, c, d)</li>
                  <li>• Correct answer reference</li>
                  <li>• Helpful hint for each question</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Program Flow</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Welcome message and instructions</li>
                  <li>• Sequential question presentation</li>
                  <li>• Interactive answer selection</li>
                  <li>• Hint system</li>
                  <li>• Exit functionality</li>
                  <li>• Score tracking and summary</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Implementation Guide */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center">
              <Code className="w-6 h-6 mr-2" />
              Implementation Guide
            </h2>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Question Bank Structure</h3>
                  <pre className="text-gray-300 overflow-x-auto bg-gray-800 p-4 rounded-lg">
                    <code>{`questions = [
    {
        "question": "What is the type of 10 in Python?",
        "options": ["a) int", "b) float", "c) str", "d) complex"],
        "answer": "a",
        "hint": "Whole numbers are integers."
    }
]`}</code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Core Functions</h3>
                  <pre className="text-gray-300 overflow-x-auto bg-gray-800 p-4 rounded-lg">
                    <code>{`def display_question(question, options):
    print(f"\\n{question}")
    for option in options:
        print(option)

def get_user_input():
    while True:
        user_input = input("Your answer (a/b/c/d/hint/exit): ").strip().lower()
        if user_input in ['a', 'b', 'c', 'd', 'hint', 'exit']:
            return user_input
        print("Invalid input. Please enter a valid option.")

def check_answer(user_input, correct_answer):
    return user_input == correct_answer`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Testing Guide */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center">
              <TestTube className="w-6 h-6 mr-2" />
              Testing Guide
            </h2>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Test correct and incorrect answer scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Verify hint system functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Check input validation and error handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Validate exit functionality</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Final Notes */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2" />
              Final Notes
            </h2>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Study the code flow and understand how components interact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Test frequently during development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Consider adding extra features like difficulty levels or performance tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Focus on user experience and error handling</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}