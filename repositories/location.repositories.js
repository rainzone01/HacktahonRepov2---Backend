import Location from '../models/location.model.js'

export const createLocation = async (data) => {
return await Location.create(data);
}

export const getAllLocation = async () => {
    return await Location.find();
} 

export const getLocationById = async (id) => {
    return await Location.findById(id);
}

export const updateLocation = async(id, data) => {
    return await Location.findByIdAndUpdate(id, data, { new: true });
}

export const deleteLocation = async(id) => {
    return await Location.findByIdAndDelete(id);
}