import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

interface IInfoCardsProps {
  pics: string;
  title: string;
  link: string;
}
export const InfoCards = ({ pics, title, link }: IInfoCardsProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={link}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={pics}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className=" text-center"
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
