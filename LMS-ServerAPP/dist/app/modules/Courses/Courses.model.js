"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Course title is required"],
    },
    code: {
        type: String,
        required: [true, "Course code is required"],
    },
    description: {
        type: String,
        required: [true, "Description of the course is required."],
    },
    duration: {
        type: Number,
        required: [true, "Duration(in Months) of this course is required"],
    },
    img: {
        type: String,
        default: "https://e7.pngegg.com/pngimages/329/915/png-clipart-computer-icons-educational-technology-learning-training-course-training-blue-angle.png",
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
exports.Course = (0, mongoose_1.model)("Courses", courseSchema);