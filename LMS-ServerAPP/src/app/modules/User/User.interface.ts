export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "super admin" | "admin" | "student" | "instructor";
  isActive: boolean;
};

export type TUserLogin = {
  email: string;
  password: string;
};

export type TUserTokenData = {
  userId: string;
  role: string;
};

export const USER_ROLE = {
  admin: "admin",
  user: "user",
  super_admin: "super admin",
} as const;
type keys = keyof typeof USER_ROLE;
export type TUserRole = (typeof USER_ROLE)[keys];
