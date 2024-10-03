import { Avatar, Divider, Typography } from "@mui/material";

export const CourseDetails = () => {
  const sensei_prof_pic_default =
    "https://res.cloudinary.com/teepublic/image/private/s--NtcgQRqE--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-293,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-404,y_-215/b_rgb:ffffff/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1631035680/production/designs/24167377_0.jpg";
  return (
    <div className=" w-full p-3 mx-0 flex flex-col">
      <div className=" w-full p-2 block">
        <Typography variant="h3" component={"p"}>
          {" "}
          <p>Course Name</p>{" "}
        </Typography>
        <Typography variant="body1" gutterBottom className=" my-2">
          Course type
        </Typography>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" my-2 p-2 block">
        <Typography variant="h4" gutterBottom>
          Instructors
        </Typography>
        <div className=" p-3 flex flex-col">
          <div className=" flex flex-row items-start gap-2">
            <Avatar src={sensei_prof_pic_default} alt="sensei_prof_pic" />
            <div className=" block ">
              <Typography variant="h6" gutterBottom>
                Sensei Name
              </Typography>
              <Typography variant="caption" gutterBottom>
                Sensei email
              </Typography>
            </div>
          </div>
          <div className=" flex flex-row items-start gap-2">
            <Avatar src={sensei_prof_pic_default} alt="sensei_prof_pic" />
            <div className=" block ">
              <Typography variant="h6" gutterBottom>
                Sensei Name
              </Typography>
              <Typography variant="caption" gutterBottom>
                Sensei email
              </Typography>
            </div>
          </div>
        </div>
        <Divider variant="fullWidth"></Divider>
        <div className=" flex flex-col p-3">
          <Typography variant="h4" gutterBottom>
            Description
          </Typography>
          <Typography variant="body2" component="p">
            <p>Description body</p>
          </Typography>
        </div>
      </div>
    </div>
  );
};
