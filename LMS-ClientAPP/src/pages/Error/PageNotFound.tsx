import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  const handleOnBack = () => {
    navigate(-1);
  };
  return (
    <div className=" flex justify-center items-center mt-[200px]">
      <div className=" flex flex-col items-center justify-center p-3 my-2 border rounded-md shadow-md w-[400px]">
        <div className=" text-center">
          <h2 className=" font-semibold text-red-700 text-2xl">
            404|Page Not Found
          </h2>
        </div>
        <div className=" my-2 text-center">
          <p className=" text-red-700">
            The page you are searching for probably does not exist or route is
            wrong.
          </p>
        </div>
        <div className=" my-2">
          <Button variant="contained" color="error" onClick={handleOnBack}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};
