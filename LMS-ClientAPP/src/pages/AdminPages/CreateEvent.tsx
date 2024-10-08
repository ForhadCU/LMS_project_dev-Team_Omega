import { useForm } from "react-hook-form";
import { useCreateNewEventMutation } from "../../redux/feature/event/eventAPI";
import { ImSpinner4 } from "react-icons/im";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [createNewEvent, { isLoading }] = useCreateNewEventMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleCreateEvent = async (data: any) => {
    const formData = new FormData();
    formData.append("img", data.file[0]);

    const eventData = {
      title: data.title,
      description: data.description,
      eventDate: data.eventDate,
    };
    formData.append("data", JSON.stringify(eventData));

    try {
      const res = await createNewEvent(formData).unwrap();
      console.log(res);
      if (res.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Event Created Successfully",
          showConfirmButton: false,
          timer: 2500,
        });
        reset(); // Reset the form
        navigate(`/event/${res.data._id}`); // Navigate to event details page
      }
    } catch (err: any) {
      console.log("Error creating event:", err.data);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err.data.message || "Error creating event",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h2 className="text-center pt-6 pb-3 font-bold text-2xl">
        Create Event Here
      </h2>
      <form
        onSubmit={handleSubmit(handleCreateEvent)}
        className="w-2/5 mx-auto space-y-4 bg-[#1976D2]  rounded-md p-5 "
        encType="multipart/form-data"
      >
        {/* Event Title */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="title">
            Event Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Event Title Here"
            className={`border rounded-md w-full p-2 border-indigo-400 focus:outline-0 ${
              errors.title ? "border-red-500" : ""
            }`}
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Event Description */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="description">
            Event Description
          </label>
          <textarea
            id="description"
            placeholder="Enter Event Description Here"
            className={`border rounded-md w-full p-2 h-24 border-indigo-400 focus:outline-0 ${
              errors.description ? "border-red-500" : ""
            }`}
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Event Date */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="eventDate">
            Event Date
          </label>
          <input
            type="datetime-local"
            id="eventDate"
            className={`border rounded-md w-full p-2 border-indigo-400 focus:outline-0 ${
              errors.eventDate ? "border-red-500" : ""
            }`}
            {...register("eventDate", {
              required: "Event date is required",
            })}
          />
          {errors.eventDate && (
            <p className="text-red-500 text-sm">{errors.eventDate.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="space-y-1">
          <label className="block text-l font-semibold" htmlFor="img">
            Upload Image
          </label>
          <input
            type="file"
            id="img"
            accept="image/*"
            className={`border rounded-md w-full p-2 border-indigo-400 focus:outline-0 ${
              errors.file ? "border-red-500" : ""
            }`}
            {...register("file", { required: "Image is required" })}
          />
          {errors.file && (
            <p className="text-red-500 text-sm">{errors.file.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="py-4">
          <button
            type="submit"
            className="btn w-full py-2 rounded-md hover:bg-slate-300 hover:text-slate-800 font-semibold bg-emerald-400 focus:outline-0 border-emerald-400"
            disabled={isLoading}
          >
            {isLoading ? (
              <ImSpinner4
                className="animate-spin mx-auto text-blue-800"
                size={32}
              />
            ) : (
              "CREATE EVENT"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
