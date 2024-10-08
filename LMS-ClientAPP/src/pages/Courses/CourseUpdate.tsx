import { Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleCourseQuery,
  useUpdateCourseDataMutation,
} from "../../redux/feature/course/courseAPI";
import { Loader } from "../../components/loader/Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";

type TUpdateCourse = {
  _id: string;
  title: string;
  code: string;
  description: string;
  duration: number;
  img: string;
  courseType: "language" | "technical" | "personalDevelopment";
  isActive: "pending" | "active" | "inactive";
};

export const CourseUpdate = () => {
  const params = useParams();
  const courseID = params.id || "";

  const {
    data: courseData,
    isError,
    isLoading,
  } = useGetSingleCourseQuery(courseID);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TUpdateCourse>();

  useEffect(() => {
    if (courseData) {
      reset({
        title: courseData?.data.title,
        code: courseData?.data.code,
        description: courseData?.data.description,
        duration: courseData?.data.duration,
        img: courseData?.data.img,
        courseType: courseData?.data.courseType,
        isActive: courseData?.data.isActive,
      });
    }
  }, [courseData, reset]);

  const [updateCourseData] = useUpdateCourseDataMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: TUpdateCourse) => {
    data._id = courseID;
    // Handle form submission, like updating the course info via API
    try {
      const res = await updateCourseData(data).unwrap();
      if (res.success) {
        toast.success("Updated successfully");
        navigate("/");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Error occured check console");
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col ">
      <div className=" w-full text-center p-2">
        <h2 className="text-lg lg:text-2xl">Update Course Data</h2>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" mt-2">
        {isError ? (
          <h2 className=" text-red-500 font-bold text-center w-full">
            Error Occured while fetching data
          </h2>
        ) : isLoading ? (
          <Loader />
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto p-4 space-y-4"
          >
            {/* Title */}
            <div>
              <label className="block text-sm font-medium">Course Title</label>
              <input
                type="text"
                {...register("title", { required: "Course title is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                //value={courseData?.data.title}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Code */}
            <div>
              <label className="block text-sm font-medium">Course Code</label>
              <input
                type="text"
                {...register("code", { required: "Course code is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={courseData?.data.code}
              />
              {errors.code && (
                <p className="text-red-500 text-sm">{errors.code.message}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                //value={courseData?.data.description}
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium">
                Duration (in months)
              </label>
              <input
                type="number"
                {...register("duration", {
                  required: "Duration is required",
                  min: {
                    value: 1,
                    message: "Duration must be at least 1 month",
                  },
                })}
                //value={courseData?.data.duration}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.duration && (
                <p className="text-red-500 text-sm">
                  {errors.duration.message}
                </p>
              )}
            </div>

            {/* Image */}
            <div>
              <label className="block text-sm font-medium">Image URL</label>
              <input
                type="text"
                {...register("img", { required: "Image URL is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                //value={courseData?.data.img}
              />
              {errors.img && (
                <p className="text-red-500 text-sm">{errors.img.message}</p>
              )}
            </div>

            {/* Course Type */}
            <div>
              <label className="block text-sm font-medium">Course Type</label>
              <select
                {...register("courseType", {
                  required: "Course type is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="language">Language</option>
                <option value="technical">Technical</option>
                <option value="personalDevelopment">
                  Personal Development
                </option>
              </select>
              {errors.courseType && (
                <p className="text-red-500 text-sm">
                  {errors.courseType.message}
                </p>
              )}
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium">Course Status</label>
              <input
                type="text"
                {...register("isActive", {
                  required: "Course status is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={courseData?.data.isActive}
              />
              {errors.isActive && (
                <p className="text-red-500 text-sm">
                  {errors.isActive.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
            >
              Update Course
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
