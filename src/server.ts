import express, { Request, Response } from "express";
import Cors from "cors";

const app = express();
app.use(express.json());
app.use(Cors());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({
    messsage: "server up " + new Date().toISOString(),
  });
});

app.listen(8090, () => {
  console.log("server listening on 8090");
});
