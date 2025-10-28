import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../../config/config.js";

// Signup (register)
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    // Use virtual password field — schema handles hashing
    const user = new User({
      name,
      email,
      password
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user: { _id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Signin (login)
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Use schema's authenticate method
    const isValid = user.authenticate(password);
    if (!isValid) return res.status(401).json({ message: "Invalid password" });

    // Create JWT token
    const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: "1h" });

    res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};