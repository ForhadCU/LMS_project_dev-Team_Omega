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
exports.ContentServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Courses_model_1 = require("../Courses/Courses.model");
const Content_model_1 = require("./Content.model");
const addNewContent = (contentData) => __awaiter(void 0, void 0, void 0, function* () {
    const getCourse = yield Courses_model_1.Course.findOne({ code: contentData.courseCode });
    if (!getCourse) {
        throw new AppError_1.default(404, "Course not found.");
    }
    const result = yield Content_model_1.Content.create(contentData);
    return result;
});
exports.ContentServices = {
    addNewContent,
};
