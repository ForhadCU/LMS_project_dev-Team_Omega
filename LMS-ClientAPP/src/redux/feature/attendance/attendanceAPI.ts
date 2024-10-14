import { baseAPI } from "../../API/baseAPI";

const attendanceAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    checkInStudent: builder.mutation({
      query: (studentUserID) => {
        return {
          url: `/attendance/check-in/${studentUserID}`,
          method: "POST",
        };
      },
    }),
    getAllAttendance: builder.query({
      query: (rawQuery) => {
        const params = new URLSearchParams();
        for (let key in rawQuery) {
          params.append(key, rawQuery[key]);
        }
        return {
          url: "/attendance/get-all-attendance",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const { useCheckInStudentMutation, useGetAllAttendanceQuery } =
  attendanceAPI;
