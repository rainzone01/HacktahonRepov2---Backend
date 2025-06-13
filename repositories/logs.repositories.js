import Log from '../models/logs.model.js'

export const createLogs = async (data) => {
return await Log.create(data);
}

export const getAllLogs = async () => {
   return await Log.find(); 
}

export const getLogsById = async (id) => {
   return await Log.findById(id); 
}

export const updateLogs = async (id, data) => {
   return await Log.findByIdAndUpdate(id, data, {new: true}); 
}

export const deleteLogs = async (id) => {
   return await Log.findByIdAndDelete(id); 
}