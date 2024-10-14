import { Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { TGeneralResources } from "../../Types/content.type";
import { useAddNewGeneralResourceMutation } from "../../redux/feature/content/contentAPI";
import toast from "react-hot-toast";
import { Loader } from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";

export const CreateGeneralResources = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TGeneralResources>();
  const [addNewGeneralResource, { isLoading, isError }] =
    useAddNewGeneralResourceMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: TGeneralResources) => {
    data.status = "pending";
    console.log(data);
    try {
      const res = await addNewGeneralResource(data).unwrap();
      if (res.success) {
        toast.success(res.message);
        navigate(-1);
      }

      if (isError) {
        toast.error("Error occured while adding");
      }
    } catch (error: any) {
      toast.error(error.data.message);
    }

    // Handle form submission, like sending the data to an API
  };

  return (
    <div className="  flex flex-col p-2">
      <div className=" w-full text-center p-2">
        <h2 className="text-lg lg:text-2xl">Add General Resources</h2>
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
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
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
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
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
            />
            {errors.img && (
              <p className="text-red-500 text-sm">{errors.img.message}</p>
            )}
          </div>

          {/* Link */}
          <div>
            <label className="block text-sm font-medium">Content Link</label>
            <input
              type="text"
              {...register("link", { required: "Link is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.link && (
              <p className="text-red-500 text-sm">{errors.link.message}</p>
            )}
          </div>

          {/* Status 
          <div>
            <label className="block text-sm font-medium">Status</label>
            <select
              {...register("status")}
              defaultValue="pending"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="pending">Pending</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>*/}

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
