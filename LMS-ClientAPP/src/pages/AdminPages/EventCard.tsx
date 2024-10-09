import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import moment from "moment"; // For formatting the date
import { useNavigate } from "react-router-dom";
import ScheduleIcon from "@mui/icons-material/Schedule";

const EventCard = ({ event }) => {
  const { description, title, img, eventDate, _id } = event;
  const navigate = useNavigate();

  // Truncate description to a specific length and add "..." at the end if too long
  const truncateDescription = (desc, length) => {
    return desc.length > length ? desc.substring(0, length) + "..." : desc;
  };
  const handleSeeDetails = () => {
    navigate(`/event/${_id}`);
  };

  return (
    <Card className="max-w-[24rem] h-[26rem] rounded-xl flex flex-col justify-between shadow-lg border border-gray-200">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 p-0 rounded-none"
      >
        <img
          src={img}
          alt={title}
          className="h-56 w-full object-cover rounded-xl hover:brightness-110 hover:scale-105"
        />
      </CardHeader>

      <CardBody className="flex-1 p-4">
        <Typography
          variant="h5"
          color="blue-gray"
          className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-600"
        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className="mt-2 font-normal text-sm"
        >
          {truncateDescription(description, 100)} {/* Truncate to 100 chars */}
        </Typography>
      </CardBody>

      <CardFooter className="flex items-center justify-between p-3 border-t border-gray-200">
        <button
          onClick={handleSeeDetails}
          className="text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-emerald-400 hover:to-teal-400 rounded-full px-2 py-2 font-semibold text-sm shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          See Details
        </button>
        <div className="flex items-center space-x-1 text-indigo-600 bg-gray-100 px-2 py-2 rounded-full shadow-sm">
          <ScheduleIcon></ScheduleIcon>
          <Typography
            variant="small"
            className="font-medium text-xs text-indigo-600"
          >
            {moment(eventDate).format("MMM Do, YYYY [at] h:mm A")}
          </Typography>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
