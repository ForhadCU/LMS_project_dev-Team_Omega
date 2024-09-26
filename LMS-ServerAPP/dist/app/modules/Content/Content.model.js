"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const mongoose_1 = require("mongoose");
const ContentSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title of this content required"],
    },
    description: {
        type: String,
        required: [
            true,
            "Description of this title, what this content is about needed.",
        ],
    },
    courseCode: {
        type: String,
        required: [true, "Course code required.Content belongs to which course?"],
    },
    contentType: {
        type: String,
        enum: ["file", "video"],
        required: [true, "What kind of content? File or video?"],
    },
    contentlink: {
        type: String,
        required: [true, "content link required"],
    },
}, {
    timestamps: true,
});
exports.Content = (0, mongoose_1.model)("Content", ContentSchema);
