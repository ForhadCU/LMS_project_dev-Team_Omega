import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";
import { students } from "../../data/dummyAnalytics";

const Rankings = ({ type }) => {
  // Sort students based on the selected type
  const sortedStudents = [...students].sort((a, b) => {
    return type === "weekly"
      ? b.weeklyScore - a.weeklyScore
      : b.dailyScore - a.dailyScore;
  });

  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#EEF2FF" }}
      className="rounded-md mt-6 shadow-md "
    >
      <h2 className="my-5 text-2xl text-indigo-600 text-center font-semibold">
        {type === "weekly" ? "Weekly Quiz Rankings" : "Daily Quiz Rankings"}
      </h2>
      <Table aria-label="student rankings">
        <TableHead className="bg-indigo-600">
          <TableRow>
            <th className="text-white font-semibold p-2 text-center">Rank</th>
            <th className="text-white font-semibold p-2">Name</th>
            <th className="text-white font-semibold p-2 text-center">
              {type === "weekly" ? "Weekly Score (50)" : "Daily Score (20)"}
            </th>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedStudents.map((student, index) => (
            <TableRow
              key={student.id}
              className="hover:bg-gray-200 transition-colors"
            >
              <td className="p-2 text-center">{index + 1}</td>
              <td className="p-2">{student.name}</td>
              <td className="p-2 text-center">
                {type === "weekly" ? student.weeklyScore : student.dailyScore}
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Rankings;
