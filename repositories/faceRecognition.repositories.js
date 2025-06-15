// repositories/facialRecognition.repository.js
import FacialRecognitionProfile from '../models/faceRecognition.model.js';

// Create a facial profile
export const createFacialProfile = async (data) => {
  return await FacialRecognitionProfile.create(data);
};

// Get all facial profiles
export const getAllFacialProfiles = async () => {
  return await FacialRecognitionProfile.find().populate('faculty_id', 'fname lname email');
};

// Get a facial profile by faculty ID
export const getFacialProfileByFacultyId = async (facultyId) => {
  return await FacialRecognitionProfile.findOne({ faculty_id: facultyId }).populate('faculty_id', 'fname lname email');
};

// Get a facial profile by MongoDB document ID
export const getFacialProfileById = async (id) => {
  return await FacialRecognitionProfile.findById(id).populate('faculty_id', 'fname lname email');
};

// Update facial profile (e.g., new encoding or photo)
export const updateFacialProfile = async (id, updates) => {
  return await FacialRecognitionProfile.findByIdAndUpdate(id, updates, { new: true });
};

// Delete facial profile by document ID
export const deleteFacialProfile = async (id) => {
  return await FacialRecognitionProfile.findByIdAndDelete(id);
};

// Match encoding with all profiles (for future face recognition logic)
export const getAllEncodings = async () => {
  return await FacialRecognitionProfile.find({}, 'faculty_id face_encoding');
};
