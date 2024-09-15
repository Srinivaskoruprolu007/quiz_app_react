import React, { useContext } from "react";
import { QuizContext } from "../helpers/Context";

function EndScreen() {
  const { score, userAnswers, setGameState, setScore, setUserAnswers } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0); // Reset score
    setUserAnswers([]); // Clear user answers
    setGameState("menu"); // Go back to menu
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished!</h1>
      <h2>Your Score: {score}</h2>

      <h3>Review Your Answers:</h3>
      <ul>
        {userAnswers.map((answer, index) => (
          <li key={index}>
            <p>
              <strong>Q:</strong> {answer.question}
            </p>
            <p>
              <strong>Your Answer:</strong> {answer.selected}
            </p>
            <p>
              <strong>Correct Answer:</strong> {answer.correct}
            </p>
            {answer.selected === answer.correct ? (
              <p style={{ color: "green" }}>Correct!</p>
            ) : (
              <p style={{ color: "red" }}>Incorrect</p>
            )}
          </li>
        ))}
      </ul>

      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
