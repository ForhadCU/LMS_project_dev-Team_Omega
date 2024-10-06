import { Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useCreateNewContentMutation } from "../../redux/feature/content/contentAPI";
import toast from "react-hot-toast";

type TFormData = {
  title: string;
  description: string;
  contentType: string;
  contentlink: string;
  createDate: string;
};
export const CreateContents = () => {
  const params = useParams();
  const courseID = params.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();
  const [createNewContent] = useCreateNewContentMutation();
  const onSubmit = async (data: TFormData) => {
    const contentData = {
      ...data,
      courseID,
    };
    console.log("Form Submitted:", contentData);
    const res = await createNewContent(contentData).unwrap();
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className=" flex flex-col">
      <div className="text-xl md:text-2xl font-semibold">
        Create Course Content
      </div>
      <Divider variant="fullWidth" className=" my-3"></Divider>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "Title of this content is required",
            })}
            className="w-full border p-2"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description of this content is required",
            })}
            className="w-full border p-2"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Content Type Field */}
        <div>
          <label htmlFor="contentType" className="block font-medium">
            Content Type
          </label>
          <select
            id="contentType"
            {...register("contentType", {
              required: "Please select the content type",
            })}
            className="w-full border p-2"
          >
            <option value="">Select Content Type</option>
            <option value="file">File</option>
            <option value="video">Video</option>
            <option value="resource">Resource</option>
            <option value="lecture">Lecture</option>
          </select>
          {errors.contentType && (
            <p className="text-red-500">{errors.contentType.message}</p>
          )}
        </div>

        {/* Content Link Field */}
        <div>
          <label htmlFor="contentlink" className="block font-medium">
            Content Link
          </label>
          <input
            type="text"
            id="contentlink"
            {...register("contentlink", {
              required: "Content link is required",
            })}
            className="w-full border p-2"
          />
          {errors.contentlink && (
            <p className="text-red-500">{errors.contentlink.message}</p>
          )}
        </div>

        {/* Creation Date Field */}
        <div>
          <label htmlFor="createDate" className="block font-medium">
            Creation Date
          </label>
          <input
            type="date"
            id="createDate"
            {...register("createDate", {
              required: "Creation date is required",
            })}
            className="w-full border p-2"
          />
          {errors.createDate && (
            <p className="text-red-500">{errors.createDate.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="bg-blue-500 text-white p-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
