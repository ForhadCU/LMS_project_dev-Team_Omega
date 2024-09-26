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
const globalTryCatchFunc_1 = __importDefault(require("../utils/globalTryCatchFunc"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const config_1 = __importDefault(require("../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (...requiredRoles) => {
    return (0, globalTryCatchFunc_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const tokenString = req.headers.authorization;
        if (!tokenString) {
            throw new AppError_1.default(401, "Unauthorized access denied");
        }
        const token = tokenString === null || tokenString === void 0 ? void 0 : tokenString.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_secret);
        const { role } = decoded;
        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError_1.default(401, "Unauthorized access denied");
        }
        req.user = decoded;
        next();
    }));
};
exports.default = auth;
