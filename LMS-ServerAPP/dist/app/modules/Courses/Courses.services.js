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
const getAllCourses = (rawQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let initalQuery = {};
    for (let key in rawQuery) {
        initalQuery[key] = rawQuery[key];
    }
    const getallCourse = yield Courses_model_1.Course.find(initalQuery).populate("instructors", "name email");
    return getallCourse;
});
const getSingleCourse = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Courses_model_1.Course.findById(id).populate("instructors", "name email");
    if (!result) {
        throw new AppError_1.default(404, "Course not found");
    }
    return result;
});
const updateCourse = (courseCode, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const getExistingCourse = yield Courses_model_1.Course.findOne({ code: courseCode });
    if (!getExistingCourse) {
        throw new AppError_1.default(404, "Course not found!");
    }
    const result = yield Courses_model_1.Course.findOneAndUpdate({ code: courseCode }, updateData, { new: true });
    return result;
});
const deactivateCourse = (courseCode, status) => __awaiter(void 0, void 0, void 0, function* () {
    const getExistingCourse = yield Courses_model_1.Course.findOne({ code: courseCode });
    if (!getExistingCourse) {
        throw new AppError_1.default(404, "Course not found!");
    }
    // Handle course activation
    if (status === "active") {
        if (getExistingCourse.isActive === "active") {
            throw new AppError_1.default(409, "Course is already active!");
        }
    }
    // Handle course deactivation
    if (status === "inactive") {
        if (getExistingCourse.isActive === "inactive") {
            throw new AppError_1.default(409, "Course is already inactive!");
        }
    }
    const result = yield Courses_model_1.Course.findOneAndUpdate({ code: courseCode }, { isActive: status }, { new: true });
    return result;
});
exports.CourseServices = {
    createNewCourse,
    getAllCourses,
    updateCourse,
    deactivateCourse,
    getSingleCourse,
};
