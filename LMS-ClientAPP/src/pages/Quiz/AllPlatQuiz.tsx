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
import { useGetSingleCourseQuery } from "../../redux/feature/course/courseAPI";
import { useEffect, useState } from "react";

export const AllPlatQuiz = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const [quizType, setQuizType] = useState("");

  const params = useParams();
  const courseID = params.id;
  const [query, setQuery] = useState<{}>({ CourseID: courseID });
  const {
    data: allplatQuiz,
    isLoading,
    isSuccess,
  } = useGetAllPlatQuizzesQuery(query);
  const { data: course } = useGetSingleCourseQuery(courseID, {
    skip: !isSuccess,
  });
  useEffect(() => {
    if (quizType !== "") {
      setQuery({ CourseID: courseID, quiz_type: quizType });
    }
    console.log(query);
  }, [quizType]);
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
          {course?.data.courseType === "language" && (
            <div>
              {user.role === "instructor" && (
                <Link to={`/create-jlingo-quiz`}>
                  <Button variant="contained" color="error">
                    Create JLINGO Quiz
                  </Button>
                </Link>
              )}
            </div>
          )}
          <div>
            {user.role === "student" && (
              <Link to={`/course-quizzes/${courseID}`}>
                <Button variant="outlined">PRACTICE QUIZ</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" my-2 w-full flex flex-col gap-2">
        <div className=" w-full p-2 flex flex-row justify-end">
          <div>
            <label className="block text-sm font-medium">Quiz Type</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) => setQuizType(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="practice">Practice</option>
            </select>
          </div>
        </div>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-3">
              {allplatQuiz?.data.map((quiz: TIOSQuiz) => {
                return (
                  <QuizAllPlatCard
                    key={quiz._id}
                    img={quiz.img}
                    title={quiz.quiz_title}
                    quizType={quiz.quiz_type}
                    link={quiz.form_link}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
