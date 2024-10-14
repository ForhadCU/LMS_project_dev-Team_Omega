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
exports.WeeklyNotesServices = void 0;
const mongoose_1 = require("mongoose");
const Notes_model_1 = require("./Notes.model");
const createFirstWeekNote = (studID, instructorID, batch) => __awaiter(void 0, void 0, void 0, function* () {
    const firstNote = {
        UserID: new mongoose_1.Types.ObjectId(studID),
        InstructorID: new mongoose_1.Types.ObjectId(instructorID),
        batch: batch,
        week: 0,
        note: "N/A",
    };
    const res = yield Notes_model_1.WeeklyNotes.create(firstNote);
    return res;
});
const createNewWeekNotes = (evalNotes) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Notes_model_1.WeeklyNotes.insertMany(evalNotes);
    return res;
});
const createNewEvalNote = (evalNote) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Notes_model_1.WeeklyNotes.create(evalNote);
    return res;
});
exports.WeeklyNotesServices = {
    createFirstWeekNote,
    createNewWeekNotes,
    createNewEvalNote,
};
