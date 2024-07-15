import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">Learning Management System</h1>
      <div className="flex justify-center">
        <Link to="/login">
          <button className="mt-8 bg-indigo-300 p-1">Sign In</button>
        </Link>
      </div>
    </div>
  );
};
