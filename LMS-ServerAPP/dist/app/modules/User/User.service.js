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
const createNewUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.User.create(user);
    return result;
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.User.find({});
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
const deleteUser = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.UserServices = {
    createNewUser,
    getAllUsers,
    loginUser,
};
