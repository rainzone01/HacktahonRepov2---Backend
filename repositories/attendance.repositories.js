// repositories/attendance.repository.js
import Attendance from '../models/attendance.model.js';

export const createAttendance = async (data) => {
  return await Attendance.create(data);
};

export const getAllAttendance = async () => {
  return await Attendance.find()
    .populate('event_id', 'title event_date')
    .populate('faculty_id', 'fname lname email');
};

export const getAttendanceById = async (id) => {
  return await Attendance.findById(id)
    .populate('event_id', 'title event_date')
    .populate('faculty_id', 'fname lname email');
};

export const getAttendanceByEvent = async (eventId) => {
  return await Attendance.find({ event_id: eventId })
    .populate('faculty_id', 'fname lname email');
};

export const getAttendanceByFaculty = async (facultyId) => {
  return await Attendance.find({ faculty_id: facultyId })
    .populate('event_id', 'title event_date');
};

export const updateAttendance = async (id, updates) => {
  return await Attendance.findByIdAndUpdate(id, updates, { new: true })
    .populate('event_id', 'title event_date')
    .populate('faculty_id', 'fname lname email');
};

export const deleteAttendance = async (id) => {
  return await Attendance.findByIdAndDelete(id);
};
