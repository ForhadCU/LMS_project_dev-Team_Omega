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
exports.AttendanceControllers = void 0;
const globalTryCatchFunc_1 = __importDefault(require("../../utils/globalTryCatchFunc"));
const Attendance_services_1 = require("./Attendance.services");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const StudentCheckIn = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const studentID = req.params.id;
    const result = yield Attendance_services_1.AttendanceServices.StudentCheckIn(studentID);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Check In Complete for today!",
        data: result,
    });
}));
const GetAllStudentAttendance = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rawQuery = req.query;
    const result = yield Attendance_services_1.AttendanceServices.getAllAttendance(rawQuery);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Attendance data fetched successfully!",
        data: result,
    });
}));
exports.AttendanceControllers = {
    StudentCheckIn,
    GetAllStudentAttendance,
};
