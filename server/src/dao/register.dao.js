import Users from "../models/user.model.js";

export const findUserByEmail = async(email) => {
  return await Users.findOne({ email });
};
export const createNewUser = async (userData) => {
  const newUsers = new Users(userData);
  return await newUsers.save();
};
