// controllers/attendance.controller.js
import * as AttendanceService from '../services/attendance.services.js';

export const createAttendance = async (req, res) => {
  try {
    const attendance = await AttendanceService.createAttendance(req.body);
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllAttendance = async (req, res) => {
  try {
    const attendances = await AttendanceService.getAllAttendance();
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAttendanceById = async (req, res) => {
  try {
    const attendance = await AttendanceService.getAttendanceById(req.params.id);
    if (!attendance) return res.status(404).json({ message: 'Attendance not found' });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAttendanceByEvent = async (req, res) => {
  try {
    const records = await AttendanceService.getAttendanceByEvent(req.params.eventId);
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAttendanceByFaculty = async (req, res) => {
  try {
    const records = await AttendanceService.getAttendanceByFaculty(req.params.facultyId);
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAttendance = async (req, res) => {
  try {
    const updated = await AttendanceService.updateAttendance(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Attendance not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAttendance = async (req, res) => {
  try {
    const deleted = await AttendanceService.deleteAttendance(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Attendance not found' });
    res.status(200).json({ message: 'Attendance deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
