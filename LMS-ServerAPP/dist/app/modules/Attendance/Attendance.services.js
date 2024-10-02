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
exports.AttendanceServices = void 0;
const mongoose_1 = require("mongoose");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const formatTimeDate_1 = require("../../utils/formatTimeDate");
const Attendance_model_1 = require("./Attendance.model");
const StudentCheckIn = (studentID) => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    let attendance_status = "absent";
    let hour = currentDate.getHours();
    let mins = currentDate.getMinutes();
    const TodayDate = (0, formatTimeDate_1.formatDate)(currentDate);
    const time = (0, formatTimeDate_1.formatTime)(hour, mins);
    if (hour >= 6 && hour <= 8) {
        attendance_status = "present";
    }
    else if (hour >= 9 && hour <= 13) {
        attendance_status = "late";
    }
    else {
        throw new AppError_1.default(401, "Can't Check In now.Please try between 6:00am-8:59am or 9:00am-1:59pm");
    }
    const attendanceData = {
        Student_ID: new mongoose_1.Types.ObjectId(studentID),
        TodayDate: TodayDate,
        time,
        attendance_status,
    };
    const existingAttendance = yield Attendance_model_1.Attendance.findOne({
        Student_ID: studentID,
        TodayDate: TodayDate,
    });
    if (existingAttendance) {
        throw new AppError_1.default(401, "Your Attendance has already been taken");
    }
    const result = yield Attendance_model_1.Attendance.create(attendanceData);
    return result;
});
const getAllAttendance = (rawQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    for (let key in rawQuery) {
        query[key] = rawQuery[key];
    }
    const result = yield Attendance_model_1.Attendance.find(query).populate("Student_ID", "name email");
    return result;
});
exports.AttendanceServices = {
    StudentCheckIn,
    getAllAttendance,
};
