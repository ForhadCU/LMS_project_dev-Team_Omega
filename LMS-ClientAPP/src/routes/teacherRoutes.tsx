import { Forum, Home } from "@mui/icons-material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import VideocamIcon from "@mui/icons-material/Videocam";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
export const teacherRoutes = [
  {
    name: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    name: "My Courses",
    path: `/instructor-courses`,
    icon: <ImportContactsIcon />,
  },
  {
    name: "Class Recordings",
    path: "/class-recordings",
    icon: <VideocamIcon />,
  },
  {
    name: "General Resources",
    path: "/general-resources",
    icon: <LibraryBooksIcon />,
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
