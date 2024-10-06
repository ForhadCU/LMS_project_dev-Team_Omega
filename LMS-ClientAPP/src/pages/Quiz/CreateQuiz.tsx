import { useForm, useFieldArray } from "react-hook-form";
import { useParams } from "react-router-dom";

export type TQuestion = {
  Question_NO: number;
  Question: string;
  Mark: number;
  Options: Array<string>;
  Answer: string;
};

export type TQuestions = {
  Course_ID: string;
  Quiz_No: string;
  Quiz_Type: "daily" | "weekly";
  Date: string;
  Questions: Array<TQuestion>;
  Form_link?: string;
};

export default function CreateQuiz() {
  const params = useParams();
  const courseID = params.id;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TQuestions>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "Questions",
  });

  const onSubmit = (data: TQuestions) => {
    console.log(data);
  };

  return (
    <div className=" flex flex-col">
      <div className=" text-center text-xl md:text-2xl font-semibold">
        <h2>Create New Quiz</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 space-y-4 bg-white shadow-md rounded-md"
      >
        {/* Course ID */}
        <div>
          <label className="block text-sm font-medium">Course ID</label>
          <input
            type="text"
            value={courseID}
            {...register("Course_ID")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            disabled
          />
          {errors.Course_ID && (
            <p className="text-red-500 text-sm">{errors.Course_ID.message}</p>
          )}
        </div>

        {/* Quiz No */}
        <div>
          <label className="block text-sm font-medium">Quiz No</label>
          <input
            type="text"
            {...register("Quiz_No", { required: "Quiz No is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.Quiz_No && (
            <p className="text-red-500 text-sm">{errors.Quiz_No.message}</p>
          )}
        </div>

        {/* Quiz Type */}
        <div>
          <label className="block text-sm font-medium">Quiz Type</label>
          <select
            {...register("Quiz_Type", { required: "Quiz Type is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
          {errors.Quiz_Type && (
            <p className="text-red-500 text-sm">{errors.Quiz_Type.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            {...register("Date", { required: "Date is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.Date && (
            <p className="text-red-500 text-sm">{errors.Date.message}</p>
          )}
        </div>

        {/* Questions */}
        <div>
          <label className="block text-sm font-medium">Questions</label>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="space-y-4 border-b border-gray-200 pb-4"
            >
              <div>
                <label className="block text-sm font-medium">
                  Question {index + 1}
                </label>
                <input
                  type="text"
                  {...register(`Questions.${index}.Question`, {
                    required: "Question is required",
                  })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.Questions?.[index]?.Question && (
                  <p className="text-red-500 text-sm">
                    {errors.Questions[index]?.Question?.message}
                  </p>
                )}
              </div>

              {/* Mark */}
              <div>
                <label className="block text-sm font-medium">Mark</label>
                <input
                  type="number"
                  {...register(`Questions.${index}.Mark`, {
                    required: "Mark is required",
                  })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.Questions?.[index]?.Mark && (
                  <p className="text-red-500 text-sm">
                    {errors.Questions[index]?.Mark?.message}
                  </p>
                )}
              </div>

              {/* Options */}
              <div>
                <label className="block text-sm font-medium">Options</label>
                <input
                  type="text"
                  {...register(`Questions.${index}.Options.0`, {
                    required: "Option 1 is required",
                  })}
                  placeholder="Option 1"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  {...register(`Questions.${index}.Options.1`, {
                    required: "Option 2 is required",
                  })}
                  placeholder="Option 2"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {/* Additional options can be added similarly */}
              </div>

              {/* Answer */}
              <div>
                <label className="block text-sm font-medium">Answer</label>
                <input
                  type="text"
                  {...register(`Questions.${index}.Answer`, {
                    required: "Answer is required",
                  })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.Questions?.[index]?.Answer && (
                  <p className="text-red-500 text-sm">
                    {errors.Questions[index]?.Answer?.message}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => remove(index)}
                className="mt-2 text-red-600"
              >
                Remove Question
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              append({
                Question_NO: fields.length + 1,
                Question: "",
                Mark: 0,
                Options: ["", ""],
                Answer: "",
              })
            }
            className="mt-2 text-blue-600"
          >
            Add Question
          </button>
        </div>

        {/* Form link (optional) */}
        <div>
          <label className="block text-sm font-medium">
            Form link (optional)
          </label>
          <input
            type="text"
            {...register("Form_link")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
