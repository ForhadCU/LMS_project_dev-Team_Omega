import { createSlice } from "@reduxjs/toolkit";

type quizResult = {
  totalScore: number;
  rightAnswers: number;
  wrongAnswers: number;
};

const initalValue: quizResult = {
  totalScore: 0,
  rightAnswers: 0,
  wrongAnswers: 0,
};

const answerSlice = createSlice({
  name: "answerScore",
  initialState: initalValue,
  reducers: {
    setAnswerScore: (state, action) => {
      state.totalScore = action.payload.totalScore;
      state.rightAnswers = action.payload.rightAns;
      state.wrongAnswers = action.payload.wrongAns;
    },
    removeAnswerScore: (state) => {
      state.totalScore = 0;
      state.rightAnswers = 0;
      state.wrongAnswers = 0;
    },
  },
});

export const { setAnswerScore, removeAnswerScore } = answerSlice.actions;
export default answerSlice.reducer;
