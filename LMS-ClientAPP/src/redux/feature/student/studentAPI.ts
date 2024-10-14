import { baseAPI } from "../../API/baseAPI";

const studentAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStudentProfile: builder.query({
      query: (rawquery) => {
        const params = new URLSearchParams();
        for (let key in rawquery) {
          params.append(key, rawquery[key]);
        }
        return {
          url: "/student/get-student-profile",
          method: "GET",
          params: params,
        };
      },
    }),
    updateStudentProfile: builder.mutation({
      query: (updatedData) => {
        return {
          url: "/student/update-profile",
          method: "PATCH",
          body: updatedData,
        };
      },
    }),
  }),
});

export const { useGetStudentProfileQuery, useUpdateStudentProfileMutation } =
  studentAPI;
