import { baseAPI } from "../../API/baseAPI";

const eventAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createNewEvent: builder.mutation({
      query: (newEvent) => ({
        url: "/events/create-event",
        method: "POST",
        body: newEvent,
      }),
    }),
    getAllEvents: builder.query({
      query: () => "/events/get-all-events",
    }),
    getEventById: builder.query({
      query: (id) => `/events/${id}`,
    }),
  }),
});
export const {
  useCreateNewEventMutation,
  useGetAllEventsQuery,
  useGetEventByIdQuery,
} = eventAPI;
