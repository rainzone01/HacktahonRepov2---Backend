// services/facialRecognition.service.js
import {
  createFacialProfile,
  getAllFacialProfiles,
  getFacialProfileByFacultyId,
  getFacialProfileById,
  updateFacialProfile,
  deleteFacialProfile,
  getAllEncodings
} from '../repositories/faceRecognition.repositories.js';

// Create a new facial profile
export const createFacialProfileService = async (data) => {
  try {
    return await createFacialProfile(data);
  } catch (error) {
    throw new Error(`Error creating facial profile: ${error.message}`);
  }
};

// Get all facial profiles
export const getAllFacialProfilesService = async () => {
  try {
    return await getAllFacialProfiles();
  } catch (error) {
    throw new Error(`Error retrieving facial profiles: ${error.message}`);
  }
};

// Get a facial profile by faculty ID
export const getFacialProfileByFacultyIdService = async (facultyId) => {
  try {
    return await getFacialProfileByFacultyId(facultyId);
  } catch (error) {
    throw new Error(`Error retrieving profile by faculty ID: ${error.message}`);
  }
};

// Get a facial profile by document ID
export const getFacialProfileByIdService = async (id) => {
  try {
    return await getFacialProfileById(id);
  } catch (error) {
    throw new Error(`Error retrieving profile by ID: ${error.message}`);
  }
};

// Update a facial profile
export const updateFacialProfileService = async (id, updates) => {
  try {
    return await updateFacialProfile(id, updates);
  } catch (error) {
    throw new Error(`Error updating facial profile: ${error.message}`);
  }
};

// Delete a facial profile
export const deleteFacialProfileService = async (id) => {
  try {
    return await deleteFacialProfile(id);
  } catch (error) {
    throw new Error(`Error deleting facial profile: ${error.message}`);
  }
};

// Get all encodings (for facial recognition matching)
export const getAllEncodingsService = async () => {
  try {
    return await getAllEncodings();
  } catch (error) {
    throw new Error(`Error retrieving encodings: ${error.message}`);
  }
};
