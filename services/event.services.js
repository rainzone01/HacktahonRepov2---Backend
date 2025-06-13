import * as eventRepo from '../repositories/event.repositories.js'

export const create = (data) => eventRepo.createEvent(data);

export const getAll = () => eventRepo.getAllEvents();

export const getById = (id) => eventRepo.getEventById(id);

export const update = (id, data) => eventRepo.updateEvent(id, data);

export const remove = (id) => eventRepo.deleteEvent(id);