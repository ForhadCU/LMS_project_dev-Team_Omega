import {
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import { useEffect, useState } from "react";
import {
  useGetSingleUserQuery,
  useUpdatePasswordMutation,
  useUpdateUserInfoMutation,
} from "../../redux/feature/users/usersAPI";
import { useForm } from "react-hook-form";
import { Loader } from "../../components/loader/Loader";
import toast from "react-hot-toast";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface IUserForm {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
}

interface IUserPassword {
  newPassword: string;
}

export const Account = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const [isDisable, setIsDisable] = useState(true);
  const handleToggleEnable = () => {
    setIsDisable(!isDisable);
  };

  const {
    data: currentUser,
    isLoading,
    isError,
  } = useGetSingleUserQuery({ id: user.userId });

  const initialUserData: IUserForm = {
    _id: currentUser?.data._id,
    name: currentUser?.data.name,
    email: currentUser?.data.email,
    role: currentUser?.data.role,
    isActive: currentUser?.data.isActive,
  };

  const { register, handleSubmit, reset } = useForm<IUserForm>({
    defaultValues: initialUserData, // Set initial values here
  });

  const {
    register: passregister,
    handleSubmit: passSubmit,
    formState: { errors },
  } = useForm<IUserPassword>();

  const [updateUserInfo] = useUpdateUserInfoMutation();
  const [updatePassword] = useUpdatePasswordMutation();

  const onPassSubmit = async (password: IUserPassword) => {
    const newPassData = {
      ...password,
    };
    const res = await updatePassword(newPassData).unwrap();

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };
  const onSubmit = async (data: IUserForm) => {
    const res = await updateUserInfo(data).unwrap();

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    // Make API call to update user data
  };
  useEffect(() => {
    if (currentUser?.data) {
      reset({
        _id: currentUser?.data._id,
        name: currentUser?.data.name,
        email: currentUser?.data.email,
        role: currentUser?.data.role,
        isActive: currentUser?.data.isActive,
      });
    }
  }, [currentUser]);
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className=" flex flex-col p-2 w-full mb-2">
      {isError ? (
        <h2 className=" text-2xl text-red-500 font-bold my-2">
          Error occured while fetching data
        </h2>
      ) : isLoading ? (
        <div className=" flex justify-center my-2 p-3">
          <Loader />
        </div>
      ) : (
        <div>
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
              <div className=" text-start">
                <h2>User Name Change</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-1">
                  <label
                    className="block text-l font-semibold"
                    htmlFor="userName"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    placeholder="User Name"
                    className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
                    disabled={isDisable}
                    {...register("name", { required: "Name is required" })}
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="block text-l font-semibold"
                    htmlFor="userEmail"
                  >
                    User Email
                  </label>
                  <input
                    type="text"
                    id="userEmail"
                    placeholder="User Email"
                    className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
                    disabled={isDisable}
                    value={initialUserData.email}
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-l font-semibold" htmlFor="role">
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    placeholder="User Role"
                    className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
                    disabled={isDisable}
                    value={initialUserData.role}
                  />
                </div>
                {/* Submit button */}
                <div className=" p-2 my-2">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isDisable}
                  >
                    Update User
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center mt-[50px]">
            <div className="border shadow-md rounded-md w-[600px] p-2">
              <div className=" text-start p-2">
                <h2>Change Password</h2>
              </div>
              <form onSubmit={passSubmit(onPassSubmit)}>
                <div className="space-y-1">
                  <FormControl sx={{ m: 1, width: "63ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleToggleShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      {...passregister("newPassword", {
                        required: "Password Required",
                      })}
                    />
                    {errors.newPassword && (
                      <p className="text-red-500 text-sm">
                        {errors.newPassword.message}
                      </p>
                    )}
                  </FormControl>
                </div>
                <div className=" p-2 my-2">
                  <Button type="submit" variant="contained" color="success">
                    Change Password
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
