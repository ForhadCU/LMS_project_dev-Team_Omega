import { useForm } from "react-hook-form";
import { TClassRecordings } from "../../Types/content.type";
import { Divider } from "@mui/material";
import { useAddClassRecordingsMutation } from "../../redux/feature/content/contentAPI";
import toast from "react-hot-toast";
import { Loader } from "../../components/loader/Loader";

export const CreateClassRecordings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TClassRecordings>();

  const [addClassRecordings, { isLoading, isError }] =
    useAddClassRecordingsMutation();

  const onSubmit = async (data: TClassRecordings) => {
    // Handle form submission, like sending the data to an API
    const res = await addClassRecordings(data).unwrap();
    if (res.success) {
      toast.success(res.message);
    }

    if (isError) {
      toast.error("Error occured while adding");
    }
  };

  return (
    <div className=" flex flex-col p-2">
      <div className=" w-full text-center p-2">
        <h2 className="text-lg lg:text-2xl">Add Class Recordings</h2>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" my-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto p-4 space-y-4"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Name of the class"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Link */}
          <div>
            <label className="block text-sm font-medium">Recording Link</label>
            <input
              type="url"
              {...register("link", { required: "Link is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Drive link here"
            />
            {errors.link && (
              <p className="text-red-500 text-sm">{errors.link.message}</p>
            )}
          </div>

          {/* Submit Button */}
          {isLoading ? (
            <Loader />
          ) : (
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
