import AppError from "../../errors/AppError";
import { Course } from "../Courses/Courses.model";
import {
  TClassRecordings,
  TContent,
  TGeneralResources,
} from "./Content.interface";
import { ClassRecording, Content, GeneralContent } from "./Content.model";

const addNewContent = async (contentData: TContent) => {
  const getCourse = await Course.findById(contentData.courseID);
  if (!getCourse) {
    throw new AppError(404, "Course not found.");
  }
  const result = await Content.create(contentData);
  return result;
};

const addNewGeneralResource = async (generalResource: TGeneralResources) => {
  const createNewGenResource = await GeneralContent.create(generalResource);
  return createNewGenResource;
};

const addNewClassRecording = async (classRecording: TClassRecordings) => {
  const addNewRecording = await ClassRecording.create(classRecording);
  return addNewRecording;
};

const getAllGeneralResources = async (rawQuery: any) => {
  let query: any = {};
  let page = 1;
  let limit = 4;

  for (let key in rawQuery) {
    if (key === "page") {
      page = rawQuery[key];
    }
    if (key === "limit") {
      limit = rawQuery[key];
    }
    query[key] = rawQuery[key];
  }
  const allGenResources = await GeneralContent.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort("createdAt");
  return allGenResources;
};
const getAllClassRecordings = async (rawQuery: any) => {
  let query: any = {};
  let page = 1;
  let limit = 4;

  for (let key in rawQuery) {
    if (key === "page") {
      page = rawQuery[key];
    }
    if (key === "limit") {
      limit = rawQuery[key];
    }
    query[key] = rawQuery[key];
  }
  const allGenResources = await ClassRecording.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort("createdAt");
  return allGenResources;
};

const getContents = async (rawQuery: any) => {
  let query: any = {};
  let page = 1;
  let limit = 10;
  for (let key in rawQuery) {
    if (query[key] === "page") {
      page = query[key];
    }
    if (query[key] === "limit") {
      limit = query[key];
    }
    query[key] = rawQuery[key];
  }
  const result = await Content.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort("createdAt");
  return result;
};

const changeGeneralContentStatus = async (status: string, id: string) => {
  const result = await GeneralContent.findByIdAndUpdate(
    id,
    { status: status },
    { new: true }
  );
  return result;
};

export const ContentServices = {
  addNewContent,
  getContents,
  addNewGeneralResource,
  getAllGeneralResources,
  changeGeneralContentStatus,
  addNewClassRecording,
  getAllClassRecordings,
};
