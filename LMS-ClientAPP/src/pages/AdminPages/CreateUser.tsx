import { useForm } from "react-hook-form";
import { useCreateNewUserMutation } from "../../redux/feature/users/usersAPI";
import toast from "react-hot-toast";

interface ICreateUserData {
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
}

type TData = {
  password: string;
  userEmail: string;
  userName: string;
  userType: string;
};

export const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TData>();
  const [createNewUser, { isError }] = useCreateNewUserMutation();

  const handleAddClass = async (data: TData) => {
    console.log(data);

    const newUser: ICreateUserData = {
      name: data.userName,
      email: data.userEmail,
      password: data.password,
      role: data.userType,
      isActive: true,
    };
    const res = await createNewUser(newUser).unwrap();
    if (res.success) {
      toast.success(res.message);
    }
    if (isError) {
      toast.error("Error occured while creating user.");
    }
    console.log(res);
  };

  return (
    <div className=" bg-gradient-to-r from-blue-50 to-blue-100 py-10 ">
      <form
        onSubmit={handleSubmit(handleAddClass)}
        className="space-y-4 w-2/5 mx-auto bg-white shadow-lg rounded-lg  p-5"
      >
        <h2 className="text-center mb-4 text-3xl font-bold text-indigo-600">
          Create User
        </h2>
        {/* User Name */}
        <div className="space-y-2">
          <label className="block text-lg font-semibold" htmlFor="userName">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Enter User Name"
            className={`border rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
              errors.userName ? "border-red-500" : "border-gray-300"
            }`}
            {...register("userName", { required: "User name is required" })}
          />
          {errors.userName && (
            <p className="text-red-500 text-sm">{errors.userName.message}</p>
          )}
        </div>

        {/* User Email */}
        <div className="space-y-2">
          <label className="block text-lg font-semibold" htmlFor="userEmail">
            User Email
          </label>
          <input
            type="email"
            id="userEmail"
            placeholder="Enter User Email"
            className={`border rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
              errors.userEmail ? "border-red-500" : "border-gray-300"
            }`}
            {...register("userEmail", { required: "User email is required" })}
          />
          {errors.userEmail && (
            <p className="text-red-500 text-sm">{errors.userEmail.message}</p>
          )}
        </div>

        {/* User Type Dropdown */}
        <div className="space-y-2">
          <label className="block text-lg font-semibold" htmlFor="userType">
            User Type
          </label>
          <select
            id="userType"
            className={`border rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
              errors.userType ? "border-red-500" : "border-gray-300"
            }`}
            {...register("userType", { required: "User type is required" })}
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
            <option value="admin">Admin</option>
          </select>
          {errors.userType && (
            <p className="text-red-500 text-sm">{errors.userType.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="block text-lg font-semibold" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            id="password"
            value="123456"
            className="border rounded-md w-full p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            {...register("password", { required: true })}
            readOnly
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md shadow-md transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            ADD USER
          </button>
        </div>
      </form>
    </div>
  );
};
