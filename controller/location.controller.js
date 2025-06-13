import express from 'express'
import * as locationServices from '../services/location.services.js'


export const createLocation = async (req,res) => {
try {
    const location = await locationServices.create(req.body);
res.status(201).json(location)
} catch (error) {
    res.status(500).json({message: error.message})
}
}

export const getAllLocation = async (req, res) => {
try {
    const locationList = await locationServices.getAll(req.body);
    res.json(locationList);
} catch (error) {
   res.status(500).json({message: error.message});
}
}

export const getLocationById = async (req,res) => {
    try {
      const oneLocation = await locationServices.getById(req.params.id);
      if (!oneLocation) res.status(404).json({message: error.message})  
        res.json(oneLocation);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateLocation = async (req, res) => {
    try {
       const updatedLocation = await locationServices.update(req.params.id, req.body);
       if (!updatedLocation) res.status(404).json({message: error.message});  
       res.json(updatedLocation);
    } catch (error) {
         res.status(500).json({message: error.message});
    }
}

export const deleteLocation = async (req, res) => {
    try {
        const deletedLocation = await locationServices.remove(req.params.id);
          if (!deletedLocation) res.status(404).json({message: error.message}); 
          res.status(201).json({message: "Location Deleted!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
} 