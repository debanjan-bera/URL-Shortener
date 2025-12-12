import argon2 from "argon2";
import { createNewUser, findUserByEmail } from "../dao/register.dao.js";
import { hashPasswordHandling } from "../utils/passwordHandling.js";

export const registerUserService = async ({ name, email, password }) => {
  if (!name || !email || !password)
    return { status: 400, message: "All fields are required" };

  const existingUser = await findUserByEmail(email);
  if (existingUser) return { status: 409, message: "User already exists", };
  
  const hashPassword = await hashPasswordHandling(password);
  
  const user = await createNewUser({ name, email, password: hashPassword });

  return {status: 200, message: `${user.name}, registration completed`,user};
};
