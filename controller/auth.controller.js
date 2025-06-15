import authServ from '../services/auth.services';

const loginUser = async (req, res) => {
    try {
        const user = await authServ.login(req.body);
        if(!user) res.status(404).json({message: "Email not found"});
        res.status(200).json(user)
    } catch (error) {
        res.status(500).error({ message: error.message });
    }
}

export default {
    loginUser
}