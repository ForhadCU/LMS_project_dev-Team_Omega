import { Button, Divider } from "@mui/material";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import { useState } from "react";

export const Account = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const [isDisable, setIsDisable] = useState(true);
  const handleToggleEnable = () => {
    setIsDisable(!isDisable);
  };
  return (
    <div className=" flex flex-col p-2 w-full mb-2">
      <div className=" text-center text-xl ">
        <h2 className=" font-bold">Account Settings</h2>
      </div>
      <div className=" my-2">
        <Divider variant="fullWidth"></Divider>
      </div>
      <div className=" flex flex-col items-center justify-center mt-2">
        <div className=" flex flex-row justify-end w-[600px] p-3">
          <Button
            variant={isDisable ? "outlined" : "contained"}
            color="success"
            onClick={handleToggleEnable}
          >
            EDIT
          </Button>
        </div>
        <div className=" border shadow-md rounded-md w-[600px] p-2">
          <div className="space-y-1">
            <label className="block text-l font-semibold" htmlFor="courseCode">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              placeholder="User Name"
              className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
              disabled={isDisable}
            />
          </div>
          <div className="space-y-1">
            <label className="block text-l font-semibold" htmlFor="courseCode">
              User Email
            </label>
            <input
              type="text"
              id="courseCode"
              placeholder="userEmail"
              className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
              disabled
            />
          </div>
          <div className="space-y-1">
            <label className="block text-l font-semibold" htmlFor="courseCode">
              Role
            </label>
            <input
              type="text"
              id="role"
              placeholder="User Role"
              className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
              disabled={isDisable}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
