import { model, Schema } from "mongoose";
import { TEnrollment } from "./Enrollment.interface";

const EnrollmentSchema = new Schema<TEnrollment>({
  Student_ID: {
    type: Schema.Types.ObjectId,
    required: [
      true,
      "Unknown person enrollment not allowed.Student ID required.",
    ],
    ref: "User",
  },
  Enrolled_Course: {
    type: Schema.Types.ObjectId,
    required: [true, "Course ID required."],
    ref: "Courses",
  },
  Enroll_date: {
    type: Date,
    required: [true, "Date required"],
  },
});

export const Enrollment = model<TEnrollment>("Enrollment", EnrollmentSchema);
