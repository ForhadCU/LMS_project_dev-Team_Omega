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
    <div>
      <h1 className="text-center text-2xl mb-3 font-bold">All events </h1>
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-10 pt-4 ">
        {allEvents?.map((event) => (
          <EventCard key={event._id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default GetAllEvents;
