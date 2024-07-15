import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="my-20">
      <h2 className="text-center text-3xl ">Sign In Here !!</h2>
      <div className="w-1/3 mx-auto mt-10 ">
        <form>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-semibold "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="border  rounded-md w-full px-3 py-2 outline-0  "
              placeholder="Enter Your Email Here "
              {...register("email", { required: true })}
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-semibold  "
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="border  rounded-md  w-full px-3 py-2 outline-0 "
              placeholder="******* "
              {...register("password", { required: true })}
            />

            <button
              type="button"
              className=" absolute top-12 right-4  "
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className=" bg-indigo-300 p-2 w-full hover:bg-lime-500"
            >
              Sign IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
