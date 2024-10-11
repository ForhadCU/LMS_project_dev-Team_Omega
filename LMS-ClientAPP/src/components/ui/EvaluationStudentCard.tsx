import { Avatar, Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Link } from "react-router-dom";

interface IWeekCardProps {
  id: string;
  studName: string;
}
export const EvaluationStudentCard = ({ studName, id }: IWeekCardProps) => {
  const firstChar = studName
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
  return (
    <div className=" flex flex-row justify-between h-[100px] bg-slate-100 rounded-md shadow-md p-3">
      <div className=" flex flex-row gap-2 items-start">
        <div>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>{firstChar}</Avatar>
        </div>
        <div className=" flex flex-col gap-2">
          {" "}
          <p>Student {studName}</p> <p>email</p>
        </div>
      </div>
      <div>
        <Link to={`/single-student-evaluation/${id}`}>
          <Button variant="outlined" size="large">
            <EditNoteIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};
