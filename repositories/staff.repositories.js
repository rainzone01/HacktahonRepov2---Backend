import Staff from "../models/staff.model.js";

export const createStaff = async (data) => {
  return await Staff.create(data);
};

export const getAllStaff = async () => {
  return await Staff.find();
};

export const getStaffById = async (id) => {
  return await Staff.findById(id);
};

export const updateStaff = async (id, data) => {
  return await Staff.findByIdAndUpdate(id, data, { new: true });
};

export const deleteStaff = async (id) => {
  return await Staff.findByIdAndDelete(id);
}; 




//ig import a repo sa services