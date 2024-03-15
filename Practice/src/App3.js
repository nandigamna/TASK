import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'javascript is an ___language?',
      options: ['Object-oriented', 'Object-Based', 'Procedural', 'None of the above'],
      correctAnswer: 'Object-oriented'
    },
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4'
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption('');
  };

  const handlePrevClick = () => {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedOption('');
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowScore(true);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {showScore ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your total score is: {score}</p>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={option}
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleAnswerClick(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </form>
          <button onClick={handlePrevClick} disabled={currentQuestion === 0}>
            Previous
          </button>
          <button onClick={currentQuestion === questions.length - 1 ? handleSubmit : handleNextClick}>
            {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
