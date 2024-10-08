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

export type TIOSQuiz = {
  CourseID: Types.ObjectId;
  quiz_title: string;
  quiz_type: "daily" | "weekly";
  img?: string;
  form_link: string;
  quiz_date: string;
};
