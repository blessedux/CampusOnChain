import { Router } from 'express';
import { userController } from '../controllers/userController';

const router = Router();

// Get user by wallet address
router.get('/:walletAddress', userController.getUserByWallet);

// Create or update user
router.post('/', userController.upsertUser);

// Update user interests
router.put('/:walletAddress/interests', userController.updateInterests);

// Update user skills
router.put('/:walletAddress/skills', userController.updateSkills);

export default router; 