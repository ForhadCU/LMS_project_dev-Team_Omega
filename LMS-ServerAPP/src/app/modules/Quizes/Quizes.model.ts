import { model, Schema } from "mongoose";
import { TQuiz } from "./Quizes.interface";

const QuestionSchema = new Schema({
  Question_NO: { type: Number, required: true },
  Question: { type: String, required: true },
  Mark: { type: Number, required: true },
  Options: { type: [String], required: true },
  Answer: { type: String, required: true },
});

const QuizModelSchema = new Schema<TQuiz>(
  {
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
      required: [
        true,
        "Quiz type required.Must be either daily or weekly type.",
      ],
    },
    Date: {
      type: String,
      required: [true, "Quiz date is missing"],
    },
    Form_link: {
      type: String,
    },
    Questions: {
      type: [QuestionSchema],
      required: [true, "Quiz has no questions please add some questions."],
    },
  },
  {
    timestamps: true,
  }
);

export const Quiz = model<TQuiz>("Quizes", QuizModelSchema);
