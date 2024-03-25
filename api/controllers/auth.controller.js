import User from "../models/user.model.js";
import  bcryptjs  from "bcryptjs";
import  errorHandler  from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    password === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, 'All fields are required'));
  }

  const hashPassword = await bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.json("signup sucssfull");
  } catch (error) {
   next(error);
  }
};
