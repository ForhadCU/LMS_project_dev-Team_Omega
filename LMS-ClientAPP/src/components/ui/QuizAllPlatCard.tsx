import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button } from "@mui/material";

interface IAllPlatQuizProps {
  img?: string;
  title: string;
  quizType: string;
  link: string;
}
export const QuizAllPlatCard = ({
  img,
  title,
  quizType,
  link,
}: IAllPlatQuizProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia>
          <img src={img} className=" h-[300px] w-[350px]" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {quizType}
          </Typography>
          <a href={link} target="_blank" rel="noreferrer">
            <Button role="link">Go To Quiz</Button>
          </a>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
