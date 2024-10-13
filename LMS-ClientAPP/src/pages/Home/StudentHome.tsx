import { Button, Divider } from "@mui/material";
import { StudentAnalytics } from "../../components/Anaytics/StudentAnalytics";
import { useCheckInStudentMutation } from "../../redux/feature/attendance/attendanceAPI";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import toast from "react-hot-toast";

export const StudentHome = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const [checkInStudent] = useCheckInStudentMutation();
  const handleCHeckIn = async () => {
    const res = await checkInStudent(user.userId).unwrap();
    if (res.success) {
      toast.success(res.message);
    }
    console.log(res);
  };
  return (
    <div className=" flex flex-col items-center p-2">
      <div className=" w-full text-center p-2">
        <h2 className=" text-2xl font-bold">Welcome Student!</h2>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" flex flex-row p-2  justify-end w-full">
        <Button variant="contained" color="error" onClick={handleCHeckIn}>
          Check In
        </Button>
      </div>
      <div className=" w-full border  shadow-md rounded-md p-2">
        <StudentAnalytics />
      </div>
    </div>
  );
};
