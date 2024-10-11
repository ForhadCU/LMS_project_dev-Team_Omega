import { Button, Divider } from "@mui/material";
import { useState } from "react";
import { CustomModal } from "../../components/CustomModal/CustomModal";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import { useForm } from "react-hook-form";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotesIcon from "@mui/icons-material/Notes";

interface IFormInput {
  week: number;
  note: string;
}

export const SingleStudentEval = () => {
  const params = useParams();
  const studID = params.id;
  const user = useAppSelector(selectCurrentUser) as TUser;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    const newNoteData = {
      ...data,
      instructorID: user.userId,
      UserID: studID,
    };
    console.log(newNoteData);
    setOpen(false);
    // Perform your submit action here
    reset(); // Reset form after submit
  };
  return (
    <div className=" flex flex-col p-2 w-full">
      <div className=" flex flex-col">
        <h2 className=" text-center font-bold my-2 text-2xl">
          Weekly Evaluation Note List
        </h2>
      </div>
      <Divider variant="fullWidth"></Divider>

      <div className=" flex flex-col items-center my-2 w-full p-2">
        <div className=" flex flex-row justify-end my-2 w-1/2">
          <Button onClick={handleOpen} variant="outlined">
            {" "}
            ADD NEW NOTE +
          </Button>
        </div>
        <div className=" flex flex-row items-start gap-1 border rounded-md shadow-md justify-between w-1/2 h-[80px] bg-slate-50">
          <div className=" w-1/2 flex justify-center items-center border h-full">
            <CalendarMonthIcon />
            Weeks
          </div>
          <div className=" w-1/2 flex justify-center items-center  border h-full">
            <NotesIcon />
            Notes{" "}
          </div>
        </div>
        <div className=" flex flex-row items-start gap-1 border rounded-md shadow-md justify-between w-1/2 h-[80px]">
          <div className=" w-1/2 flex justify-center items-center h-full">
            week no
          </div>
          <div className=" w-1/2 flex justify-start h-full">note </div>
        </div>
      </div>
      <CustomModal open={open} onCloseFn={handleClose}>
        <div className="flex flex-col w-full p-4 border shadow-md rounded-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Week Input */}
            <div className="flex flex-row gap-2 items-center">
              <label htmlFor="week" className="font-semibold">
                Week:
              </label>
              <input
                type="number"
                id="week"
                {...register("week", { required: true, min: 1 })}
                className="p-2 border rounded-md"
              />
              {errors.week && (
                <span className="text-red-500">
                  Week is required and must be at least 1
                </span>
              )}
            </div>

            {/* Note Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="note" className="font-semibold">
                Note:
              </label>
              <textarea
                id="note"
                {...register("note", { required: true })}
                rows={4}
                className="p-2 border rounded-md"
                placeholder="Enter your note here"
              />
              {errors.note && (
                <span className="text-red-500">Note is required</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
    </div>
  );
};
