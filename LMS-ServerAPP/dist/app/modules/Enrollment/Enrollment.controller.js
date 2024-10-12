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
exports.EnrollmentControllers = void 0;
const globalTryCatchFunc_1 = __importDefault(require("../../utils/globalTryCatchFunc"));
const Enrollment_services_1 = require("./Enrollment.services");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const enrollIntoCourse = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Student_ID, Enrolled_Course, student_batch } = req.body;
    console.log(req.body);
    const result = yield Enrollment_services_1.EnrollmentServices.enrollIntoCourse(Student_ID, Enrolled_Course, student_batch);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Sucessfully enrolled into course",
        data: result,
    });
}));
const getAllEnrolledCOurses = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Enrollment_services_1.EnrollmentServices.getEnrollments(req.query);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Sucessfully fetched enrolled courses",
        data: result,
    });
}));
exports.EnrollmentControllers = {
    enrollIntoCourse,
    getAllEnrolledCOurses,
};
