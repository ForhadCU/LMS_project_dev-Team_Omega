import { Types } from "mongoose";

export type TQuiz = {
  Course_ID: Types.ObjectId;
  Quiz_No: string;
  Quiz_Type: "daily" | "weekly";
  Date: string;
  Form_link?: string;
};

export type TQuestion = {
  Quiz_ID: Types.ObjectId;
  Question: string;
  Mark: number;
  Options: Array<string>;
  Answer: string;
};
