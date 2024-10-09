import { useParams } from "react-router-dom";

export const CourseEnrolledStuds = () => {
  const params = useParams();
  const courseID = params.id;
  console.log(courseID);
  return <div>CourseEnrolledStuds</div>;
};
