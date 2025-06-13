import * as logServices from '../services/logs.services.js'

export const createLogs =  async (req,res) => {
try {
    const logs = await logServices.create(req.body);
    res.json({message: "Logs Created", data: logs});
} catch (error) {
    res.status(500).json({message: error.message});
}
};

export const getAllLogs =  async (req,res) => {
try {
    const logsList = await logServices.getAll(req.body);
    if (!logsList) res.json({message: "No Logs Recorded!"})
    res.json({message: "Logs Found", data: logsList});
} catch (error) {
    res.status(500).json({message: error.message});
}
};

export const getLogsById =  async (req,res) => {
try {
    const oneLogs = await logServices.getById(req.params.id);
    if (!oneLogs) res.status(404).json({message: "Logs Not Found!"})
    res.json({message: "Logs Found", data: oneLogs});
} catch (error) {
    res.status(500).json({message: error.message});
}
};

export const updateLogs =  async (req,res) => {
try {
    const updatedLogs = await logServices.update(req.params.id, req.body);
    if (!updatedLogs) res.status(404).json({message: "Logs Not Found!"})
    res.json({message: "Logs Updated Successfully!", data: updatedLogs});
} catch (error) {
    res.status(500).json({message: error.message});
}
};

export const deleteLogs =  async (req,res) => {
try {
    const deletedLogs = await logServices.update(req.params.id);
    if (!deletedLogs) res.status(404).json({message: "Logs Not Found!"})
    res.json({message: "Logs Deleted Successfully!", data: deletedLogs});
} catch (error) {
    res.status(500).json({message: error.message});
}
};