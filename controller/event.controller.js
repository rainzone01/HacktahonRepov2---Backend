import * as eventServices from '../services/event.services.js'

export const createEvent = async (req, res) => {
try {
    const event = await eventServices.create(req.body)
    res.status(201).json(event)
} catch (error) {
    res.status(500).json({message: error.message})
}
}

export const getAllEvent = async (req, res) => {
    try {
      const eventList = await eventServices.getAll(req.body);
      res.status(201).json({eventList})  
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getEventById = async (req, res) => {
    try {
        const oneEvent = await eventServices.getById(req.params.id);
        if(!oneEvent) {res.status(404).json({message: "Event not Found!"})}
        res.json(oneEvent)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateEvent = async (req, res) => {
    try {
     const updatedEvent = await eventServices.update(req.params.id, req.body);
     if(!updatedEvent) {res.status(404).json({message: "Event not Found"})}
     res.json(updatedEvent)
    } catch (error) {
         res.status(500).json({message: error.message})
    }
}

export const deleteEvent = async (req, res) => {
    try {
    const deletedEvent = await eventServices.remove(req.params.id);
    if(!deletedEvent) res.status(404).json({message: "Event Not Found"})
        res.json({message: "Event Deleted Successfully!"})
    } catch (error) {
         res.status(500).json({message: error.message})
    }
} 