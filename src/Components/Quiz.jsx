import React, { useState, useContext } from "react";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/Context";

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(""); // Track selected option
  const { score, setScore, setGameState,  setUserAnswers } = useContext(QuizContext); // Add userAnswers to track answers

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const nextQuestion = () => {
    const correctAnswer = Questions[currQuestion].answer;


    setUserAnswers((prev) => [
      ...prev,
      { 
        question: Questions[currQuestion].prompt,
        selected: selectedOption,
        correct: correctAnswer 
      }
    ]);

    // Check if selected option is correct
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    setSelectedOption(""); // Reset selected option for the next question
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    const correctAnswer = Questions[currQuestion].answer;

    setUserAnswers((prev) => [
      ...prev,
      { 
        question: Questions[currQuestion].prompt,
        selected: selectedOption,
        correct: correctAnswer 
      }
    ]);

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    setGameState("endScreen");
  };

  const currentQuestion = Questions[currQuestion];

  return (
    <div className="Quiz">
      <h1>{currentQuestion.prompt}</h1>
      <div className="Options">
        <button
          className={selectedOption === "A" ? "selectedOption" : ""}
          onClick={() => handleOptionClick("A")}
        >
          {currentQuestion.optionA}
        </button>
        <button
          className={selectedOption === "B" ? "selectedOption" : ""}
          onClick={() => handleOptionClick("B")}
        >
          {currentQuestion.optionB}
        </button>
        <button
          className={selectedOption === "C" ? "selectedOption" : ""}
          onClick={() => handleOptionClick("C")}
        >
          {currentQuestion.optionC}
        </button>
        <button
          className={selectedOption === "D" ? "selectedOption" : ""}
          onClick={() => handleOptionClick("D")}
        >
          {currentQuestion.optionD}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} disabled={!selectedOption}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion} disabled={!selectedOption}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
