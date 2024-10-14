import AppError from "../../errors/AppError";
import { sendImageToCloudinary } from "../../utils/uploadImage";
import { StudentProfile } from "./Student.model";

const getStudentProfile = async (id: string) => {
  const getStudentPProfile = await StudentProfile.findOne({ userID: id });
  if (!getStudentPProfile) {
    throw new AppError(404, "Student Profile not found");
  }
  return getStudentPProfile;
};

const updateStudentData = async (file: any, studentData: any) => {
  if (file === null) {
    throw new AppError(404, "Upload Image not found");
  }
  const imageName = `${studentData?.fullName}-${new Date().toString()}`;
  const path = file?.path;
  console.log(imageName, path);

  const { secure_url } = await sendImageToCloudinary(imageName, path);
  const UpdatedProfile = {
    fullName: studentData.fullName,
    userID: studentData.userID,
    age: studentData.age,
    subjectMajor: studentData.subjectMajor,
    batch: studentData.batch,
    address: studentData.address,
    img: secure_url,
  };
  const result = await StudentProfile.findOneAndUpdate(
    { userID: studentData.userID },
    UpdatedProfile,
    { new: true }
  );
  return result;
};

export const StudentProfileSrvices = {
  getStudentProfile,
  updateStudentData,
};
