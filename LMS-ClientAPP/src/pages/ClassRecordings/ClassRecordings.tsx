import { Button, Divider } from "@mui/material";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import { TUser } from "../../Types/user.type";
import { Link } from "react-router-dom";
import { CustomAccordion } from "../../components/accordion/CustomAccordion";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useGetAllClassRecordingsQuery } from "../../redux/feature/content/contentAPI";
import { Loader } from "../../components/loader/Loader";
import { TClassRecordings } from "../../Types/content.type";

export const ClassRecordings = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;

  const { data: classRecordings, isLoading } = useGetAllClassRecordingsQuery(
    {}
  );
  //console.log(classRecordings?.data);
  return (
    <div className=" flex flex-col p-2">
      <div className=" flex flex-row justify-between items-center text-xl text-center p-2">
        <h2>Class Recordings</h2>
        {user.role === "instructor" && (
          <Link to={"/add-class-recordings"}>
            <Button variant="contained">ADD CLASS RECORDINGS +</Button>
          </Link>
        )}
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" mt-2">
        <div className=" p-2">
          {isLoading ? (
            <Loader />
          ) : (
            classRecordings?.data.map((record: TClassRecordings) => {
              return (
                <CustomAccordion
                  title={record.title}
                  contentDescription={record.title}
                  createdDate={record.date}
                  link={record.link}
                  icon={<VideocamIcon />}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
