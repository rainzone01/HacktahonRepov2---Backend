import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  faculty_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: true
  },
  recognized_at: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Present', 'Absent']
  },
  remarks: {
    type: String
  },
  photo_capture_url: {
    type: String
  }
});

export default mongoose.model('Attendance', AttendanceSchema, "attendance");
