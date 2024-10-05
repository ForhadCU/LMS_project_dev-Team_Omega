import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import { QuizCards } from "../../components/ui/QuizCards";

export const AllQuiz = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const params = useParams();
  const courseID = params.id;
  return (
    <div className=" flex flex-col">
      AllQuiz
      {user.role === "instructor" && (
        <div>
          <Link to={`/course-quiz-create/${courseID}`}>
            <Button>Create Quiz</Button>
          </Link>
        </div>
      )}
      <div className=" my-2 w-full flex flex-col gap-2">
        <QuizCards quizName="Quiz Name" quizType="Quiz Type" quizId="123" />
      </div>
    </div>
  );
};
