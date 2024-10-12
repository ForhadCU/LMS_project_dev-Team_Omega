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
exports.ContentControllers = void 0;
const globalTryCatchFunc_1 = __importDefault(require("../../utils/globalTryCatchFunc"));
const Content_service_1 = require("./Content.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const addNewContent = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentData = req.body;
    const result = yield Content_service_1.ContentServices.addNewContent(contentData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Content uploaded successfully",
        data: result,
    });
}));
const getAllContents = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rawquery = req.query;
    const result = yield Content_service_1.ContentServices.getContents(rawquery);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Contents fetched successfully",
        data: result,
    });
}));
const addNewGeneralContent = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const generalContent = req.body;
    const result = yield Content_service_1.ContentServices.addNewGeneralResource(generalContent);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Contents created successfully",
        data: result,
    });
}));
const getGeneralResources = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rawQuery = req.query;
    const result = yield Content_service_1.ContentServices.getAllGeneralResources(rawQuery);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "General Contents fetched successfully",
        data: result,
    });
}));
const addNewClassRecording = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const classRecording = req.body;
    const result = yield Content_service_1.ContentServices.addNewClassRecording(classRecording);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Class recordings added successfully",
        data: result,
    });
}));
const getAllClassRecording = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rawQuery = req.query;
    const result = yield Content_service_1.ContentServices.getAllClassRecordings(rawQuery);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Class Recordings fetched successfully",
        data: result,
    });
}));
const changeGeneralContentStatus = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status, id } = req.body;
    const result = yield Content_service_1.ContentServices.changeGeneralContentStatus(status, id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "General Contents status changed successfully",
        data: result,
    });
}));
exports.ContentControllers = {
    addNewContent,
    getAllContents,
    addNewGeneralContent,
    getGeneralResources,
    changeGeneralContentStatus,
    addNewClassRecording,
    getAllClassRecording,
};
