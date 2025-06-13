import * as StaffService from "../services/staff.services.js";

export const createStaff = async (req, res) => {
  try {
    const staff = await StaffService.create(req.body);
    res.status(201).json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getStaff = async (req, res) => {
  try {
    const staffList = await StaffService.getAll();
    res.json(staffList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getStaffById = async (req, res) => {
  try {
    const staff = await StaffService.getById(req.params.id);
    if (!staff) return res.status(404).json({ message: "Not Found" });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateStaff = async (req, res) => {
  try {
    const updated = await StaffService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Not Found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteStaff = async (req, res) => {
  try {
    const deleted = await StaffService.remove(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not Found" });
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


