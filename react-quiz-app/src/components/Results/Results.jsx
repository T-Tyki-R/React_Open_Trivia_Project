const Results = ({ userName, isCorrect, correctAnswer, userAnswer, onRestart }) => (
    // HTML
    <div className="results">
        <h2>Results</h2>
        <p>{userName}, your answer is {isCorrect ? "correct" : "incorrect"}.</p>
        <p>Correct Answer: {correctAnswer}</p>
        <p>Your Answer: {userAnswer}</p>
        <button onClick={onRestart}>Restart Quiz</button>
        </div>
    
);

export default Results;