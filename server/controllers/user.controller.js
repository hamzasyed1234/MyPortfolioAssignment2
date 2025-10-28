import User from "../models/user.model.js";

// Create new user
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body); // req.body should include {name, email, password}
    await user.save();
    const safeUser = user.toObject();
    delete safeUser.hashed_password;
    delete safeUser.salt;
    res.status(201).json(safeUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-hashed_password -salt");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-hashed_password -salt");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update user by ID
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-hashed_password -salt");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete user by ID
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete all users
export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany();
    res.json({ message: "All users deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};