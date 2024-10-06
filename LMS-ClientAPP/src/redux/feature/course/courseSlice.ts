import { createSlice } from "@reduxjs/toolkit";
import { TCourses } from "../../../Types/course.type";

const InitialState: TCourses = {
  courses: [],
};

const courseSlice = createSlice({
  name: "courses",
  initialState: InitialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    unsetCourses: (state) => {
      state.courses = [];
    },
  },
});

export const { setCourses, unsetCourses } = courseSlice.actions;
export default courseSlice.reducer;
