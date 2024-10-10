import { baseAPI } from "../../API/baseAPI";

const forumsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllForums: builder.query({
      query: (rawQuery) => {
        const params = new URLSearchParams();
        for (let key in rawQuery) {
          params.append(key, rawQuery[key]);
        }
        return {
          url: "/forums/get-all-forums",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["forums"],
    }),
    getAllForumComments: builder.query({
      query: (rawQuery) => {
        const params = new URLSearchParams();
        for (let key in rawQuery) {
          params.append(key, rawQuery[key]);
        }
        return {
          url: "/forums/get-forum-comments",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["forumComments"],
    }),
    postForum: builder.mutation({
      query: (forumBody) => {
        return {
          url: "/forums/post-forum",
          method: "POST",
          body: forumBody,
        };
      },
      invalidatesTags: ["forums"],
    }),
    postForumComment: builder.mutation({
      query: (forumComment) => {
        return {
          url: "/forums/post-forum-comment",
          method: "POST",
          body: forumComment,
        };
      },
      invalidatesTags: ["forumComments"],
    }),
  }),
});

export const {
  useGetAllForumsQuery,
  useGetAllForumCommentsQuery,
  usePostForumMutation,
  usePostForumCommentMutation,
} = forumsAPI;
