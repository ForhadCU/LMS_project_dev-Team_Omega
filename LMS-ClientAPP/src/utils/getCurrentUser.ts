import { selectCurrentUser } from "../redux/feature/auth/authSlice";
import { useAppSelector } from "../redux/hook";
import { TUser } from "../Types/user.type";

export function getCurrentUser() {
  const user = useAppSelector(selectCurrentUser) as TUser;
  return user;
}
