export type TContent = {
  _id: string;
  title: string;
  description: string;
  courseID: string;
  contentType: "file" | "video" | "resource" | "lecture";
  contentlink: string;
  createDate: string;
};

export type TContents = {
  contents: TContent[];
};
