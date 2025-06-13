import * as userServices from '../services/users.services.js'

export const createUsers = async (req,res) => {
    try {
        const user = await userServices.create(req.body);
        res.status(201).json({message: "New User Created", data: user});
    } catch (error) {
         res.status(500).json({message: error.message});
    }
}

export const getAllUsers = async (req,res) => {
    try {
         const userList = await userServices.getAll(req.body);
        res.status(200).json(userList);
    } catch (error) {
         res.status(500).json({message: error.message});
    }

}

export const getUsersById = async (req,res) => {
    try {
         const oneUser = await userServices.getById(req.params.id);
         if(!oneUser) res.status(404).json({message: "User Not Found!"});
         res.status(200).json(oneUser)
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

export const updateUsers = async (req,res) => {
    try {
        const updatedUser = await userServices.update(req.params.id, req.body);
        if(!updatedUser) res.status(404).json({message: "User Not Found! Nothing to Update!"})
        res.json({message: "User Updated", data: updatedUser})
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

export const deleteUsers = async (req,res) => {
    try {
        const deletedUser = await userServices.remove(req.params.id);
        if(!deletedUser) res.status(404).json({message: "User Not Found! Nothing to Delete!"})
        res.json({message: "User Deleted", data: deletedUser})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

