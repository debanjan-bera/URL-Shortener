import express from "express";
import { userRegister } from "../controllers/register.controller.js";

const authRouter = express();

authRouter.get("/register", (req, res) => {
  res.send("<h2>hello</h2>");
});
authRouter.post("/register", userRegister);
authRouter.get("/login", (req, res) => {
  res.send("<h2>hello</h2>");
});

// authRouter.post("/login",)

export default authRouter;
