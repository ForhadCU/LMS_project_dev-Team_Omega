import { model, Schema, Types } from "mongoose";
import { TContent } from "./Content.interface";

const ContentSchema = new Schema<TContent>(
  {
    title: {
      type: String,
      required: [true, "Title of this content required"],
    },
    description: {
      type: String,
      required: [
        true,
        "Description of this title, what this content is about needed.",
      ],
    },
    courseID: {
      type: Schema.Types.ObjectId,
      required: [true, "Course code required.Content belongs to which course?"],
    },
    contentType: {
      type: String,
      enum: ["file", "video", "resource", "lecture"],
      required: [true, "What kind of content? File or video?"],
    },
    contentlink: {
      type: String,
      required: [true, "content link required"],
    },
    createDate: {
      type: String,
      required: [true, "Creation Date needed"],
    },
  },
  {
    timestamps: true,
  }
);

export const Content = model<TContent>("Content", ContentSchema);
