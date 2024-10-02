"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const mongoose_1 = require("mongoose");
const EventsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Events title is Missing"],
    },
    description: {
        type: String,
        required: [true, "Events description is Missing"],
    },
    eventDate: {
        type: Date,
        required: [true, "Events title is Missing"],
    },
    img: {
        type: String,
        required: [true, "Cover image url is missing"],
    },
});
exports.Events = (0, mongoose_1.model)("Events", EventsSchema);
