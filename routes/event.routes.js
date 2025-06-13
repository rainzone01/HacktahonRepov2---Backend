import express from 'express'
import {createEvent, getAllEvent, getEventById, updateEvent, deleteEvent} from '../controller/event.controller.js'

const router = express.Router();

router.post('/', createEvent);

router.get('/', getAllEvent);

router.get('/:id', getEventById);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

export default router

