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
    createNewUser: builder.mutation({
      query: (newUserData) => {
        return {
          url: "/user/create-user",
          method: "POST",
          body: newUserData,
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useCreateNewUserMutation } = usersAPI;
