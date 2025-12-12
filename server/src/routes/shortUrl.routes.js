import express from "express";
import { createShortUrl, redirectMainUrl } from "../controllers/shortUrl.controller.js";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send(`<h2> create Data</h2>`)

});
router.post("/", createShortUrl);

router.post("/:id",redirectMainUrl);


export default router;
