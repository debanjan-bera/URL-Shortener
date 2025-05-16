import express from "express";
import path from "path"
const app = express();

app.use(express.static("public"))
const dirName = import.meta.dirname

app.get("/login", (req, res) => {
  res.sendFile(path.join(dirName, "public", "Login.html"), (err) => {
    if (err) {
      res.status(404).sendFile(path.join(dirName, "public", "404.html"));
    }
  });
});
