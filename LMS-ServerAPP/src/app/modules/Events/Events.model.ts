import { model, Schema } from "mongoose";
import { TEvents } from "./Events.interface";

const EventsSchema = new Schema<TEvents>({
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

export const Events = model<TEvents>("Events", EventsSchema);
