const Question = ({ question, answers, selected, onChange, onSubmit, error }) => (
    // This component renders a single question with its answers and handles user input
    <form onSubmit={onSubmit}>
        {/* Display the question with HTML content for formatting */}
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
        {/* loop/map through the answers and create radio buttons for each */}
        {answers.map((ans, idx) => (
            <div key={idx}>
                <input
                    type="radio"
                    id={`answer${idx}`}
                    name="answer"
                    value={ans}
                    checked={selected === ans}
                    onChange={onChange}
                />
                <label htmlFor={`answer${idx}`} dangerouslySetInnerHTML={{ __html: ans }} />
            </div>
        ))}
        <button type="submit">Submit Answer</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
);

export default Question;