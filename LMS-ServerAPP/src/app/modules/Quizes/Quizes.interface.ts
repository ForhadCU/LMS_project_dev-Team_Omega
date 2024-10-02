import { Types } from "mongoose";

export type TQuiz = {
  Course_ID: Types.ObjectId;
  Quiz_No: string;
  Quiz_Type: "daily" | "weekly";
  Date: string;
  Questions: Array<TQuestion>;
  Form_link?: string;
};

export type TQuestion = {
  Question_NO: number;
  Question: string;
  Mark: number;
  Options: Array<string>;
  Answer: string;
};
