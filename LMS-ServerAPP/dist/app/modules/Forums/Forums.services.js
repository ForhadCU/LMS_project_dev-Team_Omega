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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumServices = void 0;
const Forums_model_1 = require("./Forums.model");
const createNewForum = (newforumData) => __awaiter(void 0, void 0, void 0, function* () {
    const createNewForum = yield Forums_model_1.Forums.create(newforumData);
    return createNewForum;
});
const getAllForums = (rawQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    let page = 1;
    let limit = 10;
    for (let key in rawQuery) {
        if (key === "page") {
            page = rawQuery[key];
        }
        else if (key === "limit") {
            limit = rawQuery[key];
        }
        else {
            query[key] = rawQuery[key];
        }
    }
    const res = yield Forums_model_1.Forums.find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort();
    return res;
});
const createNewComment = (commentData) => __awaiter(void 0, void 0, void 0, function* () {
    const newComment = yield Forums_model_1.ForumComments.create(commentData);
    return newComment;
});
const getForumComments = (rawQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    let page = 1;
    let limit = 10;
    for (let key in rawQuery) {
        if (key === "page") {
            page = rawQuery[key];
        }
        else if (key === "limit") {
            limit = rawQuery[key];
        }
        else {
            query[key] = rawQuery[key];
        }
    }
    const res = yield Forums_model_1.ForumComments.find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("UserID", "name email role");
    return res;
});
exports.ForumServices = {
    createNewForum,
    getAllForums,
    createNewComment,
    getForumComments,
};
