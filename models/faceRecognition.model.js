// models/facialRecognition.model.js
import mongoose from 'mongoose';

const FacialRecognitionSchema = new mongoose.Schema({
  faculty_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff', // Make sure this matches your Staff model
    required: true,
    unique: true // one facial profile per person
  },
  face_encoding: {
    type: [Number], // an array of numbers representing the encoding
    required: true
  },
  photo_reference_url: {
    type: String, // optional: image used to register
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('FacialRecognitionProfile', FacialRecognitionSchema, 'facialRecognition');
