import React, { useContext } from "react";
import { QuizContext } from "../helpers/Context";
import { Questions } from "../helpers/QuestionBank";
function EndScreen() {
  const { setGameState, score, setScore } = useContext(QuizContext);
  const restart = () => {
    setGameState("menu");
    setScore(0);
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restart}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
