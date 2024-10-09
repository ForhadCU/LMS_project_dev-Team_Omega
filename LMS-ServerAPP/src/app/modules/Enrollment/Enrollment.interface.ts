import { Types } from "mongoose";

export type TEnrollment = {
  Student_ID: Types.ObjectId;
  Enrolled_Course: Types.ObjectId;
  Enroll_date: Date;
};
