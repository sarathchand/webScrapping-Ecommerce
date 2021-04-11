import cors from "cors";
import Express from "express";
import {data} from "./Data.js";

const app = Express();

const port = 3200;

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));


app.get("/", (request, response) => {
  response.send("Hello world4");
});

app
  .route("/getdata")
  .get((request, response) => {
    console.log(request);
    response.send(data);
  })
  

// CRUD -> Create Read Update Delete

app.listen(port, () => console.log("Started"));