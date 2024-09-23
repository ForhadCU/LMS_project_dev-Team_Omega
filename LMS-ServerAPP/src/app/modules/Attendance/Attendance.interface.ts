import { Types } from "mongoose";

export type TStudentAttendance = {
  Student_ID: Types.ObjectId;
  TodayDate: string;
  time: string;
  attendance_status: string;
};
