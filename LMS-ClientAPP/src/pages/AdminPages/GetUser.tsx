import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const GetUser = () => {
  return (
    <div>
      All user table each user row will have a button
      <Link to={"/student-details"}>
        <Button>Student Details</Button>
      </Link>
    </div>
  );
};
