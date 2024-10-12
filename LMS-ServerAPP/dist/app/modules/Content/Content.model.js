"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRecording = exports.GeneralContent = exports.Content = void 0;
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
    courseID: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Course code required.Content belongs to which course?"],
    },
    contentType: {
        type: String,
        enum: ["file", "video", "resource", "lecture"],
        required: [true, "What kind of content? File or video?"],
    },
    contentlink: {
        type: String,
        required: [true, "content link required"],
    },
    createDate: {
        type: String,
        required: [true, "Creation Date needed"],
    },
}, {
    timestamps: true,
});
const GeneralContentSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title required."],
    },
    description: {
        type: String,
        required: [true, "Description needed"],
    },
    img: {
        type: String,
        required: [true, "Image required"],
    },
    link: {
        type: String,
        required: [true, "link required"],
    },
    status: {
        type: String,
        enum: ["pending", "active", "inactive"],
        default: "pending",
    },
}, {
    timestamps: true,
});
const ClassRecordingsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title required."],
    },
    date: {
        type: String,
        required: [true, "Date required"],
    },
    link: {
        type: String,
        required: [true, "Recording drive link reqiored"],
    },
}, {
    timestamps: true,
});
exports.Content = (0, mongoose_1.model)("Content", ContentSchema);
exports.GeneralContent = (0, mongoose_1.model)("GeneralContent", GeneralContentSchema);
exports.ClassRecording = (0, mongoose_1.model)("ClassRecordings", ClassRecordingsSchema);
