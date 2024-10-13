import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { useGetAllUsersQuery } from "../../redux/feature/users/usersAPI";
import { GeneralUser } from "../../Types/user.type";
import { useState } from "react";

export interface IRowData {
  id: string;
  name: string;
  email: string;
  role: string;
  details: "";
  rowID: any;
}

export interface IRow {
  usersRow: IRowData[];
}

const columns: GridColDef[] = [
  { field: "rowID", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Full name",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "role",
    headerName: "Role",
    width: 200,
  },
  {
    field: "details",
    headerName: "Profile Check",
    renderCell: (params) => {
      if (params.row.role !== "student") {
        return <span>Not a Student</span>;
      }
      return (
        <Link to={`/student-details/${params.row.id}`}>
          <Button>Student Profile</Button>
        </Link>
      );
    },
    width: 200,
  },
];

// const rows = [
//   {
//     id: 1,
//     fullName: "Snow Jon",
//     email: "abc35@gmail.com",
//     role: "admin",
//     details: "Jon Snow is the trueborn son of Ned Stark.",
//   },
//   {
//     id: 2,
//     fullName: "Lannister Cersei",
//     email: "abc352@gmail.com",
//     role: "student",
//     details: "Cersei Lannister is the Queen Regnant of the Seven Kingdoms.",
//   },
//   {
//     id: 3,
//     fullName: "Lannister Jaime",
//     email: "abc354@gmail.com",
//     role: "student",
//     details: "Jaime Lannister is Cersei's twin brother.",
//   },
//   {
//     id: 4,
//     fullName: "Stark Arya Daenerys",
//     email: "abc355@gmail.com",
//     role: "student",
//     details: "Arya Stark is a skilled assassin and warrior.",
//   },
//   {
//     id: 5,
//     fullName: "Targaryen",
//     email: "abc35@gmail.com",
//     role: "student",
//     details: "Daenerys Targaryen is the Breaker of Chains and Unburnt Queen.",
//   },
//   {
//     id: 6,
//     fullName: "Melisandre",
//     email: "xyz35@gmail.com",
//     role: "student",
//     details: "Melisandre is a Red Priestess who serves the Lord of Light.",
//   },
//   {
//     id: 7,
//     fullName: "Clifford Ferrara",
//     email: "absn35@gmail.com",
//     role: "student",
//     details: "Clifford Ferrara is a member of House Ferrara.",
//   },
//   {
//     id: 8,
//     fullName: "Frances Rossini",
//     email: "ssjn35@gmail.com",
//     role: "student",
//     details: "Frances Rossini is a noblewoman from the Seven Kingdoms.",
//   },
//   {
//     id: 9,
//     fullName: "Roxie Harvey",
//     email: "skjjs35@gmail.com",
//     role: "student",
//     details: "Roxie Harvey is a servant in King's Landing.",
//   },
// ];

const paginationModel = { page: 0, pageSize: 5 };

export const Table = () => {
  const [userType, setUserType] = useState("student");

  const { data: users, isLoading } = useGetAllUsersQuery({ role: userType });
  const rows =
    users?.data.map((user: GeneralUser, index: any) => ({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      rowID: index + 1,
    })) || [];
  return (
    <div className=" flex flex-col p-2 w-full">
      <div className=" flex justify-end w-[80%] my-2">
        <div>
          <label className="block text-sm font-medium">User Type</label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <div className=" flex w-full justify-center "></div>
      ) : (
        <Paper
          sx={{
            height: 400,
            width: "60%",
            margin: "auto", // Center the table horizontally
            display: "flex", // Allow flexbox properties to take effect
            flexDirection: "column", // Stack the content vertically
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            sx={{
              border: 0,
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f5f5f5", // Light gray background for headers
                color: blue[600], // Dark text color
                fontWeight: "extrabold", // Bold font weight
                fontSize: "16px", // Larger font size
                padding: "12px 8px", // Increased padding for better readability
              },
              "& .MuiDataGrid-cellContent": {
                fontSize: "14px", // Slightly larger font size for cell content
              },
            }}
          />
        </Paper>
      )}
    </div>
  );
};
