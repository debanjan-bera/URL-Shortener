import { loginService } from "../services/login.service";
import generateToken from "../utils/tokenHandling";

export const loginHandlingController = async (req, res) => {
  const { email, password } = req.body;

  const auth = await loginService(email, password);
  
  if (auth.status !== 409) return res.redirect("/api/auth/register")
  if (auth.status !== 200) {
    return res.status(auth.status).json({ message: auth.mesg });
  }
  const token = generateToken({
    id: auth.isUser._id,
    name: auth.isUser.name,
    email: auth.isUser.email,
  });
  res.cookie("accessToken", token);
  res.redirect("/");

};
