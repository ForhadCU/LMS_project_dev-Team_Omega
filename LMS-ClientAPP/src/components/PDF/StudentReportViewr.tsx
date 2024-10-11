import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { student_progress_local } from "../../constants";

export const StudentReportViewr = () => {
  return (
    <div className=" flex flex-col gap-2">
      <div className=" text-center font-bold text-xl my-2">
        <h2>Student Report</h2>
      </div>
      <Divider variant="fullWidth" className=" my-3"></Divider>
      {/* <StudentReport
          name={studentData.name}
          email={studentData.email}
          attendance={studentData.attendance}
          averageMarks={studentData.averageMarks}
        /> */}
      <iframe
        src={student_progress_local}
        title="Student Report PDF"
        width="100%"
        height="1000px"
        style={{ border: "none" }}
        className=" p-2 mt-2"
      >
        {/* <Document file={student_progress_local} className={" h-full"}>
          <Page pageNumber={1} />
        </Document> */}
      </iframe>

      <Link to={"/get-users"}>
        <Button>Back</Button>
      </Link>
    </div>
  );
};
