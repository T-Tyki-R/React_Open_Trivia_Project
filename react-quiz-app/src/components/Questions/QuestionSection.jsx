//imports
import { useState } from "react";
import Question from "./Question";

const QuestionSection = ({ questions, apiError }) => {
  //Props
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // If there is an API error, display it
  if (apiError) {
    return <p style={{ color: "red" }}>{apiError}</p>;
  }
  // If there are no questions, display a message
  if (!questions || questions.length === 0) {
    return <p>No questions available. Please try again later.</p>;
  }

  const question = questions[current];
  const allAnswers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);

  // Handler functions
  const handleSelectionChange = (e) => {
    setSelected(e.target.value);
    setError("");
  };

  // Handle form submission
  const handleQuestionSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Check if an answer is selected, then check if it's correct
    if (!selected) {
      setError("Please select an answer.");
      return;
    }
    setIsCorrect(selected === question.correct_answer);
    setShowResult(true);
  };
  // Handle next question
  const handleNextQuestion = () => {
    setSelected("");
    setShowResult(false);
    setCurrent(current + 1);
  };

  return (
    <div>
      {/* Display the current question and answers if not showing result */}
      {!showResult ? (
        <Question
          question={question.question}
          answers={allAnswers}
          selected={selected}
          onChange={handleSelectionChange}
          onSubmit={handleQuestionSubmit}
          error={error}
        />
      ) : (
        <div>
          <h2>{isCorrect ? "Correct!" : "Incorrect!"}</h2>
          {!isCorrect && (
            <p>
              The correct answer was:{" "}
              <span dangerouslySetInnerHTML={{ __html: question.correct_answer }} />
            </p>
          )}
          {current < questions.length - 1 ? (
            <button onClick={handleNextQuestion}>Next Question</button>
          ) : (
            <p>Quiz complete!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionSection;