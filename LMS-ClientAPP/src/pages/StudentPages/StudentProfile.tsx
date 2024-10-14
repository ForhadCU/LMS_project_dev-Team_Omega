import { Divider } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import {
  useGetStudentProfileQuery,
  useUpdateStudentProfileMutation,
} from "../../redux/feature/student/studentAPI";
import toast from "react-hot-toast";

export type TStudent = {
  fullName: string;
  userID: string;
  age: number;
  subjectMajor: string;
  batch: string;
  address: string;
  img: File; // For file input
};

export const StudentProfile = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TStudent>();
  const { data: studentProfile } = useGetStudentProfileQuery({
    id: user.userId,
  });

  // use fetched student data to set default values
  useEffect(() => {
    setValue("fullName", studentProfile?.data.fullName);
    setValue("userID", studentProfile?.data.userID);
    setValue("age", studentProfile?.data.age);
    setValue("subjectMajor", studentProfile?.data.subjectMajor);
    setValue("batch", studentProfile?.data.batch);
    setValue("address", studentProfile?.data.address);
  }, [setValue, studentProfile]);

  const [updateStudentProfile, { error }] = useUpdateStudentProfileMutation();

  const onSubmit = async (data: any) => {
    const textData = {
      fullName: data.fullName,
      userID: user.userId,
      age: data.age,
      subjectMajor: data.subjectMajor,
      batch: data.batch,
      address: data.address,
    };
    const formData = new FormData();
    if (data.img && data.img.length > 0) {
      formData.append("img", data.img[0]);
    }

    formData.append("data", JSON.stringify(textData));
    // // Log FormData contents
    // for (let pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }

    try {
      const res = await updateStudentProfile(formData).unwrap();
      if (res.success) {
        toast.success(res.message);
      }
      if (!res.success) {
        toast.error(res.message);
      }
    } catch (err: any) {
      toast.error(err.data.message);
      console.log(error + " " + err);
    }
  };
  return (
    <div className=" flex flex-col p-1 w-full">
      <div className=" text-center text-xl ">
        <h2 className=" font-bold">Student Profile</h2>
      </div>
      <div className=" my-2">
        <Divider variant="fullWidth"></Divider>
      </div>
      <div className="  flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Full Name */}
          <div className=" flex flex-col w-full">
            <label htmlFor="fullName" className="font-semibold">
              Full Name:
            </label>
            <input
              id="fullName"
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className="p-2 border rounded-md"
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* User ID */}
          {/* <div className=" flex flex-col w-full">
            <label htmlFor="userID" className="font-semibold">
              User ID:
            </label>
            <input
              id="userID"
              type="text"
              {...register("userID", { required: "User ID is required" })}
              className="p-2 border rounded-md"
            />
            {errors.userID && (
              <p className="text-red-500">{errors.userID.message}</p>
            )}
          </div> */}

          {/* Age */}
          <div className=" flex flex-col w-full">
            <label htmlFor="age" className="font-semibold">
              Age:
            </label>
            <input
              id="age"
              type="number"
              {...register("age", {
                required: "Age is required",
                min: { value: 0, message: "Age must be positive" },
              })}
              className="p-2 border rounded-md"
            />
            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
          </div>

          {/* Subject Major */}
          <div className=" flex flex-col w-full">
            <label htmlFor="subjectMajor" className="font-semibold">
              Subject Major:
            </label>
            <input
              id="subjectMajor"
              type="text"
              {...register("subjectMajor", {
                required: "Subject Major is required",
              })}
              className="p-2 border rounded-md"
            />
            {errors.subjectMajor && (
              <p className="text-red-500">{errors.subjectMajor.message}</p>
            )}
          </div>

          {/* Batch */}
          <div className=" flex flex-col w-full">
            <label htmlFor="batch" className="font-semibold">
              Batch:
            </label>
            <input
              id="batch"
              type="text"
              {...register("batch", { required: "Batch is required" })}
              className="p-2 border rounded-md"
            />
            {errors.batch && (
              <p className="text-red-500">{errors.batch.message}</p>
            )}
          </div>

          {/* Address */}
          <div className=" flex flex-col w-full">
            <label htmlFor="address" className="font-semibold">
              Address:
            </label>
            <input
              id="address"
              type="text"
              {...register("address", { required: "Address is required" })}
              className="p-2 border rounded-md"
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div className=" flex flex-col w-full">
            <label htmlFor="img" className="font-semibold">
              Profile Picture:
            </label>
            <input
              id="img"
              type="file"
              {...register("img")}
              className="p-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
