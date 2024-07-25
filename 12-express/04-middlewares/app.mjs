import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
  console.log(req.body);
  res.send("This is an express server");
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
