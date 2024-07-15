import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { MainLayout } from "../layouts/MainLayout";
import { About } from "../pages/About/About";
import { Home } from "../pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);

export default routes;
