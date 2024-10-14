import { Types } from "mongoose";

export type TNotes = {
  UserID: Types.ObjectId;
  InstructorID: Types.ObjectId;
  batch: number;
  week: number;
  note: string;
};
