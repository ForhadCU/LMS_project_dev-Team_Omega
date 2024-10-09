import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const StudentDetails = () => {
  return (
    <div>
      StudentDetails
      <Link to={"/student-report"}>
        <Button>Student Report</Button>
      </Link>
    </div>
  );
};
