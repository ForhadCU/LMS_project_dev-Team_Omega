import AppError from "../../errors/AppError";
import { sendImageToCloudinary } from "../../utils/uploadImage";
import { TEvents } from "./Events.interface";
import { Events } from "./Events.model";

const createNewEvent = async (file: any, eventData: any) => {
  if (file === null) {
    throw new AppError(404, "Upload Image not found");
  }
  const imageName = `${eventData?.title}-${new Date().toString()}`;
  const path = file?.path;
  const { secure_url } = await sendImageToCloudinary(imageName, path);
  const newEvent: TEvents = {
    title: eventData.title,
    description: eventData.description,
    eventDate: eventData.eventDate,
    img: secure_url as string,
  };
  const result = await Events.create(newEvent);
  return result;
};

const getAllEvents = async (rawQuery: any) => {
  let query: any = {};
  for (let key in rawQuery) {
    query[key] = rawQuery[key];
  }
  const result = await Events.find(query);
  return result;
};

export const EventServices = {
  createNewEvent,
  getAllEvents,
};
