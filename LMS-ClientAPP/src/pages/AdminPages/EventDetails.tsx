import { useParams } from "react-router-dom";
import { useGetEventByIdQuery } from "../../redux/feature/event/eventAPI";
import moment from "moment";
import Spinner from "../../components/Spinner/Spinner";
import ScheduleIcon from "@mui/icons-material/Schedule";

const EventDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetEventByIdQuery(id);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    return (
      <div className="text-center mt-10">Error loading event details.</div>
    );
  }

  const event = data.data;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-600">
        {event.title}
      </h1>
      <img
        src={event.img}
        alt={event.title}
        className="w-full h-auto mb-4 object-cover rounded-md"
      />
      <p className="text-gray-700 mb-4">{event.description}</p>
      <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg shadow-sm text-indigo-600">
        <ScheduleIcon></ScheduleIcon>
        <p className="text-sm font-medium text-indigo-600">
          Event Date:{" "}
          {moment(event.eventDate).format("MMM Do, YYYY [at] h:mm A")}
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
