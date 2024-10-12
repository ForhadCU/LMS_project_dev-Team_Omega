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
    const getCourse = yield Courses_model_1.Course.findById(contentData.courseID);
    if (!getCourse) {
        throw new AppError_1.default(404, "Course not found.");
    }
    const result = yield Content_model_1.Content.create(contentData);
    return result;
});
const addNewGeneralResource = (generalResource) => __awaiter(void 0, void 0, void 0, function* () {
    const createNewGenResource = yield Content_model_1.GeneralContent.create(generalResource);
    return createNewGenResource;
});
const addNewClassRecording = (classRecording) => __awaiter(void 0, void 0, void 0, function* () {
    const addNewRecording = yield Content_model_1.ClassRecording.create(classRecording);
    return addNewRecording;
});
const getAllGeneralResources = (rawQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    let page = 1;
    let limit = 4;
    for (let key in rawQuery) {
        if (key === "page") {
            page = rawQuery[key];
        }
        if (key === "limit") {
            limit = rawQuery[key];
        }
        query[key] = rawQuery[key];
    }
    const allGenResources = yield Content_model_1.GeneralContent.find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort("createdAt");
    return allGenResources;
});
const getAllClassRecordings = (rawQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    let page = 1;
    let limit = 4;
    for (let key in rawQuery) {
        if (key === "page") {
            page = rawQuery[key];
        }
        if (key === "limit") {
            limit = rawQuery[key];
        }
        query[key] = rawQuery[key];
    }
    const allGenResources = yield Content_model_1.ClassRecording.find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort("createdAt");
    return allGenResources;
});
const getContents = (rawQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    let page = 1;
    let limit = 10;
    for (let key in rawQuery) {
        if (query[key] === "page") {
            page = query[key];
        }
        if (query[key] === "limit") {
            limit = query[key];
        }
        query[key] = rawQuery[key];
    }
    const result = yield Content_model_1.Content.find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort("createdAt");
    return result;
});
const changeGeneralContentStatus = (status, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Content_model_1.GeneralContent.findByIdAndUpdate(id, { status: status }, { new: true });
    return result;
});
exports.ContentServices = {
    addNewContent,
    getContents,
    addNewGeneralResource,
    getAllGeneralResources,
    changeGeneralContentStatus,
    addNewClassRecording,
    getAllClassRecordings,
};
