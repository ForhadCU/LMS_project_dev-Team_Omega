import { model, Schema } from "mongoose";
import { TNotes } from "./Notes.interface";

const NotesSchema = new Schema<TNotes>(
  {
    UserID: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User collection
      required: [true, "User ID is required"],
    },
    InstructorID: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the Instructor collection
      required: [true, "Instructor ID is required"],
    },
    batch: {
      type: Number,
      required: [true, "Batch no required"],
    },
    week: {
      type: Number,
      required: [true, "Week number is required"],
    },
    note: {
      type: String,
      required: [true, "Note content is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const WeeklyNotes = model<TNotes>("WeeklyNotes", NotesSchema);
