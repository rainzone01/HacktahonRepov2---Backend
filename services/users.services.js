import * as usersRepo from '../repositories/users.repositories.js'

export const create = async (data) => usersRepo.createUsers(data); 

export const getAll = async () => usersRepo.getAllUsers();

export const getById = async (id) => usersRepo.getUsersById(id);   

export const update = async (id, data) => usersRepo.updateUsers(id, data);   

export const remove = async (id) => usersRepo.deleteUsers(id);