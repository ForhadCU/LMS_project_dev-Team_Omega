import { useParams } from "react-router-dom";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import { TUser } from "../../Types/user.type";
import { Link } from "react-router-dom";
import { Button, Divider } from "@mui/material";
import { useGetAllPlatQuizzesQuery } from "../../redux/feature/quiz/quizAPI";
import { Loader } from "../../components/loader/Loader";
import { QuizAllPlatCard } from "../../components/ui/QuizAllPlatCard";
import { TIOSQuiz } from "../../Types/question.type";

export const AllPlatQuiz = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const params = useParams();
  const courseID = params.id;
  const { data: allplatQuiz, isLoading } = useGetAllPlatQuizzesQuery({});
  //console.log(allplatQuiz?.data);
  return (
    <div className=" flex flex-col">
      <div className=" flex flex-row justify-between gap-2 p-2 items-start">
        <div className=" text-xl">
          <h2 className=" font-bold">AllQuiz</h2>
        </div>
        <div className=" flex lg:flex-row gap-2">
          {user.role === "instructor" && (
            <div>
              <Link to={`/course-allplat-quiz-create/${courseID}`}>
                <Button variant="contained">Create Quiz</Button>
              </Link>
            </div>
          )}
          <div>
            <Button variant="outlined">PRACTICE QUIZ</Button>
          </div>
        </div>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" my-2 w-full flex flex-col gap-2">
        <div className=" w-full p-2 flex flex-row justify-end">
          Select Quiz type
        </div>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className=" grid grid-cols-1 lg:grid-cols-4">
              {allplatQuiz?.data.map((quiz: TIOSQuiz) => {
                return (
                  <QuizAllPlatCard img={quiz.img} title={quiz.quiz_title} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
