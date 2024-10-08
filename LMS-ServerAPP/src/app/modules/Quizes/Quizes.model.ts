import { model, Schema } from "mongoose";
import { TIOSQuiz, TQuiz } from "./Quizes.interface";

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

const IOSQuizModelSchema = new Schema<TIOSQuiz>({
  CourseID: {
    type: Schema.Types.ObjectId,
    required: [true, "Course ID is required"],
    ref: "Courses",
  },
  quiz_title: {
    type: String,
    required: [true, "Quiz Title"],
  },
  quiz_type: {
    type: String,
    enum: ["daily", "weekly"],
    required: [true, "Quiz type required.Must be either daily or weekly type."],
  },
  quiz_date: {
    type: String,
    required: [true, "Quiz date required"],
  },
  img: {
    type: String,
    required: [true, "Image link needed"],
  },
  form_link: {
    type: String,
    required: [true, "Form link needed."],
  },
});

export const Quiz = model<TQuiz>("Quizes", QuizModelSchema);
export const IOSQuiz = model<TIOSQuiz>("GeneralQuiz", IOSQuizModelSchema);
