import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "login",
    element: <SignIn></SignIn>,
  },
]);

export default routes;
