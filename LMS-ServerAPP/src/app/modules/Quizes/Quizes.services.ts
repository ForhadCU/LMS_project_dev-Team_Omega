import AppError from "../../errors/AppError";
import { Course } from "../Courses/Courses.model";
import { TIOSQuiz, TJLingoQuiz, TQuiz } from "./Quizes.interface";
import { IOSQuiz, JLingoQuiz, Quiz } from "./Quizes.model";

const createNewQuiz = async (quizData: TQuiz) => {
  const getCourse = await Course.findById(quizData.Course_ID);
  if (!getCourse) {
    throw new AppError(400, "Course not found");
  }
  const res = await Quiz.create(quizData);
  return res;
};

const createNewIOSQuiz = async (quizData: TIOSQuiz) => {
  const getCourse = await Course.findById(quizData.CourseID);
  if (!getCourse) {
    throw new AppError(400, "Course not found");
  }
  const res = await IOSQuiz.create(quizData);
  return res;
};

const createJLingoQuiz = async (quizData: TJLingoQuiz) => {
  const res = await JLingoQuiz.create(quizData);
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

const getIOSQuizes = async (queryBody: any) => {
  let query: any = {};
  for (let key in queryBody) {
    query[key] = queryBody[key];
  }
  const allquizes = await IOSQuiz.find(query)
    .populate("CourseID", "title code courseType")
    .sort("-createdAt");
  return allquizes;
};

const getAllJLingoQuizzes = async (querybody: any) => {
  let query: any = {};
  for (let key in querybody) {
    query[key] = querybody[key];
  }
  const allquizes = await JLingoQuiz.find(query).sort("-createdAt");
  return allquizes;
};

export const QuizServices = {
  createNewQuiz,
  getAllQuizes,
  createNewIOSQuiz,
  getIOSQuizes,
  createJLingoQuiz,
  getAllJLingoQuizzes,
};
