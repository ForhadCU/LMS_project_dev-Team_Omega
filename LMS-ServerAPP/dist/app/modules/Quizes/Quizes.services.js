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
exports.QuizServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Courses_model_1 = require("../Courses/Courses.model");
const Quizes_model_1 = require("./Quizes.model");
const createNewQuiz = (quizData) => __awaiter(void 0, void 0, void 0, function* () {
    const getCourse = yield Courses_model_1.Course.findById(quizData.Course_ID);
    if (!getCourse) {
        throw new AppError_1.default(400, "Course not found");
    }
    const res = yield Quizes_model_1.Quiz.create(quizData);
    return res;
});
const createNewIOSQuiz = (quizData) => __awaiter(void 0, void 0, void 0, function* () {
    const getCourse = yield Courses_model_1.Course.findById(quizData.CourseID);
    if (!getCourse) {
        throw new AppError_1.default(400, "Course not found");
    }
    const res = yield Quizes_model_1.IOSQuiz.create(quizData);
    return res;
});
const createJLingoQuiz = (quizData) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Quizes_model_1.JLingoQuiz.create(quizData);
    return res;
});
const getAllQuizes = (queryBody) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    for (let key in queryBody) {
        query[key] = queryBody[key];
    }
    const allquizes = yield Quizes_model_1.Quiz.find(query)
        .populate("Course_ID", "title code")
        .sort("-createdAt");
    return allquizes;
});
const getIOSQuizes = (queryBody) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    for (let key in queryBody) {
        query[key] = queryBody[key];
    }
    const allquizes = yield Quizes_model_1.IOSQuiz.find(query)
        .populate("CourseID", "title code courseType")
        .sort("createdAt");
    return allquizes;
});
const getAllJLingoQuizzes = (querybody) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    for (let key in querybody) {
        query[key] = querybody[key];
    }
    const allquizes = yield Quizes_model_1.JLingoQuiz.find(query).sort("-createdAt");
    return allquizes;
});
exports.QuizServices = {
    createNewQuiz,
    getAllQuizes,
    createNewIOSQuiz,
    getIOSQuizes,
    createJLingoQuiz,
    getAllJLingoQuizzes,
};
