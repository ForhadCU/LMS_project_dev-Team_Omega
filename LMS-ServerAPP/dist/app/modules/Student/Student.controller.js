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
exports.StudentProfileControllers = void 0;
const globalTryCatchFunc_1 = __importDefault(require("../../utils/globalTryCatchFunc"));
const Student_service_1 = require("./Student.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const getStudentProfile = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    const result = yield Student_service_1.StudentProfileSrvices.getStudentProfile(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Users Profile fetched succesfully",
        data: result,
    });
}));
const updateStudentData = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventdata = req.body;
    console.log(eventdata);
    const result = yield Student_service_1.StudentProfileSrvices.updateStudentData(req.file, eventdata);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Student Info updated successfully",
        data: result,
    });
}));
exports.StudentProfileControllers = {
    getStudentProfile,
    updateStudentData,
};
