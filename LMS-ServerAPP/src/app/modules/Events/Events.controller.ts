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

export const EventsController = {
  createNewEvent,
};
