import React, { useState } from 'react';
import questions from './questions2'; 

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
    setSelectedQuestions(getRandomQuestions(5, chapter));
  };

  const getRandomQuestions = (num, chapter) => {
    const filteredQuestions = questions.filter(q => q.chapter === chapter);
    const shuffledQuestions = filteredQuestions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, num);
  };

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

    return (
      <div>
        <h2 className="text-lg font-semibold mb-2">Results:</h2>
        <p className="mb-4">You got {correctAnswersCount} right and {wrongAnswers.length} wrong.</p>
        {selectedQuestions.map((question, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{question.question}</p>
            <p className={selectedAnswers[index] === question.answer ? "text-green-500" : "text-red-500"}>
              Your answer: {selectedAnswers[index] || "No answer"}
            </p>
            {selectedAnswers[index] !== question.answer && (
              <p className="text-green-500">Correct answer: {question.answer}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Multiple Choice Quiz</h1>
      {!selectedChapter ? (
        <div className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-lg font-semibold mb-2">Select a Chapter</h2>
          {[7, 9, 10, 12].map((chapter) => (
            <button
              key={chapter}
              className="bg-blue-500 text-white p-2 rounded mb-2 hover:bg-blue-600 w-full"
              onClick={() => handleChapterSelect(chapter)}
            >
              Chapter {chapter}
            </button>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
}
