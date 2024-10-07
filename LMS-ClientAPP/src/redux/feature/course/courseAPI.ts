import { baseAPI } from "../../API/baseAPI";

const courseAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createNewCourse: builder.mutation({
      query: (courseData) => ({
        url: "/courses/create-course",
        method: "POST",
        body: courseData,
      }),
      invalidatesTags: ["courses"],
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
    getSingleCourse: builder.query({
      query: (courseID) => {
        const params = new URLSearchParams();
        params.append("id", courseID);
        return {
          url: "/courses/get-single-course",
          method: "GET",
          params: params,
        };
      },
    }),
    updateCourseData: builder.mutation({
      query: (newData) => {
        return {
          url: "/courses/update-course",
          method: "PUT",
          body: newData,
        };
      },
      invalidatesTags: ["courses"],
    }),
  }),
});

export const {
  useCreateNewCourseMutation,
  useGetAllCoursesQuery,
  useGetSingleCourseQuery,
  useUpdateCourseDataMutation,
} = courseAPI;
