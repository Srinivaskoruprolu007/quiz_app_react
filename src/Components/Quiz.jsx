import React, { useState, useContext } from "react";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/Context";

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(""); // Track selected option
  const { score, setScore, setGameState } = useContext(QuizContext);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const nextQuestion = () => {
    if (selectedOption === Questions[currQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(""); // Reset selected option for the next question
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (selectedOption === Questions[currQuestion].answer) {
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
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
