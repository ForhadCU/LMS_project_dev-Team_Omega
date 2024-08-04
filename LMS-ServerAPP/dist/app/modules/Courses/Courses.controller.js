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
exports.CourseControllers = void 0;
const globalTryCatchFunc_1 = __importDefault(require("../../utils/globalTryCatchFunc"));
const Courses_services_1 = require("./Courses.services");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const createNewCourse = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = req.body;
    const result = yield Courses_services_1.CourseServices.createNewCourse(courseData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Course created successfully",
        data: result,
    });
}));
const getAllCourses = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Courses_services_1.CourseServices.getAllCourses();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Courses(Active only) fetched successfully",
        data: result,
    });
}));
const updateCourse = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqbody = req.body;
    const code = reqbody.code;
    const result = yield Courses_services_1.CourseServices.updateCourse(code, reqbody);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Course info updated successfully",
        data: result,
    });
}));
const deactivateCourse = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code = req.body.code;
    const result = yield Courses_services_1.CourseServices.deactivateCourse(code);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Course deactivated successfully",
        data: result,
    });
}));
exports.CourseControllers = {
    createNewCourse,
    getAllCourses,
    updateCourse,
    deactivateCourse,
};
