import { Types } from "mongoose";
import { TNotes } from "./Notes.interface";
import { WeeklyNotes } from "./Notes.model";

const createFirstWeekNote = async (
  studID: string,
  instructorID: string,
  batch: number
) => {
  const firstNote: TNotes = {
    UserID: new Types.ObjectId(studID),
    InstructorID: new Types.ObjectId(instructorID),
    batch: batch,
    week: 0,
    note: "N/A",
  };

  const res = await WeeklyNotes.create(firstNote);
  return res;
};

const createNewWeekNotes = async (evalNotes: TNotes[]) => {
  const res = await WeeklyNotes.insertMany(evalNotes);
  return res;
};

const createNewEvalNote = async (evalNote: TNotes) => {
  const res = await WeeklyNotes.create(evalNote);
  return res;
};

export const WeeklyNotesServices = {
  createFirstWeekNote,
  createNewWeekNotes,
  createNewEvalNote,
};
