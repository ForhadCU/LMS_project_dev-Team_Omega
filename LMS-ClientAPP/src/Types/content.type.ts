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

export type TGeneralResources = {
  title: string;
  description: string;
  img: string;
  link: string;
  status: "pending" | "active" | "inactive";
  createdAt: string;
};

export type TClassRecordings = {
  title: string;
  date: string;
  link: string;
};
