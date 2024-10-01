import { Home, PersonAddAlt1, Person } from "@mui/icons-material";

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
];
