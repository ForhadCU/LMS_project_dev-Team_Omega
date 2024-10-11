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
  const { register, handleSubmit } = useForm<TData>();
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
    <div>
      <h2 className="text-center my-5  text-2xl font-semibold">
        Create User Here!!
      </h2>
      <form
        onSubmit={handleSubmit(handleAddClass)}
        className="w-2/5 mx-auto space-y-4 bg-[#1976D2] rounded-md p-5"
      >
        {/* User Name */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="userName">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Enter User Name Here"
            className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
            {...register("userName", { required: true })}
          />
        </div>

        {/* User Email */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="userEmail">
            User Email
          </label>
          <input
            type="email"
            id="userEmail"
            placeholder="Enter User Email Here"
            className="border rounded-md w-full p-2 border-indigo-300 focus:outline-0"
            {...register("userEmail", { required: true })}
          />
        </div>

        {/* User Type Dropdown */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="userType">
            User Type
          </label>
          <select
            id="userType"
            className="border rounded-md w-full p-2 border-sky-300 focus:outline-0"
            {...register("userType", { required: true })}
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            id="password"
            value="123456"
            className="border rounded-md w-full p-2 border-sky-300 focus:outline-0"
            {...register("password", { required: true })}
            readOnly
          />
        </div>

        {/* Submit Button */}
        <div className="py-4">
          <button
            type="submit"
            className="btn w-full py-2 rounded-md hover:bg-slate-300 hover:text-slate-800 font-semibold bg-emerald-400 focus:outline-0 border-emerald-400"
          >
            ADD USER
          </button>
        </div>
      </form>
    </div>
  );
};
