import User from '../models/users.model.js'

export const createUsers = async (data) => {
    return await User.create(data);
}

export const getAllUsers = async () => {
    return await User.find();
}

export const getUsersById = async (id) => {
    return await User.findById(id);
}

export const updateUsers = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
}

export const deleteUsers = async (id) => {
    return await User.findByIdAndDelete(id);
}