import { Forum, Home, LocalLibrary } from "@mui/icons-material";
import VideocamIcon from "@mui/icons-material/Videocam";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonIcon from "@mui/icons-material/Person";

export const studentRoutes = [
  {
    name: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    name: "Profile",
    path: "/student-profile",
    icon: <PersonIcon />,
  },
  {
    name: "Courses",
    path: "/courses",
    icon: <LocalLibrary />,
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
];
