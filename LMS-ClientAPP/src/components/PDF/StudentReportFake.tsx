import { Button } from "@mui/material";
import { student_progress_local } from "../../constants";
import { Worker, Viewer, ViewMode } from "@react-pdf-viewer/core"; // Core viewer
import { toolbarPlugin } from "@react-pdf-viewer/toolbar"; // Toolbar plugin
import { Link } from "react-router-dom";

export const StudentReportFake = () => {
  const pdfURL = student_progress_local;
  const toolbarPluginInstance = toolbarPlugin();
  return (
    <div className=" flex flex-col items-center mx-0 p-3">
      <h2 className=" text-2xl font-bold p-3 my-2">Student Report</h2>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          style={{
            height: "900px", // Set the height you want
            width: "100%", // Make it full width
            maxWidth: "650px", // Optional: set a max width
            border: "1px solid rgba(0, 0, 0, 0.3)", // Border for visual clarity
          }}
        >
          <Viewer
            fileUrl={pdfURL}
            plugins={[toolbarPluginInstance]}
            viewMode={ViewMode.SinglePage}
          />
        </div>
      </Worker>
      <div className=" my-2 p-2">
        <Link to={"/get-users"}>
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  );
};
