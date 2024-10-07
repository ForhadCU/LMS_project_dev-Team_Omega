import { baseAPI } from "../../API/baseAPI";

const contentAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createNewContent: builder.mutation({
      query: (contentData) => ({
        url: "/contents/create-content",
        method: "POST",
        body: contentData,
      }),
    }),
    getContents: builder.query({
      query: (rawQuery) => {
        const params = new URLSearchParams();
        for (let key in rawQuery) {
          params.append(key, rawQuery[key]);
        }
        return {
          url: "/contents/get-contents",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["contents"],
    }),
    addClassRecordings: builder.mutation({
      query: (classRecordingsData) => {
        return {
          url: "/contents/post-class-records",
          method: "POST",
          body: classRecordingsData,
        };
      },
    }),
    getAllClassRecordings: builder.query({
      query: (rawQuery) => {
        const params = new URLSearchParams();
        for (let key in rawQuery) {
          params.append(key, rawQuery[key]);
        }
        return {
          url: "/contents/get-all-class-records",
          method: "GET",
        };
      },
      providesTags: ["recordings"],
    }),
    addNewGeneralResource: builder.mutation({
      query: (resourceData) => {
        return {
          url: "/contents/post-gen-resources",
          method: "POST",
          body: resourceData,
        };
      },
    }),
    getAllGeneralResource: builder.query({
      query: (rawQuery) => {
        const params = new URLSearchParams();
        for (let key in rawQuery) {
          params.append(key, rawQuery[key]);
        }
        return {
          url: "/contents/get-all-gen-resources",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const {
  useCreateNewContentMutation,
  useGetContentsQuery,
  useAddClassRecordingsMutation,
  useGetAllClassRecordingsQuery,
  useAddNewGeneralResourceMutation,
  useGetAllGeneralResourceQuery,
} = contentAPI;
