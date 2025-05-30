// Imports
import HomepageForm from './components/Homepage/HomepageForm'
import QuestionSection from './components/Questions/QuestionSection'
import ResultSection from './components/Results/ResultSection'
import { useState } from 'react'
import './App.css'

function App() {
  // State variables
  const [questions, setQuestions] = useState([]);
  const [apiError, setApiError] = useState("");
  // Step to track current view (home, quiz, result)
  const [step, setStep] = useState("home");
  const [userName, setUserName] = useState("");

// Function to handle starting the quiz
  const handleStartQuiz = async (formData) => {
    setApiError("");
    setUserName(formData.name);
    // Validate form data
    try {
      // API call
      const url = `https://opentdb.com/api.php?amount=10&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`
      // Fetch questions from the API
      const res = await fetch(url);
      // Check if the response is ok
      const data = await res.json();
      // If the API returns results, set questions and change step to quiz
      if (data.results && data.results.length > 0) {
        setQuestions(data.results);
        setStep("quiz");
      } else {
        setApiError("No questions found. Try different options.");
      }
    } catch {
      setApiError("API error. Please try again.");
    }
  };
  //HTML
  return (
     <div>
      {/* Render components based on the current step */}
      {/*Homepage*/}
      {step === "home" && <HomepageForm onStartQuiz={handleStartQuiz} />}
      {/*Quiz*/}
      {step === "quiz" && (
        <QuestionSection
          questions={questions}
          userName={userName}
          apiError={apiError}
        />
      )}
      {/*Results*/}
      {step === "result" && (
        <ResultSection
          userName={userName}
          questions={questions}
          onRestart={() => {
            setQuestions([]);
            setStep("home");
            setApiError("");
          }}
        />
      )}
      {/* Display API error if any */}
      {step === "home" && apiError && <p style={{ color: "red" }}>{apiError}</p>}
    </div>
  )
}

export default App
