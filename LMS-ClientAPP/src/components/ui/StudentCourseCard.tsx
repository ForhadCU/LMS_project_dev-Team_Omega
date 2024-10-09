import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";

interface IStudentCourseCardsProps {
  link: string;
  title: string;
  description: string;
  singleAction: string;
  status?: "pending" | "active" | "inactive";
}

export const StudentCourseCard = ({
  title,
  description,
  link,
  singleAction,
}: IStudentCourseCardsProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.edinburghcollege.ac.uk/media/c5ghakxe/pexels-tirachard-kumtanom-733856.jpg?center=0.40242891032492345,0.50277250251192762&mode=crop&quality=80&width=780&height=400&rnd=132717830764430000"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={link}>
          <Button size="small" variant="outlined">
            {singleAction}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
