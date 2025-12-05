import express from "express";
import { createShortUrl, redirectMainUrl } from "../controllers/shortUrl.controller.js";

const router = express.Router();

router.post("/", createShortUrl);

router.post("/:id",redirectMainUrl);


export default router;
