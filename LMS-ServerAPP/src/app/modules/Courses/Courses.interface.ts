import { Types } from "mongoose";

export type TCourse = {
  title: string;
  code: string;
  description: string;
  duration: number;
  img: string;
  instructors: Array<Types.ObjectId>;
  courseType: "language" | "technical" | "personalDevelopment";
  isActive: boolean;
};
