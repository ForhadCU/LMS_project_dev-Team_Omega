import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { useCurrentToken } from "../redux/feature/auth/authSlice";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = useAppSelector(useCurrentToken);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return children;
};
