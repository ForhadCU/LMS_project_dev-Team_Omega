import AppError from "../../errors/AppError";
import { Course } from "../Courses/Courses.model";
import { TQuiz } from "./Quizes.interface";
import { Quiz } from "./Quizes.model";

const createNewQuiz = async (quizData: TQuiz) => {
  const getCourse = await Course.findById(quizData.Course_ID);
  if (!getCourse) {
    throw new AppError(400, "Course not found");
  }
  const res = await Quiz.create(quizData);
  return res;
};

const getAllQuizes = async (queryBody: any) => {
  let query: any = {};
  for (let key in queryBody) {
    query[key] = queryBody[key];
  }
  const allquizes = await Quiz.find(query)
    .populate("Course_ID", "title code")
    .sort("-createdAt");
  return allquizes;
};

export const QuizServices = {
  createNewQuiz,
  getAllQuizes,
};
