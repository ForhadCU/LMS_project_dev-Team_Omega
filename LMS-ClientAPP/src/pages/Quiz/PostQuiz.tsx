import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { Button, Divider } from "@mui/material";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";

export const PostQuiz = () => {
  const { totalScore, rightAnswers, wrongAnswers } = useAppSelector(
    (state) => state.answer
  );
  const user = useAppSelector(selectCurrentUser) as TUser;
  const params = useParams();
  const quizID = params.id;
  const navigate = useNavigate();
  const handleRecordScore = () => {
    const gradeInfo = {
      studentID: user.userId,
      quizID,
      totalScore,
      rightAnswers,
      wrongAnswers,
    };
    navigate("/");
    console.log(gradeInfo);
  };
  return (
    <div className=" flex flex-col items-center h-[600px]">
      <div className=" text-2xl text-center">
        <h2>Quiz Result</h2>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" flex flex-col items-center border shadow-md rounded-md p-3 w-[350px]  gap-3">
        <div className=" text-center text-xl font-semibold">You Got Total</div>
        <div className=" rounded-full bg-blue-600 text-center text-white font-bold text-xl w-[50px] h-[50px] p-3">
          <p>{totalScore}</p>
        </div>
        <div className=" block border border-green-400 rounded-md border-solid p-2 w-[200px]">
          <p className=" text-center font-semibold">Quiz Summary</p>
          <p>Correct Answers:{rightAnswers}</p>
          <p>
            Wrong Answers:<span className=" text-red-700">{wrongAnswers}</span>{" "}
          </p>
        </div>
        <div className=" w-[200px] flex flex-col items-center">
          <Button
            variant="contained"
            className=" w-full"
            onClick={handleRecordScore}
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};
