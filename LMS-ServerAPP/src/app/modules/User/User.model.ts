import { Schema, model } from "mongoose";
import { TUser } from "./User.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, "Name Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password Required"],
    },
    role: {
      type: String,
      enum: ["super admin", "admin", "student", "instructor"],
      required: [true, "Role required"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, 12);
  next();
});

export const User = model<TUser>("User", userSchema);
