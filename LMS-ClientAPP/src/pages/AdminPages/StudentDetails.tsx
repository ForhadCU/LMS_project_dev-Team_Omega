import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useGetStudentProfileQuery } from "../../redux/feature/student/studentAPI";

export const StudentDetails = () => {
  const params = useParams();
  const studUserID = params.id;
  const { data: studentProfile } = useGetStudentProfileQuery({
    id: studUserID,
  });
  console.log(studentProfile);
  return (
    <div>
      StudentDetails
      <Link to={"/student-report"}>
        <Button>Student Report</Button>
      </Link>
    </div>
  );
};
