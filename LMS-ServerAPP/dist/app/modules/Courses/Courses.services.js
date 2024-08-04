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
exports.CourseServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Courses_model_1 = require("./Courses.model");
const createNewCourse = (courseData) => __awaiter(void 0, void 0, void 0, function* () {
    const getExistingCourse = yield Courses_model_1.Course.findOne({ code: courseData.code });
    if (getExistingCourse) {
        throw new AppError_1.default(409, "Course already exists");
    }
    const newCourse = yield Courses_model_1.Course.create(courseData);
    return newCourse;
});
const getAllCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    const getallCourse = yield Courses_model_1.Course.find({ isActive: true });
    return getallCourse;
});
const updateCourse = (courseCode, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const getExistingCourse = yield Courses_model_1.Course.findOne({ code: courseCode });
    if (!getExistingCourse) {
        throw new AppError_1.default(404, "Course not found!");
    }
    const result = yield Courses_model_1.Course.findOneAndUpdate({ code: courseCode }, updateData, { new: true });
    return result;
});
const deactivateCourse = (courseCode) => __awaiter(void 0, void 0, void 0, function* () {
    const getExistingCourse = yield Courses_model_1.Course.findOne({ code: courseCode });
    if (!getExistingCourse) {
        throw new AppError_1.default(404, "Course not found!");
    }
    if (!getExistingCourse.isActive) {
        throw new AppError_1.default(409, "Course already deactivated!");
    }
    const result = yield Courses_model_1.Course.findOneAndUpdate({ code: courseCode }, { isActive: false }, { new: true });
    return result;
});
exports.CourseServices = {
    createNewCourse,
    getAllCourses,
    updateCourse,
    deactivateCourse,
};
