import { PDFViewer } from "@react-pdf/renderer";
import { IStudentData, StudentReport } from "./StudentReport";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const StudentReportViewr = () => {
  const studentData: IStudentData = {
    name: "John Doe",
    email: "johndoe@example.com",
    attendance: 85,
    averageMarks: 78,
  };
  return (
    <div>
      <PDFViewer width={"100%"} height={600}>
        <StudentReport
          name={studentData.name}
          email={studentData.email}
          attendance={studentData.attendance}
          averageMarks={studentData.averageMarks}
        />
      </PDFViewer>
      <Link to={"/get-users"}>
        <Button>Back</Button>
      </Link>
    </div>
  );
};
