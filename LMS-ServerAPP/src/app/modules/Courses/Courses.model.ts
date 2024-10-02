import { model, Schema } from "mongoose";
import { TCourse } from "./Courses.interface";

const courseSchema = new Schema<TCourse>(
  {
    title: {
      type: String,
      required: [true, "Course title is required"],
    },
    code: {
      type: String,
      required: [true, "Course code is required"],
    },
    description: {
      type: String,
      required: [true, "Description of the course is required."],
    },
    duration: {
      type: Number,
      required: [true, "Duration(in Months) of this course is required"],
    },
    img: {
      type: String,
      default:
        "https://e7.pngegg.com/pngimages/329/915/png-clipart-computer-icons-educational-technology-learning-training-course-training-blue-angle.png",
    },
    instructors: {
      type: [Schema.Types.ObjectId],
      required: [true, "Instructors need to be added to the course."],
      ref: "User",
    },
    courseType: {
      type: String,
      enum: ["language", "technical", "personalDevelopment"],
      required: [
        true,
        "Course type required.Choose type between language , technical and personal development",
      ],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Course = model<TCourse>("Courses", courseSchema);
