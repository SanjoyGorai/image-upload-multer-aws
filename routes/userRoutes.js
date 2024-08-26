import express from 'express';
import upload from '../middleware/multerConfig.js';
import { createUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/create', upload.single('profileImage'), createUserProfile);

// Other routes for CRUD operations

export default router;
