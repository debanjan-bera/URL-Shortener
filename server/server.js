import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.config.js";
import shortUrl from "./src/routes/shortUrl.routes.js";
import errorHandler from "./src/middleware/globalErroehandler.js";

const app = express();
dotenv.config("./.env");
const PORT = 4000;

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/url/create", shortUrl);

app.get("/", (req, res) => {
  res.send(`<h2>Hello Users</>`);
});

app.use(errorHandler);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
