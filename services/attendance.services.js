// services/attendance.service.js
import * as AttendanceRepository from '../repositories/attendance.repositories.js';

export const createAttendance = async (attendanceData) => {
  return await AttendanceRepository.createAttendance(attendanceData);
};

export const getAllAttendance = async () => {
  return await AttendanceRepository.getAllAttendance();
};

export const getAttendanceById = async (id) => {
  return await AttendanceRepository.getAttendanceById(id);
};

export const getAttendanceByEvent = async (eventId) => {
  return await AttendanceRepository.getAttendanceByEvent(eventId);
};

export const getAttendanceByFaculty = async (facultyId) => {
  return await AttendanceRepository.getAttendanceByFaculty(facultyId);
};

export const updateAttendance = async (id, updateData) => {
  return await AttendanceRepository.updateAttendance(id, updateData);
};

export const deleteAttendance = async (id) => {
  return await AttendanceRepository.deleteAttendance(id);
};
