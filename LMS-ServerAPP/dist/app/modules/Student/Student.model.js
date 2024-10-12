"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentProfile = void 0;
const mongoose_1 = require("mongoose");
const StudentPerformanceSchema = new mongoose_1.Schema({
    totalAttendance: {
        type: Number,
        required: true,
        min: 0, // Ensuring attendance is a positive number
        default: 0,
    },
    avgDailyQuizMarks: {
        type: Number,
        required: true,
        min: 0,
        max: 100, // Assuming marks out of 100
        default: 0,
    },
    avgWeeklyQuizMarks: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
        default: 0,
    },
    classAttention: {
        type: String,
        enum: ["Good", "Average"],
        required: true,
        default: "Good",
    },
});
const StudentSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    userID: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0, // Ensuring age is positive
    },
    subjectMajor: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
        default: "https://cdn-icons-png.flaticon.com/512/67/67902.png",
    },
    performance: {
        type: StudentPerformanceSchema,
        required: true,
    },
});
exports.StudentProfile = (0, mongoose_1.model)("StudentProfile", StudentSchema);
