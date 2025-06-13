import express from 'express'
import {createLocation,  getAllLocation, getLocationById, updateLocation, deleteLocation} from '../controller/location.controller.js'


const router = express.Router();

router.post('/', createLocation);

router.get('/', getAllLocation);

router.get('/:id', getLocationById);

router.put('/:id', updateLocation);

router.delete('/:id', deleteLocation);


export default router


