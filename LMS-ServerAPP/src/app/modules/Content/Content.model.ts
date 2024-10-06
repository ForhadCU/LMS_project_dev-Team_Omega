import { model, Schema, Types } from "mongoose";
import { TContent, TGeneralResources } from "./Content.interface";

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

const GeneralContentSchema = new Schema<TGeneralResources>(
  {
    title: {
      type: String,
      required: [true, "Title required."],
    },
    description: {
      type: String,
      required: [true, "Description needed"],
    },
    img: {
      type: String,
      required: [true, "Image required"],
    },
    link: {
      type: String,
      required: [true, "link required"],
    },
    status: {
      type: String,
      enum: ["pending", "active", "inactive"],
      required: [true, "Status not found"],
    },
  },
  {
    timestamps: true,
  }
);

export const Content = model<TContent>("Content", ContentSchema);
export const GeneralContent = model<TGeneralResources>(
  "GeneralContent",
  GeneralContentSchema
);
