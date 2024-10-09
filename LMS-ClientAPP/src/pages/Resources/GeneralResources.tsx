import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import { TUser } from "../../Types/user.type";
import { Button, Divider } from "@mui/material";
import { useGetAllGeneralResourceQuery } from "../../redux/feature/content/contentAPI";
import { Loader } from "../../components/loader/Loader";
import { TGeneralResources } from "../../Types/content.type";
import { CustomAccordion } from "../../components/accordion/CustomAccordion";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

export const GeneralResources = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const {
    data: generalResources,
    isError,
    isLoading,
  } = useGetAllGeneralResourceQuery({});
  console.log(generalResources?.data);
  return (
    <div className=" flex flex-col p-2">
      <div className=" flex flex-row justify-between items-center text-xl text-center p-2">
        <h2>General Resources</h2>
        {user.role === "instructor" && (
          <Link to={"/add-general-resources"}>
            <Button variant="contained">ADD General Resource +</Button>
          </Link>
        )}
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" mt-2">
        {isError ? (
          <h2 className=" my-2 text-xl text-red-700">
            Error Occured while fetching data
          </h2>
        ) : isLoading ? (
          <Loader />
        ) : (
          generalResources?.data.map((genResource: TGeneralResources) => {
            return (
              <CustomAccordion
                title={genResource.title}
                contentDescription={genResource.description}
                createdDate={genResource.status}
                link={genResource.link}
                icon={<LibraryBooksIcon />}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
