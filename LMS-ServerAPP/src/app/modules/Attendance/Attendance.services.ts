import { Types } from "mongoose";
import AppError from "../../errors/AppError";
import { formatDate, formatTime } from "../../utils/formatTimeDate";
import { TStudentAttendance } from "./Attendance.interface";
import { Attendance } from "./Attendance.model";

const StudentCheckIn = async (studentID: string) => {
  const currentDate = new Date();
  let attendance_status: string = "absent";
  let hour = currentDate.getHours();
  let mins = currentDate.getMinutes();
  const TodayDate = formatDate(currentDate);
  const time = formatTime(hour, mins);
  if (hour >= 6 && hour <= 8) {
    attendance_status = "present";
  } else if (hour >= 9 && hour <= 13) {
    attendance_status = "late";
  } else {
    throw new AppError(
      401,
      "Can't Check In now.Please try between 6:00am-8:59am or 9:00am-1:59pm"
    );
  }
  const attendanceData: TStudentAttendance = {
    Student_ID: new Types.ObjectId(studentID),
    TodayDate: TodayDate,
    time,
    attendance_status,
  };
  const existingAttendance = await Attendance.findOne({
    Student_ID: studentID,
    TodayDate: TodayDate,
  });
  if (existingAttendance) {
    throw new AppError(401, "Your Attendance has already been taken");
  }
  const result = await Attendance.create(attendanceData);
  return result;
};

const getAllAttendance = async (rawQuery: any) => {
  let query: any = {};
  for (let key in rawQuery) {
    query[key] = rawQuery[key];
  }
  const result = await Attendance.find(query).populate(
    "Student_ID",
    "name email"
  );
  return result;
};

export const AttendanceServices = {
  StudentCheckIn,
  getAllAttendance,
};
