import { Forum, Home } from "@mui/icons-material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import VideocamIcon from "@mui/icons-material/Videocam";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
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
    name: "Forums",
    path: "/forums",
    icon: <Forum />,
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
];
