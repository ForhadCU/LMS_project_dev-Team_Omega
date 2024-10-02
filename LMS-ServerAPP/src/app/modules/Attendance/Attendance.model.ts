import { model, Schema } from "mongoose";
import { TStudentAttendance } from "./Attendance.interface";

const AttendanceSchema = new Schema<TStudentAttendance>({
  Student_ID: {
    type: Schema.Types.ObjectId,
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

export const Attendance = model<TStudentAttendance>(
  "Attendance",
  AttendanceSchema
);
