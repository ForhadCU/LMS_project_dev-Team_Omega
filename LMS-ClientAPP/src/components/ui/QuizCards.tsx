import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface IQuizCardsProps {
  role?: string;
  quizType: string;
  quizName: string;
  quizId: string;
}
export const QuizCards = ({ quizName, quizType, quizId }: IQuizCardsProps) => {
  return (
    <div className=" flex flex-row justify-between mx-0 border shadow-md p-2 items-start">
      <div className=" block ">
        <div className=" font-semibold text-lg p-2">{quizName}</div>
        <div className=" font-light text-base p-2">{quizType}</div>
      </div>
      <div className=" flex flex-col gap-2 items-center">
        <Link to={`/course-quiz-questions/${quizId}`}>
          {" "}
          <Button variant={"outlined"}>Go to Quiz </Button>
        </Link>
        <div className=" font-bold text-sm">
          <p>Date</p>
        </div>
      </div>
    </div>
  );
};
