import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const CoursesList = () => {
  return (
    <div>
      Courses list will be shown as a grid. each grid item will have a button
      called details
      <Link to={"/course-details-admin"}>
        <Button>Course Details</Button>
      </Link>
    </div>
  );
};
