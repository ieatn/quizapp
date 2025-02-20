import React, { useState } from 'react';
// import questions from './questions'; 
import questions from './questions2';

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const getRandomQuestions = (num) => {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, num);
  };

  const [selectedQuestions, setSelectedQuestions] = useState(getRandomQuestions(5));

  const handleAnswer = (option) => {
    setSelectedAnswers([...selectedAnswers, option]);
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const renderResults = () => {
    const wrongAnswers = selectedAnswers.filter((answer, index) => answer !== selectedQuestions[index].answer);
    const correctAnswersCount = selectedQuestions.length - wrongAnswers.length;
    const wrongAnswersCount = wrongAnswers.length;

    return (
      <div>
        <h2 className="text-lg font-semibold mb-2">Results:</h2>
        <p className="mb-4">You got {correctAnswersCount} right and {wrongAnswersCount} wrong.</p>
        {selectedQuestions.map((question, index) => {
          const userAnswer = selectedAnswers[index];
          const isCorrect = userAnswer === question.answer;
          return (
            <div key={index} className="mb-4">
              <p className="font-semibold">{question.question}</p>
              <p className={isCorrect ? "text-green-500" : "text-red-500"}>
                Your answer: {userAnswer || "No answer"}
              </p>
              {!isCorrect && (
                <p className="text-green-500">
                  Correct answer: {question.answer}
                </p>
              )}
            </div>
          );
        })}
        {wrongAnswers.length === 0 && <p>All answers are correct!</p>}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Multiple Choice Quiz</h1>
      <div className="bg-white p-6 rounded shadow-md w-80">
        {showResults ? (
          renderResults()
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-2">{selectedQuestions[currentQuestionIndex].question}</h2>
            <div className="flex flex-col">
              {selectedQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-blue-500 text-white p-2 rounded mb-2 hover:bg-blue-600"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
