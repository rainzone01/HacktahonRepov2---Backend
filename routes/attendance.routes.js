// routes/attendance.routes.js
import { Router } from 'express';
import {
  createAttendance,
  getAllAttendance,
  getAttendanceById,
  getAttendanceByEvent,
  getAttendanceByFaculty,
  updateAttendance,
  deleteAttendance,
} from '../controller/attendance.controller.js';

const router = Router();

// Create a new attendance record
router.post('/', createAttendance);

// Get all attendance records
router.get('/', getAllAttendance);

// Get a specific attendance record by ID
router.get('/:id', getAttendanceById);

// Get all attendance records for a specific event
router.get('/event/:eventId', getAttendanceByEvent);

// Get all attendance records for a specific faculty member
router.get('/faculty/:facultyId', getAttendanceByFaculty);

// Update an attendance record
router.put('/:id', updateAttendance);

// Delete an attendance record
router.delete('/:id', deleteAttendance);

export default router;
