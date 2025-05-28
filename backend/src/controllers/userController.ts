import { Request, Response } from 'express';
import { supabase } from '../lib/supabase';

export const userController = {
  // Get user by wallet address
  async getUserByWallet(req: Request, res: Response) {
    try {
      const { walletAddress } = req.params;
      
      const { data: user, error } = await supabase
        .from('users')
        .select('*, interests(*), skills(*)')
        .eq('walletAddress', walletAddress)
        .single();

      if (error) {
        console.error('Error fetching user:', error);
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Create or update user
  async upsertUser(req: Request, res: Response) {
    try {
      const { walletAddress, username, university, career, bio, profileImage } = req.body;

      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('walletAddress', walletAddress)
        .single();

      let result;
      if (existingUser) {
        // Update existing user
        const { data, error } = await supabase
          .from('users')
          .update({
            username,
            university,
            career,
            bio,
            profileImage,
          })
          .eq('walletAddress', walletAddress)
          .select()
          .single();

        if (error) throw error;
        result = data;
      } else {
        // Create new user
        const { data, error } = await supabase
          .from('users')
          .insert({
            walletAddress,
            username,
            university,
            career,
            bio,
            profileImage,
          })
          .select()
          .single();

        if (error) throw error;
        result = data;
      }

      res.json(result);
    } catch (error) {
      console.error('Error upserting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Update user interests
  async updateInterests(req: Request, res: Response) {
    try {
      const { walletAddress } = req.params;
      const { interests } = req.body;

      // First, get the user
      const { data: user, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('walletAddress', walletAddress)
        .single();

      if (userError) throw userError;

      // Delete existing interests
      await supabase
        .from('interests')
        .delete()
        .eq('userId', user.id);

      // Insert new interests
      const interestData = interests.map((name: string) => ({
        userId: user.id,
        name,
      }));

      const { data, error } = await supabase
        .from('interests')
        .insert(interestData)
        .select();

      if (error) throw error;

      res.json(data);
    } catch (error) {
      console.error('Error updating interests:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Update user skills
  async updateSkills(req: Request, res: Response) {
    try {
      const { walletAddress } = req.params;
      const { skills } = req.body;

      // First, get the user
      const { data: user, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('walletAddress', walletAddress)
        .single();

      if (userError) throw userError;

      // Delete existing skills
      await supabase
        .from('skills')
        .delete()
        .eq('userId', user.id);

      // Insert new skills
      const skillData = skills.map((name: string) => ({
        userId: user.id,
        name,
      }));

      const { data, error } = await supabase
        .from('skills')
        .insert(skillData)
        .select();

      if (error) throw error;

      res.json(data);
    } catch (error) {
      console.error('Error updating skills:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
}; 