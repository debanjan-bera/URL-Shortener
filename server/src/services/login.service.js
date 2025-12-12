export const loginService = async (email, password) => {
  if (!email || !password)
    return { status: 400, mesg: "All crediantials are required" };

  const isUser = await findUserByEmail(email);

  if (!isUser) return { status: 409, mesg: "Pls create register then used sign in" };

  const isPassword = await verifyPassword(password);

  if (!isPassword) return { status: 401, mesg: "Invalid Password" };

  return {status:200, mesg: "User is successfully logging", isUser}
};
