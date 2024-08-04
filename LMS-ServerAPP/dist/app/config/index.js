"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), ".env")) });
exports.default = {
    mongo_db_uri: process.env.MONGODB_CONNECT,
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SECRET,
    node_env: process.env.NODE_ENV,
};
