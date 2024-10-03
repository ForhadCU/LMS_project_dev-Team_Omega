import { useParams } from "react-router-dom";
import { CustomAccordion } from "../../components/accordion/CustomAccordion";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Resources = () => {
  const params = useParams();
  const courseID = params.id;
  return (
    <div className=" flex flex-col">
      Resources {courseID}
      <div className=" flex flex-row justify-end my-2">
        <Link to={`/course-content-create/${courseID}`}>
          <Button variant="contained">Add Resource+</Button>
        </Link>
      </div>
      <div>
        <CustomAccordion />
      </div>
    </div>
  );
};
