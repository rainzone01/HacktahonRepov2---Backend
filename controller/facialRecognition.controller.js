// controllers/facialRecognition.controller.js
import {
  createFacialProfileService,
  getAllFacialProfilesService,
  getFacialProfileByFacultyIdService,
  getFacialProfileByIdService,
  updateFacialProfileService,
  deleteFacialProfileService,
  getAllEncodingsService
} from '../services/faceRecognition.services.js';

// Create new facial recognition profile
export const createFacialProfileController = async (req, res) => {
  try {
    const data = req.body;
    const result = await createFacialProfileService(data);
    res.status(201).json({ message: 'Facial profile created successfully', result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all facial recognition profiles
export const getAllFacialProfilesController = async (req, res) => {
  try {
    const profiles = await getAllFacialProfilesService();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get profile by faculty ID
export const getFacialProfileByFacultyIdController = async (req, res) => {
  try {
    const { facultyId } = req.params;
    const profile = await getFacialProfileByFacultyIdService(facultyId);
    if (!profile) {
      return res.status(404).json({ message: 'Facial profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get profile by document ID
export const getFacialProfileByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await getFacialProfileByIdService(id);
    if (!profile) {
      return res.status(404).json({ message: 'Facial profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a facial profile
export const updateFacialProfileController = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updated = await updateFacialProfileService(id, updates);
    if (!updated) {
      return res.status(404).json({ message: 'Facial profile not found' });
    }
    res.status(200).json({ message: 'Facial profile updated', updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a facial profile
export const deleteFacialProfileController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteFacialProfileService(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Facial profile not found' });
    }
    res.status(200).json({ message: 'Facial profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all face encodings
export const getAllEncodingsController = async (req, res) => {
  try {
    const encodings = await getAllEncodingsService();
    res.status(200).json(encodings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
