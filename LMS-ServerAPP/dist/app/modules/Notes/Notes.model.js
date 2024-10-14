"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeklyNotes = void 0;
const mongoose_1 = require("mongoose");
const NotesSchema = new mongoose_1.Schema({
    UserID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User", // Reference to the User collection
        required: [true, "User ID is required"],
    },
    InstructorID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User", // Reference to the Instructor collection
        required: [true, "Instructor ID is required"],
    },
    batch: {
        type: Number,
        required: [true, "Batch no required"],
    },
    week: {
        type: Number,
        required: [true, "Week number is required"],
    },
    note: {
        type: String,
        required: [true, "Note content is required"],
    },
}, {
    timestamps: true,
});
exports.WeeklyNotes = (0, mongoose_1.model)("WeeklyNotes", NotesSchema);
