import Swal from "sweetalert2";
import Spinner from "../../components/Spinner/Spinner";
import {
  useGetAllCoursesQuery,
  useCourseStatusUpdateMutation,
} from "../../redux/feature/course/courseAPI";
import { useEffect, useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ManageCourses = () => {
  const { data: courses, isLoading, refetch } = useGetAllCoursesQuery({});
  const [updateCourseStatus, { isSuccess, isError, error, reset }] =
    useCourseStatusUpdateMutation();
  const [currentAction, setCurrentAction] = useState<string | null>(null);
  const [lastActionType, setLastActionType] = useState<string | null>(null);
  const [courseTitle, setCourseTitle] = useState<string | null>(null);

  useEffect(() => {
    if (isError) {
      Swal.fire(
        "Error!",
        (error as any)?.data?.message ||
          "There was an error updating the course status.",
        "error"
      );
      reset();
      setCurrentAction(null);
      setLastActionType(null);
      setCourseTitle(null);
    }

    if (isSuccess) {
      Swal.fire(
        "Success!",
        `The course "${courseTitle}" has been ${
          lastActionType === "approve" ? "activated" : "deactivated"
        } successfully.`,
        "success"
      );
      reset();
      setCurrentAction(null);
      setLastActionType(null);
      setCourseTitle(null);
      refetch(); // Refetch courses after successful update
    }
  }, [isSuccess, isError, error, reset, lastActionType, courseTitle, refetch]);

  if (isLoading) {
    return <Spinner />;
  }

  const allCourses = courses?.data;

  // Function to handle course approval/rejection
  const handleCourseAction = (course, action: "approve" | "reject") => {
    Swal.fire({
      title: `Are you sure you want to ${action} this course?`,
      text: `Course: ${course.title}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: `Yes, ${action} it!`,
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCurrentAction(course.code); // Set the course code being updated
        setLastActionType(action); // Set the last action type to use in the success message
        setCourseTitle(course.title); // Set the course title being updated

        // Update course status
        updateCourseStatus({
          code: course.code,
          status: action === "approve" ? "active" : "inactive",
        });
      }
    });
  };

  return (
    <div className="w-full px-6 py-4">
      <h1 className="text-center text-3xl font-bold text-sky-700 mb-6">
        Manage Courses
      </h1>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table-auto w-full border border-gray-300">
          {/* Table head */}
          <thead className="bg-[#1976D2] text-white">
            <tr className="text-lg">
              <th className="p-4">Course</th>
              <th className="p-4">Code</th>
              <th className="p-4">Type</th>
              <th className="p-4">Duration (Months)</th>
              <th className="p-4">Status</th>
              <th className="p-4">Approve</th>
              <th className="p-4">Reject</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody className="bg-emerald-50">
            {allCourses?.map((item) => (
              <tr
                key={item._id}
                className="border-b hover:bg-gray-100 transition duration-200"
              >
                {/* Course Info */}
                <td className="p-3 flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.img} alt={item.title} />
                    </div>
                  </div>
                  <div className="font-medium">{item.title}</div>
                </td>
                <td className="text-center font-semibold">{item.code}</td>
                <td className="text-center">{item.courseType}</td>
                <td className="text-center font-semibold">
                  {item.duration} Months
                </td>

                {/* Current Status */}
                <td
                  className={`text-center font-semibold ${
                    item.isActive === "active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.isActive.charAt(0).toUpperCase() +
                    item.isActive.slice(1)}
                </td>

                {/* Approve Button with Icon */}
                <td className="text-center">
                  <button
                    onClick={() => handleCourseAction(item, "approve")}
                    disabled={
                      item.isActive === "active" || currentAction === item.code
                    }
                    className={`px-4 py-2 rounded-lg transition duration-200 ${
                      item.isActive === "active"
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-green-500 hover:text-green-600"
                    }`}
                    aria-label="Approve"
                  >
                    {currentAction === item.code ? (
                      "Activating..."
                    ) : (
                      <CheckCircleIcon fontSize="large" />
                    )}
                  </button>
                </td>

                {/* Reject Button with Icon */}
                <td className="text-center">
                  <button
                    onClick={() => handleCourseAction(item, "reject")}
                    disabled={
                      item.isActive === "inactive" ||
                      currentAction === item.code
                    }
                    className={`px-4 py-2 rounded-lg transition duration-200 ${
                      item.isActive === "inactive"
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-red-500 hover:text-red-600"
                    }`}
                    aria-label="Reject"
                  >
                    {currentAction === item.code ? (
                      "Deactivating..."
                    ) : (
                      <HighlightOffIcon fontSize="large" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;
