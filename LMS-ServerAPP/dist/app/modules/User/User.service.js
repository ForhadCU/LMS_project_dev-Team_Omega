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
exports.UserServices = void 0;
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const User_model_1 = require("./User.model");
const User_utils_1 = require("./User.utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const sendEmail_1 = require("../../utils/sendEmail");
const createNewUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.User.create(user);
    const mailBody = `<p> ${user.name} your account has been created. Login with this password ${user.password} </p>`;
    (0, sendEmail_1.sendEmail)(user.email, mailBody);
    return result;
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.User.find({}).select("-password -__v");
    return result;
});
const loginUser = (loginCred) => __awaiter(void 0, void 0, void 0, function* () {
    const getUser = yield User_model_1.User.findOne({ email: loginCred.email });
    if (!getUser) {
        throw new AppError_1.default(404, "User with that email does not exist.");
    }
    if (!(yield (0, User_utils_1.verifyPassword)(loginCred.password, getUser.password))) {
        throw new AppError_1.default(404, "Password mismatch");
    }
    if (!getUser.isActive) {
        throw new AppError_1.default(404, "User is no longer active.");
    }
    const jwtpayload = {
        userId: getUser._id.toString(),
        role: getUser.role,
    };
    const accesToken = (0, User_utils_1.createAccessToken)(jwtpayload, config_1.default.jwt_secret, "10d");
    const safeUser = JSON.parse(JSON.stringify(getUser));
    delete safeUser.password;
    return {
        accesToken,
        safeUser,
    };
});
const userChangePassword = (newPass, token) => __awaiter(void 0, void 0, void 0, function* () {
    const decode = jsonwebtoken_1.default.verify(token, config_1.default.jwt_secret);
    console.log(newPass);
    const getUser = yield User_model_1.User.findOne({ _id: decode.userId });
    if (!getUser) {
        throw new Error("User does not exist");
    }
    if (!getUser.isActive) {
        throw new Error("User No longer Active.");
    }
    const encryptedPass = yield bcrypt_1.default.hash(newPass, 12);
    yield User_model_1.User.findByIdAndUpdate({ _id: decode.userId }, { password: encryptedPass }, { new: true });
});
const deleteUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const getUser = yield User_model_1.User.findOne({ email: email });
    if (!getUser) {
        throw new Error("User with that email does not exist.");
    }
    const data = yield User_model_1.User.findOneAndUpdate({ email: email }, { isActive: false }, { new: true });
    return data;
});
const createUsers = (users) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUsers = yield User_model_1.User.insertMany(users);
    return createdUsers;
});
exports.UserServices = {
    createNewUser,
    getAllUsers,
    loginUser,
    deleteUser,
    userChangePassword,
    createUsers,
};
