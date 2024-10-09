import { useParams } from "react-router-dom";
import { CustomAccordion } from "../../components/accordion/CustomAccordion";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const Lectures = () => {
  const params = useParams();
  const courseID = params.id;

  return (
    <div>
      <div className=" text-xl lg:text-2xl font-bold">Lectures {courseID}</div>
      <Divider variant="fullWidth" className=" my-2"></Divider>
      <div className=" flex flex-row justify-end my-2">
        <Link to={`/course-content-create/${courseID}`}>
          <Button variant="contained">Add Lecture +</Button>
        </Link>
      </div>
      <div>
        <CustomAccordion />
      </div>
    </div>
  );
};
