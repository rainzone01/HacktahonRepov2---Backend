import User from '../models/users.model';

const auth = async (email) => {
    return await User.findOne({email});
}

export default auth;