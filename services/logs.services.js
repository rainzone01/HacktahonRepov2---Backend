import * as logsRepo from '../repositories/logs.repositories.js'

export const create = (data) => logsRepo.createLogs(data);


export const getAll = () => logsRepo.getAllLogs();


export const getById = (id) => logsRepo.getLogsById(id);


export const update = (id, data) => logsRepo.updateLogs(id, data);


export const remove = (id) => logsRepo.deleteLogs(id);