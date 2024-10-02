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
exports.ForumControllers = void 0;
const globalTryCatchFunc_1 = __importDefault(require("../../utils/globalTryCatchFunc"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const Forums_services_1 = require("./Forums.services");
const createNewForum = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Forums_services_1.ForumServices.createNewForum(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "New forum posted!",
        data: result,
    });
}));
const getAllForums = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rawQuery = req.query;
    const result = yield Forums_services_1.ForumServices.getAllForums(rawQuery);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Posted forums fetched!",
        data: result,
    });
}));
const createNewComment = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Forums_services_1.ForumServices.createNewComment(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Commented!",
        data: result,
    });
}));
const getForumComments = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rawQuery = req.query;
    const result = yield Forums_services_1.ForumServices.getForumComments(rawQuery);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "comments fetched!",
        data: result,
    });
}));
exports.ForumControllers = {
    createNewForum,
    getAllForums,
    createNewComment,
    getForumComments,
};
