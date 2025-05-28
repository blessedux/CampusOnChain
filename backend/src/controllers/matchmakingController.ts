import { Request, Response } from 'express';
import { matchmakingService } from '../services/matchmakingService';

export const matchmakingController = {
  // Get potential matches for a user
  async getPotentialMatches(req: Request, res: Response) {
    try {
      const { walletAddress } = req.params;
      const matches = await matchmakingService.findPotentialMatches(walletAddress);
      res.json(matches);
    } catch (error) {
      console.error('Error getting potential matches:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Create a match
  async createMatch(req: Request, res: Response) {
    try {
      const { userWalletAddress, matchedWithWalletAddress } = req.body;
      const match = await matchmakingService.createMatch(userWalletAddress, matchedWithWalletAddress);
      res.json(match);
    } catch (error) {
      console.error('Error creating match:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Get user's matches
  async getUserMatches(req: Request, res: Response) {
    try {
      const { walletAddress } = req.params;
      const matches = await matchmakingService.getUserMatches(walletAddress);
      res.json(matches);
    } catch (error) {
      console.error('Error getting user matches:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
}; 