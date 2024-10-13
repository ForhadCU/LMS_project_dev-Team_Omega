import { Divider } from "@mui/material";
import { useState } from "react";
import { useGetAllAttendanceQuery } from "../../redux/feature/attendance/attendanceAPI";
import { Loader } from "../../components/loader/Loader";
import { getTodayDate } from "../../utils/formatDate";

interface IUser {
  email: string;
  name: string;
  _id: string;
}

interface IAttendanceInfo {
  Student_ID: IUser;
  TodayDate: string;
  attendance_status: string;
  time: string;
  _id: string;
}

export const AttendanceList = () => {
  const today = getTodayDate();

  const [queryDate, setQueryDate] = useState(today);
  const { data: attendanceList, isLoading } = useGetAllAttendanceQuery({
    TodayDate: queryDate,
  });

  return (
    <div className=" flex flex-col  p-2 ">
      <div className=" my-2 text-center w-full">
        <h2 className=" text-2xl font-semibold">Attendance List</h2>
      </div>
      <div className=" my-1">
        <Divider variant="fullWidth"></Divider>
      </div>
      <div className="flex flex-col items-center w-full">
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setQueryDate(e.target.value)}
          />
        </div>
        {isLoading ? (
          <div className=" flex justify-center w-full">
            <Loader />
          </div>
        ) : (
          <>
            <div className=" my-2 overflow-x-auto rounded-lg shadow-lg w-full">
              <table className="table-auto w-full border border-gray-300">
                <thead className="bg-[#1976D2] text-white">
                  <tr className="text-lg">
                    <th className="p-4">Student Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Time</th>
                    <th className="p-4">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-emerald-50">
                  {attendanceList?.data.map((attandance: IAttendanceInfo) => {
                    return (
                      <tr
                        key={attandance._id}
                        className="border-b hover:bg-gray-100 transition duration-200"
                      >
                        <td className=" text-center">
                          {attandance.Student_ID.name}
                        </td>
                        <td className=" text-center">
                          {attandance.Student_ID.email}
                        </td>
                        <td className=" text-center">
                          {attandance.attendance_status}
                        </td>
                        <td className=" text-center">{attandance.time}</td>
                        <td className=" text-center">{attandance.TodayDate}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
