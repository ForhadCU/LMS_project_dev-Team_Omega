"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JLingoQuiz = exports.IOSQuiz = exports.Quiz = void 0;
const mongoose_1 = require("mongoose");
const QuestionSchema = new mongoose_1.Schema({
    Question_NO: { type: Number, required: true },
    Question: { type: String, required: true },
    Mark: { type: Number, required: true },
    Options: { type: [String], required: true },
    Answer: { type: String, required: true },
});
const QuizModelSchema = new mongoose_1.Schema({
    Course_ID: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
const IOSQuizModelSchema = new mongoose_1.Schema({
    CourseID: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Course ID is required"],
        ref: "Courses",
    },
    quiz_title: {
        type: String,
        required: [true, "Quiz Title"],
    },
    quiz_type: {
        type: String,
        enum: ["daily", "weekly", "practice"],
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
const JLingoQuizSchema = new mongoose_1.Schema({
    quiz_title: {
        type: String,
        required: [true, "Quiz title is required."],
    },
    quiz_type: {
        type: String,
        enum: ["daily", "weekly", "practice"],
        required: [
            true,
            "Quiz type is required. Must be either daily, weekly, or practice.",
        ],
    },
    img: {
        type: String,
        default: null, // Optional, can be empty
    },
    form_link: {
        type: String,
        required: [true, "Form link is required."],
    },
    quiz_date: {
        type: String,
        required: [true, "Quiz date is required."],
    },
}, {
    timestamps: true, // This will automatically add `createdAt` and `updatedAt` fields
});
exports.Quiz = (0, mongoose_1.model)("Quizes", QuizModelSchema);
exports.IOSQuiz = (0, mongoose_1.model)("GeneralQuiz", IOSQuizModelSchema);
exports.JLingoQuiz = (0, mongoose_1.model)("JLingoQuiz", JLingoQuizSchema);
