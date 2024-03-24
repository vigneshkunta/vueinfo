import User from "../models/user.model";
import { bcryptjs } from "bcryptjs";
import { errorHandler } from "../utils/error";

export const signup = async (req, res) => {
  const { username, email, passsword } = req.body;
  if (
    !username ||
    !email ||
    !passsword ||
    passsword === "" ||
    email === "" ||
    passsword === ""
  ) {
    next(errorHandler(400, 'All fields are required'));
  }

  const hashPassword = await bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    passsword: hashPassword,
  });

  try {
    await newUser.save();
    res.json("signup sucssfull");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
