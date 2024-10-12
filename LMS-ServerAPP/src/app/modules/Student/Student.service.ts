import AppError from "../../errors/AppError";
import { StudentProfile } from "./Student.model";

const getStudentProfile = async (id: string) => {
  const getStudentPProfile = await StudentProfile.findOne({ userID: id });
  if (!getStudentPProfile) {
    throw new AppError(404, "Student Profile not found");
  }
  return getStudentPProfile;
};

export const StudentProfileSrvices = {
  getStudentProfile,
};
