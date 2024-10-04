import { useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import { useCreateNewCourseMutation } from "../../redux/feature/course/courseAPI";
import toast from "react-hot-toast";

export const CreateCourse = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const Instructors = ["Zubayer Ahmed", "Roy Sensei", "Uzawa Sensei"];
  const { register, handleSubmit } = useForm();
  const [createNewCourse, { error }] = useCreateNewCourseMutation();
  const handleAddCourse = async (data: any) => {
    const newCourse = {
      title: data.courseName,
      code: data.courseCode,
      duration: Number(data.duration),
      instructors: [user.userId],
      courseType: data.courseType,
      description: data.description,
    };
    try {
      const res = await createNewCourse(newCourse).unwrap();
      console.log(res);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      const error_msg = err.data;
      error_msg.errorSources.forEach((error: any) => {
        toast.error(`${error.path}   ${error.message}`);
      });

      console.log(error_msg);
    }
  };

  return (
    <div>
      <h2 className="text-center my-5 text-2xl font-semibold">
        Create Course Here!!
      </h2>
      <form
        onSubmit={handleSubmit(handleAddCourse)}
        className="w-2/5 mx-auto space-y-4 bg-indigo-400 rounded-md p-5"
      >
        {/* Course Name */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="courseName">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            placeholder="Enter Course Name Here"
            className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
            {...register("courseName", { required: true })}
          />
        </div>

        {/* Course Code  */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="courseCode">
            Course Code
          </label>
          <input
            type="text"
            id="courseCode"
            placeholder="Enter Unique Course Code"
            className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
            {...register("courseCode", { required: true })}
          />
        </div>

        {/* Duration */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="duration">
            Duration (in months)
          </label>
          <input
            type="number"
            id="duration"
            placeholder="Enter Course Duration"
            className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
            {...register("duration", { required: true })}
          />
        </div>

        {/* Instructor Dropdown */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="instructor">
            Instructor
          </label>
          <select
            id="instructor"
            className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
            {...register("instructor", { required: true })}
          >
            <option value="">Select Instructor</option>
            {Instructors.map((instructor, index) => (
              <option key={index} value={instructor}>
                {instructor}
              </option>
            ))}
          </select>
        </div>

        {/* Course Type */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="courseType">
            Course Type
          </label>
          <select
            id="courseType"
            className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
            {...register("courseType", { required: true })}
          >
            <option value="language">Language</option>
            <option value="technical">Technical</option>
          </select>
        </div>

        {/* Course description */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="courseCode">
            Course Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Short description of the course"
            className="border rounded-md w-full p-2 border-indigo-400 focus:outline-0"
            {...register("description", { required: true })}
          />
        </div>
        {/* Submit Button */}
        <div className="py-4">
          <button
            type="submit"
            className="btn w-full py-2 rounded-md hover:bg-slate-300 hover:text-slate-800 font-semibold bg-emerald-400 focus:outline-0 border-emerald-400"
          >
            ADD COURSE
          </button>
        </div>
      </form>
    </div>
  );
};
