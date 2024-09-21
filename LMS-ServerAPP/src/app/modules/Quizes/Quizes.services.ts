import { TQuiz } from "./Quizes.interface";
import { Quiz } from "./Quizes.model";

const createNewQuiz = async (quizData: TQuiz) => {
  const res = await Quiz.create(quizData);
  return res;
};

const createQuizQuestion = async () => {};

export const QuizServices = {
  createNewQuiz,
  createQuizQuestion,
};
