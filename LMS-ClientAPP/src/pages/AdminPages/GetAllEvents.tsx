import Spinner from "../../components/Spinner/Spinner";
import { useGetAllEventsQuery } from "../../redux/feature/event/eventAPI";
import EventCard from "./EventCard";

const GetAllEvents = () => {
  const { isLoading, data: events } = useGetAllEventsQuery();
  let allEvents = events?.data;
  console.log(allEvents);
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-center text-4xl mb-4 font-bold text-indigo-700">
        All events{" "}
      </h1>

      <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-10 pt-4 ">
        {allEvents?.map((event) => (
          <EventCard key={event._id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default GetAllEvents;
