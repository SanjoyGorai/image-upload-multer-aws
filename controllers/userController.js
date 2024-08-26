import User from '../models/userModel.js';
import { uploadToS3, deleteLocalFile } from '../services/s3Service.js';

export const createUserProfile = async (req, res) => {
    const { name, email } = req.body;
    const file = req.file;

    try {
        if (!name || !email || !file) {
            return res.status(400).json({ message: 'Name, email, and profile image are required' });
        }

        const s3Response = await uploadToS3(file);
        deleteLocalFile(file.path);

        const user = await User.create({
            name,
            email,
            profileImageUrl: s3Response.Location,
        });

        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Implement other CRUD operations: getUserById, getAllUsers, updateUserById, deleteUserById, deleteAllUsers
