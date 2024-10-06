import { createSlice } from "@reduxjs/toolkit";
import { TQuestions } from "../../../Types/question.type";

type TQuiz = {
  quiz: TQuestions[];
};

const initialValue: TQuiz = {
  quiz: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialValue,
  reducers: {
    setQuizes: (state, action) => {
      state.quiz = action.payload;
    },
    unsetQuizes: (state) => {
      state.quiz = [];
    },
  },
});

export const { setQuizes, unsetQuizes } = quizSlice.actions;
export default quizSlice.reducer;
