import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullName",
    headerName: "Full name",
    width: 160,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "details",
    headerName: "Details Check",
    renderCell: () => (
      <Link to={"/student-details"}>
        <Button>Details</Button>
      </Link>
    ),
    width: 120,
  },
];


const rows = [
  {
    id: 1,
    fullName: "Snow Jon",
    email: "abc35@gmail.com",
    details: "Jon Snow is the trueborn son of Ned Stark.",
  },
  {
    id: 2,
    fullName: "Lannister Cersei",
    email: "abc352@gmail.com",
    details: "Cersei Lannister is the Queen Regnant of the Seven Kingdoms.",
  },
  {
    id: 3,
    fullName: "Lannister Jaime",
    email: "abc354@gmail.com",
    details: "Jaime Lannister is Cersei's twin brother.",
  },
  {
    id: 4,
    fullName: "Stark Arya Daenerys",
    email: "abc355@gmail.com",
    details: "Arya Stark is a skilled assassin and warrior.",
  },
  {
    id: 5,
    fullName: "Targaryen",
    email: "abc35@gmail.com",
    details: "Daenerys Targaryen is the Breaker of Chains and Unburnt Queen.",
  },
  {
    id: 6,
    fullName: "Melisandre",
    email: "xyz35@gmail.com",
    details: "Melisandre is a Red Priestess who serves the Lord of Light.",
  },
  {
    id: 7,
    fullName: "Clifford Ferrara",
    email: "absn35@gmail.com",
    details: "Clifford Ferrara is a member of House Ferrara.",
  },
  {
    id: 8,
    fullName: "Frances Rossini",
    email: "ssjn35@gmail.com",
    details: "Frances Rossini is a noblewoman from the Seven Kingdoms.",
  },
  {
    id: 9,
    fullName: "Roxie Harvey",
    email: "skjjs35@gmail.com",
    details: "Roxie Harvey is a servant in King's Landing.",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export const Table = () => {
  return (
    <Paper sx={{
      height: 400,
      width: "50%",
      margin: "auto", // Center the table horizontally
      display: "flex", // Allow flexbox properties to take effect
      flexDirection: "column", // Stack the content vertically
    }}>
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
  );
};