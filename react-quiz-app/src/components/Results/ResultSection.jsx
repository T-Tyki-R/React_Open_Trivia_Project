//Imports
import Results from "./Results";

const ResultSection = ({ userName, userAnswer, correctAnswer, onRestart }) => {
    // Handle missing props 
    if (!userName || !correctAnswer) {
        return <p style={{ color: "red" }}>Results unavailable. Please complete the quiz first.</p>;
    }

    // Ensure that userAnswer is equal to correctAnswer
    const isCorrect = userAnswer === correctAnswer;

    // HTML
    return (
        <Results
            userName={userName}
            isCorrect={isCorrect}
            correctAnswer={correctAnswer}
            userAnswer={userAnswer}
            onRestart={onRestart}
        />
    );
};

export default ResultSection;