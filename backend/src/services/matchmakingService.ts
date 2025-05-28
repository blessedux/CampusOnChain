import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const matchmakingService = {
  // Find potential matches for a user
  async findPotentialMatches(walletAddress: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { walletAddress },
        include: {
          interests: true,
          skills: true,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      // Get users with similar interests and skills
      const potentialMatches = await prisma.user.findMany({
        where: {
          AND: [
            { walletAddress: { not: walletAddress } },
            {
              OR: [
                {
                  interests: {
                    some: {
                      name: {
                        in: user.interests.map(interest => interest.name),
                      },
                    },
                  },
                },
                {
                  skills: {
                    some: {
                      name: {
                        in: user.skills.map(skill => skill.name),
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
        include: {
          interests: true,
          skills: true,
        },
      });

      // Calculate match score for each potential match
      const scoredMatches = potentialMatches.map(match => {
        const interestScore = this.calculateInterestScore(user.interests, match.interests);
        const skillScore = this.calculateSkillScore(user.skills, match.skills);
        const totalScore = (interestScore + skillScore) / 2;

        return {
          ...match,
          matchScore: totalScore,
        };
      });

      // Sort by match score
      return scoredMatches.sort((a, b) => b.matchScore - a.matchScore);
    } catch (error) {
      console.error('Error finding potential matches:', error);
      throw error;
    }
  },

  // Calculate interest similarity score
  calculateInterestScore(userInterests: any[], matchInterests: any[]): number {
    const userInterestNames = userInterests.map(i => i.name);
    const matchInterestNames = matchInterests.map(i => i.name);
    
    const commonInterests = userInterestNames.filter(name => 
      matchInterestNames.includes(name)
    );

    return commonInterests.length / Math.max(userInterestNames.length, matchInterestNames.length);
  },

  // Calculate skill similarity score
  calculateSkillScore(userSkills: any[], matchSkills: any[]): number {
    const userSkillNames = userSkills.map(s => s.name);
    const matchSkillNames = matchSkills.map(s => s.name);
    
    const commonSkills = userSkillNames.filter(name => 
      matchSkillNames.includes(name)
    );

    return commonSkills.length / Math.max(userSkillNames.length, matchSkillNames.length);
  },

  // Create a match between two users
  async createMatch(userWalletAddress: string, matchedWithWalletAddress: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { walletAddress: userWalletAddress },
      });

      const matchedWith = await prisma.user.findUnique({
        where: { walletAddress: matchedWithWalletAddress },
      });

      if (!user || !matchedWith) {
        throw new Error('One or both users not found');
      }

      const match = await prisma.match.create({
        data: {
          userId: user.id,
          matchedWithId: matchedWith.id,
        },
      });

      return match;
    } catch (error) {
      console.error('Error creating match:', error);
      throw error;
    }
  },

  // Get user's matches
  async getUserMatches(walletAddress: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { walletAddress },
        include: {
          matches: {
            include: {
              matchedWith: true,
            },
          },
          matchedWith: {
            include: {
              user: true,
            },
          },
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      return {
        sentMatches: user.matches,
        receivedMatches: user.matchedWith,
      };
    } catch (error) {
      console.error('Error getting user matches:', error);
      throw error;
    }
  },
}; 