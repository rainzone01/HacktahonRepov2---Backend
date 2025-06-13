import * as StaffRepo from "../repositories/staff.repositories.js";

export const create = (data) => StaffRepo.createStaff(data);
export const getAll = () => StaffRepo.getAllStaff();
export const getById = (id) => StaffRepo.getStaffById(id);
export const update = (id, data) => StaffRepo.updateStaff(id, data);
export const remove = (id) => StaffRepo.deleteStaff(id);

// import services to controller