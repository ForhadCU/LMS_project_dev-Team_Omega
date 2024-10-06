import { useParams } from "react-router-dom";
import { CustomAccordion } from "../../components/accordion/CustomAccordion";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetContentsQuery } from "../../redux/feature/content/contentAPI";
import { Loader } from "../../components/loader/Loader";
import { TContent } from "../../Types/content.type";

export const Resources = () => {
  const params = useParams();
  const courseID = params.id;
  const query = {
    courseID,
    contentType: "resource",
  };
  const {
    data: courseResources,
    isLoading,
    isError,
  } = useGetContentsQuery(query);

  return (
    <div className=" flex flex-col">
      <div className=" font-bold flex text-center text-2xl w-full">
        Resources
      </div>

      <div className=" flex flex-row justify-end my-2">
        <Link to={`/course-content-create/${courseID}`}>
          <Button variant="contained">Add Resource+</Button>
        </Link>
      </div>
      {isError ? (
        <div className=" flex text-red-600">
          Error occured while fetching data!
        </div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className=" flex flex-col gap-2">
          {courseResources?.data.map((resource: TContent) => {
            return (
              <CustomAccordion
                key={resource._id}
                title={resource.title}
                contentDescription={resource.description}
                createdDate={resource.createDate}
                link={resource.contentlink}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
