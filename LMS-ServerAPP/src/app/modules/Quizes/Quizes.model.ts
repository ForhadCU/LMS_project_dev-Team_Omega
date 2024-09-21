import { model, Schema } from "mongoose";
import { TQuiz } from "./Quizes.interface";

const QuizModelSchema = new Schema<TQuiz>({
  Course_ID: {
    type: Schema.Types.ObjectId,
    required: [true, "Course ID is required"],
    ref: "Courses",
  },
  Quiz_No: {
    type: String,
    required: [true, "Quiz Number is requied"],
  },
  Quiz_Type: {
    type: String,
    enum: ["daily", "weekly"],
    required: [true, "Quiz type required.Must be either daily or weekly type."],
  },
  Date: {
    type: String,
    required: [true, "Quiz date is missing"],
  },
  Form_link: {
    type: String,
  },
});

export const Quiz = model<TQuiz>("Quizes", QuizModelSchema);
