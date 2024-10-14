"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentProfileSrvices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const uploadImage_1 = require("../../utils/uploadImage");
const Student_model_1 = require("./Student.model");
const getStudentProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const getStudentPProfile = yield Student_model_1.StudentProfile.findOne({ userID: id });
    if (!getStudentPProfile) {
        throw new AppError_1.default(404, "Student Profile not found");
    }
    return getStudentPProfile;
});
const updateStudentData = (file, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    if (file === null) {
        throw new AppError_1.default(404, "Upload Image not found");
    }
    const imageName = `${studentData === null || studentData === void 0 ? void 0 : studentData.fullName}-${new Date().toString()}`;
    const path = file === null || file === void 0 ? void 0 : file.path;
    console.log(imageName, path);
    const { secure_url } = yield (0, uploadImage_1.sendImageToCloudinary)(imageName, path);
    const UpdatedProfile = {
        fullName: studentData.fullName,
        userID: studentData.userID,
        age: studentData.age,
        subjectMajor: studentData.subjectMajor,
        batch: studentData.batch,
        address: studentData.address,
        img: secure_url,
    };
    const result = yield Student_model_1.StudentProfile.findOneAndUpdate({ userID: studentData.userID }, UpdatedProfile, { new: true });
    return result;
});
exports.StudentProfileSrvices = {
    getStudentProfile,
    updateStudentData,
};
