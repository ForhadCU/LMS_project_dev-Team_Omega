import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const GetUser = () => {
  return (
    <div>
      <Link to={"/student-report"}>
        <Button>Student Report</Button>
      </Link>
    </div>
  );
};
