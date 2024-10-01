import { model, Schema } from "mongoose";
import { TComments, TForum } from "./Forums.interface";

const ForumsSchema = new Schema<TForum>(
  {
    UserID: { type: Schema.Types.ObjectId, ref: "User", required: true },
    Title: { type: String, required: true },
    body: { type: String, required: true },
    imgs: [{ type: String }],
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const ForumCommentsSchema = new Schema<TComments>(
  {
    UserID: { type: Schema.Types.ObjectId, ref: "User", required: true },
    ForumID: { type: Schema.Types.ObjectId, ref: "Forums", required: true },
    message: { type: String, required: true },
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const Forums = model<TForum>("Forums", ForumsSchema);
export const ForumComments = model<TComments>(
  "ForumComments",
  ForumCommentsSchema
);
