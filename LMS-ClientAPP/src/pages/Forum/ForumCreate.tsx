import { Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import { usePostForumMutation } from "../../redux/feature/forum/forumAPI";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface IForumPost {
  Title: string;
  body: string;
}

export const ForumCreate = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForumPost>();
  const [postForum, { error }] = usePostForumMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: IForumPost) => {
    const postForumData = {
      UserID: user.userId,
      ...data,
      likes: 0,
    };

    // handle form submission (e.g., send data to server)
    try {
      const res = await postForum(postForumData).unwrap();
      if (res.success) {
        navigate("/forums");
        toast.success(res.message);
      }
    } catch (err: any) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col p-2 w-full">
      <div className=" text-xl text-center">
        <h2>Create New Forum</h2>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" mt-2 w-full">
        <div className="border shadow-md p-4 max-w-md mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Title Input */}
            <div className="mb-4">
              <label htmlFor="title" className="block font-medium">
                Title:
              </label>
              <input
                type="text"
                id="title"
                {...register("Title", { required: "Title is required" })}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
                placeholder="Enter title"
              />
              {errors.Title && (
                <p className="text-red-500 text-sm">{errors.Title.message}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium">
                Message:
              </label>
              <textarea
                id="message"
                {...register("body", { required: "Message is required" })}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
                placeholder="Enter your message"
              />
              {errors.body && (
                <p className="text-red-500 text-sm">{errors.body.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
