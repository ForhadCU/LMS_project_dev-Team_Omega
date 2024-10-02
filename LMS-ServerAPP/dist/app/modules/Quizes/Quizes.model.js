"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
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
exports.Quiz = (0, mongoose_1.model)("Quizes", QuizModelSchema);
