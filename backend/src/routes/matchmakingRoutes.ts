import { Router } from 'express';
import { matchmakingController } from '../controllers/matchmakingController';

const router = Router();

// Get potential matches for a user
router.get('/potential/:walletAddress', matchmakingController.getPotentialMatches);

// Create a match
router.post('/', matchmakingController.createMatch);

// Get user's matches
router.get('/:walletAddress', matchmakingController.getUserMatches);

export default router; 