import { Home, PersonAddAlt1, Person, Forum } from "@mui/icons-material";
import BookIcon from "@mui/icons-material/Book";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import EventIcon from "@mui/icons-material/Event";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ChecklistIcon from "@mui/icons-material/Checklist";

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
    name: "Manage Courses",
    path: "/course-manage",
    icon: <ChecklistIcon />,
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
  {
    name: "Forums",
    path: "/forums",
    icon: <Forum />,
  },
  {
    name: "Account Settings",
    path: "/account-settings",
    icon: <SettingsApplicationsIcon />,
  },
];
