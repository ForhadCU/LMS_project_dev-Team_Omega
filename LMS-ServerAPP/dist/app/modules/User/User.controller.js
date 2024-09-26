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
exports.UserControllers = void 0;
const globalTryCatchFunc_1 = __importDefault(require("../../utils/globalTryCatchFunc"));
const User_service_1 = require("./User.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const config_1 = __importDefault(require("../../config"));
const createNewUser = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_service_1.UserServices.createNewUser(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User is created succesfully",
        data: result,
    });
}));
const getAllUser = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_service_1.UserServices.getAllUsers();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Users fetched succesfully",
        data: result,
    });
}));
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const creds = req.body;
        const { accesToken, safeUser } = yield User_service_1.UserServices.loginUser(creds);
        res.cookie("token", accesToken, {
            secure: config_1.default.node_env === "production",
            httpOnly: true,
            sameSite: "none",
            maxAge: 1000 * 60 * 60 * 24 * 365,
        });
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "User is logged in succesfully",
            data: safeUser,
            accesToken,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
});
const userSoftDelete = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.body.delemail;
    const result = yield User_service_1.UserServices.deleteUser(userEmail);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User deleted successfully",
        data: null,
    });
}));
const userChangePassword = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    const newPass = req.body.newPassword;
    const result = yield User_service_1.UserServices.userChangePassword(newPass, token);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User Password updated successfully",
        data: result,
    });
}));
const createUsers = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = req.body.users;
    const result = yield User_service_1.UserServices.createUsers(users);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Users created successfully",
        data: result,
    });
}));
exports.UserControllers = {
    createNewUser,
    userLogin,
    userSoftDelete,
    userChangePassword,
    getAllUser,
    createUsers,
};
