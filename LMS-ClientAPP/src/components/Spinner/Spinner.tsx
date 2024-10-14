import { ScaleLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <ScaleLoader height={80} width={30} color="#1976D2" />
    </div>
  );
};

export default Spinner;
