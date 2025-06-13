import * as locationRepo from '../repositories/location.repositories.js'

export const create = (data) => locationRepo.createLocation(data);

export const getAll = () => locationRepo.getAllLocation();

export const getById = (id) => locationRepo.getLocationById(id);

export const update = (id, data) => locationRepo.updateLocation(id,data);

export const remove = (id) => locationRepo.deleteLocation(id);