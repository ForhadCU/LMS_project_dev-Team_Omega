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
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-10 py-10">
      <form
        onSubmit={handleSubmit(handleCreateEvent)}
        className="w-2/5 mx-auto space-y-3 bg-white  rounded-md p-5 "
        // className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl overflow-auto" style={{ maxHeight: "90vh" }}
        encType="multipart/form-data"
      >
        <h2 className="text-2xl md:text-3xl text-center font-bold text-indigo-600 mb-5">
          Create Event Here
        </h2>
        {/* Event Title */}
        <div className="space-y-2">
          <label
            className="block text-lg font-semibold text-gray-700"
            htmlFor="title"
          >
            Event Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Event Title"
            className={`w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Event Description */}
        <div className="space-y-2">
          <label
            className="block text-lg font-semibold text-gray-700"
            htmlFor="description"
          >
            Event Description
          </label>
          <textarea
            id="description"
            placeholder="Enter Event Description"
            className={`w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition ${
              errors.description ? "border-red-500" : "border-gray-300"
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
        <div className="space-y-2">
          <label
            className="block text-lg font-semibold text-gray-700"
            htmlFor="eventDate"
          >
            Event Date
          </label>
          <input
            type="datetime-local"
            id="eventDate"
            className={`w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition ${
              errors.eventDate ? "border-red-500" : "border-gray-300"
            }`}
            {...register("eventDate", { required: "Event date is required" })}
          />
          {errors.eventDate && (
            <p className="text-red-500 text-sm">{errors.eventDate.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <label
            className="block text-lg font-semibold text-gray-700"
            htmlFor="img"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="img"
            accept="image/*"
            className={`w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition ${
              errors.file ? "border-red-500" : "border-gray-300"
            }`}
            {...register("file", { required: "Image is required" })}
          />
          {errors.file && (
            <p className="text-red-500 text-sm">{errors.file.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md shadow-md transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
            disabled={isLoading}
          >
            {isLoading ? (
              <ImSpinner4
                className="animate-spin mx-auto text-white"
                size={24}
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
