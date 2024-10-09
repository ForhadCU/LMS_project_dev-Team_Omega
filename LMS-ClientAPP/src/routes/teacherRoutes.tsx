import { Forum, Home } from "@mui/icons-material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
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
];
