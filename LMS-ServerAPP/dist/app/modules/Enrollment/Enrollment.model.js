"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
const mongoose_1 = require("mongoose");
const EnrollmentSchema = new mongoose_1.Schema({
    Student_ID: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [
            true,
            "Unknown person enrollment not allowed.Student ID required.",
        ],
        ref: "User",
    },
    Enrolled_Course: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Course ID required."],
        ref: "Courses",
    },
    Enroll_date: {
        type: Date,
        required: [true, "Date required"],
    },
});
exports.Enrollment = (0, mongoose_1.model)("Enrollment", EnrollmentSchema);
