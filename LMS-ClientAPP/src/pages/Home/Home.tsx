import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import { TUser } from "../../Types/user.type";
import { StudentHome } from "./StudentHome";
import { TeacherHome } from "./TeacherHome";

export const Home = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  if (user.role === "instructor") {
    return <TeacherHome />;
  }
  if (user.role === "student") {
    return <StudentHome />;
  }
  return (
    <div>
      <h1>Learning Management System</h1>
      <br />
      <div>
        <h2>Events will be shown here as grid</h2>
      </div>
    </div>
  );
};
