import { Divider } from "@mui/material";
import { Table } from "../../components/DataTable/Table";

export const GetUser = () => {
  return (
    <div className=" flex flex-col w-full">
      <div className=" text-center my-2 ">
        <h2 className=" font-bold text-xl">Users and Students List</h2>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" my-3">
        <Table />
      </div>
    </div>
  );
};
