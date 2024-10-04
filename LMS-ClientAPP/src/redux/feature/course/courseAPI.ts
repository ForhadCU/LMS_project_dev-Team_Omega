import { baseAPI } from "../../API/baseAPI";

const courseAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createNewCourse: builder.mutation({
      query: (courseData) => ({
        url: "/courses/create-course",
        method: "POST",
        body: courseData,
      }),
    }),
    getAllCourses: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        for (let key in query) {
          params.append(key, query[key]);
        }
        return {
          url: "/courses/get-all-courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["courses"],
    }),
  }),
});

export const { useCreateNewCourseMutation, useGetAllCoursesQuery } = courseAPI;
