import express from "express";
import path from "path"
const app = express();

app.use(express.static("public"))
const dirName = import.meta.dirname


app.get("/url-shortener",(req,res)=>{
  return res.sendFile(path.join(dirName,"public","shortener.html"))
})

// app.get("/login", (req, res) => {
//   res.sendFile(path.join(dirName, "public", "Login.html"), (err) => {
//     if (err) {
//       res.status(404).sendFile(path.join(dirName, "public", "Error.html"));
//     }
//   });
// });