import Qualification from "../models/qualification.model.js";

// Create a new qualification
export const createQualification = async (req, res) => {
  try {
    const qualification = new Qualification(req.body);
    await qualification.save();
    res.status(201).json(qualification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all qualifications
export const getAllQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single qualification by ID
export const getQualificationById = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) return res.status(404).json({ message: "Qualification not found" });
    res.json(qualification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a qualification by ID
export const updateQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!qualification) return res.status(404).json({ message: "Qualification not found" });
    res.json(qualification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a qualification by ID
export const deleteQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndDelete(req.params.id);
    if (!qualification) return res.status(404).json({ message: "Qualification not found" });
    res.json({ message: "Qualification deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete all qualifications
export const deleteAllQualifications = async (req, res) => {
  try {
    await Qualification.deleteMany();
    res.json({ message: "All qualifications deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};