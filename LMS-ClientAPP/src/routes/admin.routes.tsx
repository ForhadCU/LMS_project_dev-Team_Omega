import { Home, PersonAddAlt1, Person } from "@mui/icons-material";
import BookIcon from "@mui/icons-material/Book";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import EventIcon from "@mui/icons-material/Event";

export const adminRoutes = [
  {
    name: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    name: "Create User",
    path: "/create-user",
    icon: <PersonAddAlt1 />,
  },
  {
    name: "Get User",
    path: "/get-users",
    icon: <Person />,
  },
  {
    name: "Courses",
    path: "/course-list",
    icon: <BookIcon />,
  },
  {
    name: "Attendance List",
    path: "/attendance-list",
    icon: <CoPresentIcon />,
  },
  {
    name: "Event Creation",
    path: "/create-event",
    icon: <EventIcon></EventIcon>,
  },
];
