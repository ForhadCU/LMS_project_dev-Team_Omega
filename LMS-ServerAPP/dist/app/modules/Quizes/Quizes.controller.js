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
exports.QuizControllers = void 0;
const globalTryCatchFunc_1 = __importDefault(require("../../utils/globalTryCatchFunc"));
const Quizes_services_1 = require("./Quizes.services");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const createNewQuiz = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Quizes_services_1.QuizServices.createNewQuiz(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Quiz created successfully",
        data: result,
    });
}));
const createNewIOSQuiz = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Quizes_services_1.QuizServices.createNewIOSQuiz(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Quiz created (All platform) successfully",
        data: result,
    });
}));
const createNewJLingoQuiz = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Quizes_services_1.QuizServices.createJLingoQuiz(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Quiz created (JLINGO) successfully",
        data: result,
    });
}));
const getAllQuizes = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Quizes_services_1.QuizServices.getAllQuizes(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Quizes fetched successfully",
        data: result,
    });
}));
const getAllIOSQuizes = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Quizes_services_1.QuizServices.getIOSQuizes(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Quizes fetched (All platform) successfully",
        data: result,
    });
}));
const getAllJLingoQuizes = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Quizes_services_1.QuizServices.getAllJLingoQuizzes(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Quizes fetched (JLINGO) successfully",
        data: result,
    });
}));
exports.QuizControllers = {
    createNewQuiz,
    getAllQuizes,
    createNewIOSQuiz,
    getAllIOSQuizes,
    createNewJLingoQuiz,
    getAllJLingoQuizes,
};
