import Event from '../models/event.model.js'

export const createEvent = async (eventData) => {
  return await Event.create(eventData);
};

export const getAllEvents = async () => {
  return await Event.find()
    .populate('location_id')
    .populate('created_by', 'firstName lastName email');
};

export const getEventById = async (id) => {
  return await Event.findById(id)
    .populate('location_id')
    .populate('created_by', 'firstName lastName email');
};

export const updateEvent = async (id, updateData) => {
  return await Event.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteEvent = async (id) => {
  return await Event.findByIdAndDelete(id);
};