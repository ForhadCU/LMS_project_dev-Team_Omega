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
    getAllPlatQuizzes: builder.query({
      query: (rawQuery) => {
        const params = new URLSearchParams();
        for (let key in rawQuery) {
          params.append(key, rawQuery[key]);
        }
        return {
          url: "/quiz/get-all-plat-quiz",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["allplatquiz"],
    }),
    createNewQuiz: builder.mutation({
      query: (quizData) => {
        return {
          url: "/quiz/create-quiz",
          method: "POST",
          body: quizData,
        };
      },
      invalidatesTags: ["quizzes"],
    }),
    createNewAllPlatQuiz: builder.mutation({
      query: (quizData) => {
        return {
          url: "/quiz/create-all-plat-quiz",
          method: "POST",
          body: quizData,
        };
      },
      invalidatesTags: ["allplatquiz"],
    }),
    createNewJLINGOQuiz: builder.mutation({
      query: (quizData) => {
        return {
          url: "/quiz/create-jlingo-quiz",
          method: "POST",
          body: quizData,
        };
      },
      invalidatesTags: ["allplatquiz"],
    }),
  }),
});

export const {
  useGetQuizzesQuery,
  useCreateNewQuizMutation,
  useCreateNewAllPlatQuizMutation,
  useGetAllPlatQuizzesQuery,
  useCreateNewJLINGOQuizMutation,
} = quizAPI;
