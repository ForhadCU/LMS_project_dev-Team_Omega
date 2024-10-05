import { useParams } from "react-router-dom";

export const QuizQuestions = () => {
  const params = useParams();
  const quizID = params.id;
  return <div>QuizQuestions {quizID}</div>;
};
