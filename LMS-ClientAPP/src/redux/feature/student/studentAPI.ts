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
  }),
});

export const { useGetStudentProfileQuery } = studentAPI;
