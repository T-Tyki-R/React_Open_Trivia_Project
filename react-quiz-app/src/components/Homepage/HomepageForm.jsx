//Imports
import { useState } from "react";
import WelcomeSection from "./WelcomeSection";


const HomepageForm = ({ onStartQuiz }) => {
    // Props
    const [welcomeMessage] = useState("Welcome To Quiz Mania!");
    const [title] = useState("Quiz Mania");
    const [instructions] = useState("Please fill out the form below to get started with the quiz. Your information will help us tailor the quiz experience to your preferences.");

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        difficulty: "",
    });
    const [error, setError] = useState("");

    // Generic input handler
    const handleFormChange = (e) => {
        setFormData({
            // Spread the existing formData (name, category, difficulty)
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError("");
    };

    // Form submit handler
    const handleSubmit = (e) => {
        // Prevent default form submission behavior
        e.preventDefault();
        // Check if all fields are filled out
        // If not, set an error message
        if (!formData.name || !formData.category || !formData.difficulty) {
            setError("Please fill out all fields.");
            return;
        }
        setError("");
        // Pass formData up if needed
        if (onStartQuiz) onStartQuiz(formData);
    };

    //HTML Elements
    return(
        <div className="homepage-form">
            {/* Render the WelcomeSection component */}
            <WelcomeSection
                welcomeMessage={welcomeMessage}
                title={title}
                instructions={instructions}/>
            {/* Render the form */}
            <form onSubmit={handleSubmit} className="form-container">
                <div className = "form-data">
                    <label>First Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Enter your first name"/>
                </div>
                <div className = "form-data">
                    <label>Category</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}>
                    <option value="">Select a category</option>
                    <option value="31">Anime & Manga</option>
                    <option value="15">Video Games</option>
                    <option value="16">Board Games</option>
                    <option value="29">Comics</option>
                </select>
                </div>
                <div className = "form-data">
                    <label>Difficulty</label>
                <select
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleFormChange}>
                    <option value="">Select difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    </select>
                </div>
                <button className="homepage-button" type="submit">Start Quiz</button>
                {/* Display error message if any */}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
        
    );
}

export default HomepageForm;

