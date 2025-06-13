// routes/facialRecognition.routes.js
import express from 'express';
import {
  createFacialProfileController,
  getAllFacialProfilesController,
  getFacialProfileByFacultyIdController,
  getFacialProfileByIdController,
  updateFacialProfileController,
  deleteFacialProfileController,
  getAllEncodingsController
} from '../controller/facialRecognition.controller.js';

const router = express.Router();

// @route   POST /api/facial-recognition
// @desc    Create a new facial profile
router.post('/', createFacialProfileController);

// @route   GET /api/facial-recognition
// @desc    Get all facial profiles
router.get('/', getAllFacialProfilesController);

// @route   GET /api/facial-recognition/faculty/:facultyId
// @desc    Get profile by faculty ID
router.get('/faculty/:facultyId', getFacialProfileByFacultyIdController);

// @route   GET /api/facial-recognition/:id
// @desc    Get profile by document ID
router.get('/:id', getFacialProfileByIdController);

// @route   PUT /api/facial-recognition/:id
// @desc    Update a facial profile
router.put('/:id', updateFacialProfileController);

// @route   DELETE /api/facial-recognition/:id
// @desc    Delete a facial profile
router.delete('/:id', deleteFacialProfileController);

// @route   GET /api/facial-recognition/encodings/all
// @desc    Get all facial encodings (for matching)
router.get('/encodings/all', getAllEncodingsController);

export default router;
