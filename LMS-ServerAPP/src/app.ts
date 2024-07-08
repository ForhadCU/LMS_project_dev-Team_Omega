import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);
app.get("/", (req: Request, res: Response) => {
  res.send("BJET-Learning-Management-System site backend Running");
});

app.use(globalErrorHandler);

app.all("*", (req: Request, res: Response) => {
  res.status(400).send({
    succsess: false,
    message: "Route not found",
  });
});

export default app;
