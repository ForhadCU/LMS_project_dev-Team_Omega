export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type GeneralUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
};
