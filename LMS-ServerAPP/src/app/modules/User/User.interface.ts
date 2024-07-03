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

const USER_ROLE = {
  admin: "admin",
  user: "user",
} as const;

export type TUserRole = keyof typeof USER_ROLE;
