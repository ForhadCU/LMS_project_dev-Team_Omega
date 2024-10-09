"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumComments = exports.Forums = void 0;
const mongoose_1 = require("mongoose");
const ForumsSchema = new mongoose_1.Schema({
    UserID: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    Title: { type: String, required: true },
    body: { type: String, required: true },
    imgs: [{ type: String }],
    likes: { type: Number, default: 0 },
}, {
    timestamps: true,
});
const ForumCommentsSchema = new mongoose_1.Schema({
    UserID: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    ForumID: { type: mongoose_1.Schema.Types.ObjectId, ref: "Forums", required: true },
    message: { type: String, required: true },
    likes: { type: Number, default: 0 },
}, {
    timestamps: true,
});
exports.Forums = (0, mongoose_1.model)("Forums", ForumsSchema);
exports.ForumComments = (0, mongoose_1.model)("ForumComments", ForumCommentsSchema);
