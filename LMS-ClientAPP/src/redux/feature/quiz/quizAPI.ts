import { baseAPI } from "../../API/baseAPI";

const quizAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: (rawQuery) => {
        const params = new URLSearchParams();
        for (let key in rawQuery) {
          params.append(key, rawQuery[key]);
        }
        return {
          url: "/quiz/get-all-quiz",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["quizzes"],
    }),
    createNewQuiz: builder.mutation({
      query: (quizData) => {
        return {
          url: "/quiz/create-quiz",
          method: "POST",
          body: quizData,
        };
      },
    }),
  }),
});

export const { useGetQuizzesQuery, useCreateNewQuizMutation } = quizAPI;
