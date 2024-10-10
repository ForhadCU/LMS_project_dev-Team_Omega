type TForumUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

export type TForum = {
  _id: string;
  UserID: TForumUser;
  Title: string;
  body: string;
  imgs?: Array<string>;
  likes: number;
  createdAt: string;
};

export type TForumComment = {
  _id: string;
  UserID: TForumUser;
  ForumID: string;
  message: string;
  likes: number;
  createdAt: string;
};
