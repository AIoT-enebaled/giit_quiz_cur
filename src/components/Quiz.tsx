import React, { useState, useEffect } from 'react';
import { Brain, HelpCircle, Timer, Trophy, LogOut, Code } from 'lucide-react';
import { Question, questions } from '../data/questions';
import CodeEditor from './CodeEditor';

const QUESTION_TIME_LIMIT = 105; // 1 minute and 45 seconds per question

// Happy emojis for correct answers
const HAPPY_EMOJIS = ['🎉', '🌟', '✨', '🎯', '🏆', '🌈', '💫', '🚀', '💪', '👏'];
// Sad emojis for incorrect answers
const SAD_EMOJIS = ['😢', '😔', '😕', '💔', '😿', '🥺', '😩', '😫', '😭', '🤕'];

// Encouraging messages for correct answers
const CORRECT_MESSAGES = [
  "Brilliant! Keep it up!",
  "You're on fire!",
  "Outstanding work!",
  "You're crushing it!",
  "Fantastic job!",
  "You're a Python pro!",
  "Keep the momentum going!",
  "You're unstoppable!",
  "Amazing knowledge!",
  "Perfect answer!"
];

// Supportive messages for incorrect answers
const INCORRECT_MESSAGES = [
  "Don't worry, keep trying!",
  "You'll get it next time!",
  "Learning from mistakes makes us stronger!",
  "Keep going, you're still learning!",
  "Every mistake is a learning opportunity!",
  "You're getting better with each try!",
  "Stay positive, you're making progress!",
  "Don't give up, you've got this!",
  "It's all part of the learning process!",
  "Keep pushing forward!"
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [timerActive, setTimerActive] = useState(true);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackEmoji, setFeedbackEmoji] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerActive && timeLeft > 0 && !answered) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !answered) {
      handleTimeUp();
    }
    return () => clearInterval(timer);
  }, [timeLeft, timerActive, answered]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'exit') {
        handleExitAttempt();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  const handleTimeUp = () => {
    setAnswered(true);
    setTimerActive(false);
    showFeedbackPopup(false);
  };

  const showFeedbackPopup = (correct: boolean) => {
    const randomIndex = Math.floor(Math.random() * 10);
    const emoji = correct ? HAPPY_EMOJIS[randomIndex] : SAD_EMOJIS[randomIndex];
    const message = correct ? CORRECT_MESSAGES[randomIndex] : INCORRECT_MESSAGES[randomIndex];
    
    setFeedbackEmoji(emoji);
    setFeedbackMessage(message);
    setIsCorrect(correct);
    setShowFeedback(true);

    // Hide feedback after 2 seconds
    setTimeout(() => {
      setShowFeedback(false);
    }, 2000);
  };

  const handleAnswer = (optionIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(optionIndex);
    setAnswered(true);
    setTimerActive(false);
    
    const correct = optionIndex === currentQuestion.correctAnswer && !showHint && timeLeft > 0;
    if (correct) {
      setScore(score + 1);
    }
    
    showFeedbackPopup(correct);
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswered(false);
    setShowHint(false);
    setSelectedAnswer(null);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setTimerActive(true);
    setShowFeedback(false);
    setShowEditor(false);
  };

  const handleExitAttempt = () => {
    setShowExitConfirm(true);
  };

  const handleExit = () => {
    window.location.href = '/';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "🏆 Extraordinary! You're a Python Genius! 🌟";
    if (percentage >= 80) return "🎯 Excellent! You're a Python Master! 🚀";
    if (percentage >= 70) return "💪 Great Job! You're Getting Stronger! 🌈";
    if (percentage >= 60) return "👍 Good Effort! Keep Learning! 📚";
    return "🌱 Keep Growing! Every Question Makes You Stronger! 💡";
  };

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  const toggleEditor = () => {
    setShowEditor(!showEditor);
  };

  const getEditorDefaultValue = () => {
    const questionText = currentQuestion.text;
    const codeMatch = questionText.match(/```python\n([\s\S]*?)```/);
    return codeMatch ? codeMatch[1].trim() : '# Write your Python code here\n';
  };

  if (answered && isLastQuestion) {
    return (
      <div className="min-h-screen quiz-gradient flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-xl w-full border border-gray-700">
          <div className="text-center">
            <Trophy className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Quiz Complete! 🎉</h2>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
              <p className="text-2xl font-bold mb-2 text-gray-100">
                Final Score: {score}/{questions.length} 🎯
              </p>
              <p className="text-lg text-cyan-400">
                {((score / questions.length) * 100).toFixed(1)}% Correct
              </p>
            </div>
            <p className="text-xl font-medium text-gray-300 mb-6">{getScoreMessage()}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors"
            >
              Try Again 🔄
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen quiz-gradient flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-4xl w-full border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Brain className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">
              Question {currentQuestionIndex + 1}/{questions.length}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Timer className="w-4 h-4 mr-1 text-gray-400" />
              <span className={`text-sm font-medium ${timeLeft <= 5 ? 'text-red-400' : 'text-gray-300'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <span className="text-sm font-medium text-cyan-400">
              Score: {score} ✨
            </span>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-100 mb-6">
          {currentQuestion.text}
        </h2>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={answered}
              className={`answer-button ${
                answered
                  ? index === currentQuestion.correctAnswer
                    ? 'answer-button-correct'
                    : index === selectedAnswer
                    ? 'answer-button-incorrect'
                    : 'answer-button-default'
                  : 'answer-button-default'
              }`}
            >
              <span className="font-medium">
                {String.fromCharCode(97 + index)}) {option}
              </span>
            </button>
          ))}
        </div>

        {currentQuestion.text.includes('```python') && (
          <div className="mb-6">
            <button
              onClick={toggleEditor}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
            >
              <Code className="w-4 h-4" />
              {showEditor ? 'Hide Code Editor' : 'Try it yourself!'}
            </button>
            
            {showEditor && (
              <CodeEditor defaultValue={getEditorDefaultValue()} />
            )}
          </div>
        )}

        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => setShowHint(true)}
            disabled={showHint || answered}
            className={`hint-button ${
              showHint || answered
                ? 'hint-button-disabled'
                : 'hint-button-enabled'
            }`}
          >
            <HelpCircle className="w-4 h-4 mr-1" />
            Show Hint 💡
          </button>

          {answered && !isLastQuestion && (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors"
            >
              Next Question ➡️
            </button>
          )}
        </div>

        {showHint && (
          <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <p className="text-sm text-cyan-300">{currentQuestion.hint}</p>
          </div>
        )}

        {showFeedback && (
          <div className={`fixed inset-0 flex items-center justify-center z-50 pointer-events-none`}>
            <div className={`transform transition-all duration-300 ${showFeedback ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <div className={`p-6 rounded-lg shadow-xl text-center ${isCorrect ? 'bg-green-600' : 'bg-red-600'}`}>
                <div className="text-4xl mb-2">{feedbackEmoji}</div>
                <p className="text-white text-lg font-semibold">{feedbackMessage}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-gray-700">
          <button
            onClick={handleExitAttempt}
            className="flex items-center text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Exit Quiz
          </button>
        </div>
      </div>

      {showExitConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl p-6 max-w-sm w-full border border-gray-700">
            <h3 className="text-xl font-bold text-gray-100 mb-4">Exit Quiz? 🚪</h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to exit? Your progress will be lost.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="px-4 py-2 text-gray-300 hover:text-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleExit}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
              >
                Exit Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}