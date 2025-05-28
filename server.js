import { error } from "console";
import express from "express";
import { readFile, writeFile } from "fs";
import path from "path"
const app = express();

const dirName = import.meta.dirname
const DATA_FILE = path.join("data",linkSync.json)

app.use(express.static("public"));

const serveFile = async (res,filePath,contentType) =>{
  try{
    const data = await readFile(filePath);
    res.writehead(200,{"Content-Type": contentType});
    res.end(data)

  }catch(err){
    res.writehead(200,{"Content-Type": "text/palin"});
    res.end("404 page not found")
  }
}


const loadlinks = async ()=>{
  try{
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data)

  }catch(err){
    if(err.conde === "ENOENT"){
      await readFile(DATA_FILE, JSON.stringify({}));
      return {};

    }
    throw error;
  }
}


const saveLinks = async(links) =>{
  await writeFile(DATA_FILE,JSON.stringify(links))
}


app.get("/", async(req,res)=>{
  try{
    const file = await fs.readFile(path.join("views",index.html));
  }catch(err){
    
  }
})
app.post("/:url-shortener",(req,res)=>{
  return res.sendFile(path.join(dirName,"public","index.html"))
})

// app.get("/login", (req, res) => {
//   res.sendFile(path.join(dirName, "public", "Login.html"), (err) => {
//     if (err) {
//       res.status(404).sendFile(path.join(dirName, "public", "Error.html"));
//     }
//   });
// });


const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})