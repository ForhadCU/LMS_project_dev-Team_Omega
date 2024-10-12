import { evaluate_png } from "../../constants";

export const StudentEvaluationCard = () => {
  return (
    <div className=" w-[500px] h-[500px] p-2 border shadow-md rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 cursor-pointer transition duration-300 hover:ease-in-out">
      <div className=" p-2 flex flex-col justify-center items-center mt-[5%]">
        <h2 className=" p-4 text-2xl font-bold text-white">
          Student Evaluation
        </h2>
        <img className=" w-[300px] h-[300px]" src={evaluate_png} alt="" />
      </div>
    </div>
  );
};
