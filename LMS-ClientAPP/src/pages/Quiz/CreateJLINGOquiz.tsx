import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DQ_IMG, WQ_IMG } from "../../constants";
import { Divider } from "@mui/material";
import { useCreateNewJLINGOQuizMutation } from "../../redux/feature/quiz/quizAPI";

type TJLINGOQuiz = {
  quiz_title: string;
  quiz_type: "daily" | "weekly" | "practice";
  quiz_date: string;
  img: string;
  form_link: string;
};

export const CreateJLINGOquiz = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TJLINGOQuiz>();

  const [createNewJLINGOQuiz, { isError }] = useCreateNewJLINGOQuizMutation();

  const onSubmit = async (data: TJLINGOQuiz) => {
    if (data.quiz_type === "daily") {
      data.img = DQ_IMG;
    }
    if (data.quiz_type === "weekly") {
      data.img = WQ_IMG;
    }

    // Handle form submission (e.g., post data to your backend)
    try {
      const res = await createNewJLINGOQuiz(data).unwrap();
      if (res.success) {
        toast.success(res.message);
        navigate(`/`);
      }
      if (!res.success) {
        toast.error(res.message);
      }
      if (isError) {
        toast.error("Error occured while creating Daily quiz");
      }
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div className=" flex flex-col gap-2 p-2">
      <div className=" p-2 text-center text-xl">
        <h2 className=" font-semibold">Create General Quiz (All Platforms)</h2>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" mt-2">
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto p-4 space-y-4"
        >
          {/* Quiz Title */}
          <div>
            <label className="block text-sm font-medium">Quiz Title</label>
            <input
              type="text"
              {...register("quiz_title", {
                required: "Quiz Title is required",
              })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.quiz_title && (
              <p className="text-red-500 text-sm">
                {errors.quiz_title.message}
              </p>
            )}
          </div>

          {/* Quiz Type */}
          <div>
            <label className="block text-sm font-medium">Quiz Type</label>
            <select
              {...register("quiz_type", { required: "Quiz type is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="practice">Practice</option>
            </select>
            {errors.quiz_type && (
              <p className="text-red-500 text-sm">{errors.quiz_type.message}</p>
            )}
          </div>

          {/* Quiz Date */}
          <div>
            <label className="block text-sm font-medium">Quiz Date</label>
            <input
              type="date"
              {...register("quiz_date", { required: "Quiz date is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.quiz_date && (
              <p className="text-red-500 text-sm">{errors.quiz_date.message}</p>
            )}
          </div>

          {/* Image URL 
      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="text"
          {...register("img", { required: "Image link is required" })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.img && (
          <p className="text-red-500 text-sm">{errors.img.message}</p>
        )}
      </div>
        */}

          {/* Form Link */}
          <div>
            <label className="block text-sm font-medium">Form Link</label>
            <input
              type="text"
              {...register("form_link", { required: "Form link is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.form_link && (
              <p className="text-red-500 text-sm">{errors.form_link.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  );
};
