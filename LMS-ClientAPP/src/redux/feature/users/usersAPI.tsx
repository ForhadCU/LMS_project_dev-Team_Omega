import { baseAPI } from "../../API/baseAPI";

const usersAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (rawQuery) => {
        const params = new URLSearchParams();
        for (let key in rawQuery) {
          params.append(key, rawQuery[key]);
        }
        return {
          url: "/user/get-all-users",
          method: "GET",
          params: params,
        };
      },
    }),
    getSingleUser: builder.query({
      query: (rawQuery) => {
        const params = new URLSearchParams();
        for (let key in rawQuery) {
          params.append(key, rawQuery[key]);
        }
        return {
          url: "/user/get-single-user",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["singleUser"],
    }),
    createNewUser: builder.mutation({
      query: (newUserData) => {
        return {
          url: "/user/create-user",
          method: "POST",
          body: newUserData,
        };
      },
    }),
    updateUserInfo: builder.mutation({
      query: (newUserData) => {
        return {
          url: "/user/update-user-info",
          method: "PATCH",
          body: newUserData,
        };
      },
      invalidatesTags: ["singleUser"],
    }),
    updatePassword: builder.mutation({
      query: (newPassword) => {
        return {
          url: "/user/change-password",
          method: "POST",
          body: newPassword,
        };
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useCreateNewUserMutation,
  useGetSingleUserQuery,
  useUpdateUserInfoMutation,
  useUpdatePasswordMutation,
} = usersAPI;
