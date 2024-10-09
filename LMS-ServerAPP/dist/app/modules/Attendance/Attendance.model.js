"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendance = void 0;
const mongoose_1 = require("mongoose");
const AttendanceSchema = new mongoose_1.Schema({
    Student_ID: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Student ID required"],
        ref: "User",
    },
    TodayDate: {
        type: String,
        required: [true, "Date is required"],
    },
    time: { type: String, default: null }, // The time the student checked in
    attendance_status: {
        type: String,
        //enum: ["present", "late", "absent"],
        required: true,
    }, // Attendance status: 'present', 'late', or 'absent'
});
exports.Attendance = (0, mongoose_1.model)("Attendance", AttendanceSchema);
