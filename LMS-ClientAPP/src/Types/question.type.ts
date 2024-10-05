export type TQuestion = {
  _id: string;
  Question_NO: number;
  Question: string;
  Mark: number;
  Options: Array<string>;
  Answer: string;
};

export type TQuestions = {
  Course_ID: string;
  Quiz_No: string;
  Quiz_Type: "daily" | "weekly";
  Date: string;
  Questions: Array<TQuestion>;
  Form_link?: string;
};
