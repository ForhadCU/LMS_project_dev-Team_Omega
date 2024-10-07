import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import sendResponse from "../../utils/sendResponse";
import { EventServices } from "./Events.services";

const createNewEvent = catchAsync(async (req: Request, res: Response) => {
  const eventdata = req.body;

  const result = await EventServices.createNewEvent(req.file, eventdata);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Event was created successfully",
    data: result,
  });
});

const createNewEventAlt = catchAsync(async (req: Request, res: Response) => {
  const result = await EventServices.createNewEventAlt(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Event was created successfully",
    data: result,
  });
});

const getAllEvents = catchAsync(async (req: Request, res: Response) => {
  const rawQuery = req.query;
  const result = await EventServices.getAllEvents(rawQuery);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Events were fetched successfully",
    data: result,
  });
});

export const EventsController = {
  createNewEvent,
  getAllEvents,
  createNewEventAlt,
};
