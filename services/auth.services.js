import authRepo from '../repositories/auth.repo.js';

async function login(email, password) {
    try {
        const user = authRepo(email);
        if(!user) {
            throw new Error("User not found.");
        }
    } catch (error) {
        throw new Error("Invalid credentials");
    }
}

export default {
    login
}