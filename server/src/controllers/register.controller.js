import { registerUserService } from "../services/register.service.js";

export const userRegister = async (req, res) => {
  try {
    const result = await registerUserService(req.body);
    
    if (result.status === 409 ) return res.redirect("/api/auth/login");
    // if (result.status === 409 || result.status === 200) return res.redirect("/api/auth/login");

    return res.status(result.status).json({
      message: result.message,
      user: result.user || null,
    });
  } catch (error) {
    console.log(error);
  }
};
