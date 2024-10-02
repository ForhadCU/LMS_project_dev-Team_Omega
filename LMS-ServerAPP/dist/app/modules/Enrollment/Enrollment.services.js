"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentServices = void 0;
const mongoose_1 = require("mongoose");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Courses_model_1 = require("../Courses/Courses.model");
const Enrollment_model_1 = require("./Enrollment.model");
const enrollIntoCourse = (studentID, courseID) => __awaiter(void 0, void 0, void 0, function* () {
    const getExistingEnrollment = yield Enrollment_model_1.Enrollment.find({
        Student_ID: studentID,
        Enrolled_Course: courseID,
    });
    const getExistingCourse = yield Courses_model_1.Course.findById(courseID);
    if (getExistingEnrollment) {
        throw new AppError_1.default(400, "Already enrolled into this Course");
    }
    if (!getExistingCourse) {
        throw new AppError_1.default(404, "Course nor found");
    }
    const today_date = new Date();
    const enrollmentData = {
        Student_ID: new mongoose_1.Types.ObjectId(studentID),
        Enrolled_Course: new mongoose_1.Types.ObjectId(courseID),
        Enroll_date: today_date,
    };
    const createEnrollment = yield Enrollment_model_1.Enrollment.create(enrollmentData);
    return createEnrollment;
});
const getEnrollments = (rawQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    for (let key in rawQuery) {
        query[key] = rawQuery[key];
    }
    const result = yield Enrollment_model_1.Enrollment.find(query).populate("Enrolled_Course", "title code");
    return result;
});
exports.EnrollmentServices = {
    enrollIntoCourse,
    getEnrollments,
};
