import { useState, useEffect } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const steps: Step[] = [
  {
    target: '.user-profile-panel',
    content: 'Your profile panel shows your campus identity, points, and achievements. Click to view your full profile.',
    placement: 'left',
    disableBeacon: true,
  },
  {
    target: '.quick-stats',
    content: 'Track your progress with quick stats: airdrops claimed, campus points earned, and your current rank.',
    placement: 'bottom',
  },
  {
    target: '.upcoming-events',
    content: 'Stay updated with upcoming events and workshops. Never miss an opportunity to learn and network.',
    placement: 'right',
  },
  {
    target: '.hackathons-feed',
    content: 'Discover and join hackathons to showcase your skills and win prizes. Filter by your interests and skills.',
    placement: 'right',
  },
  {
    target: '.leaderboard-stats',
    content: 'Compete with other students on the leaderboard. Earn points through challenges, activations, and contributions.',
    placement: 'right',
  },
  {
    target: '.campus-wall',
    content: 'The Campus Wall is where you can share updates, find study groups, and connect with other students.',
    placement: 'bottom',
  },
  {
    target: '.assets-summary',
    content: 'View your digital assets: POAPs, badges, and other achievements earned through your campus journey.',
    placement: 'top',
  },
];

export const FeedTutorial = () => {
  const [run, setRun] = useState(false);
  const [hasSeenTutorial, setHasSeenTutorial] = useLocalStorage('hasSeenFeedTutorial', false);

  useEffect(() => {
    // Start the tutorial if the user hasn't seen it before
    if (!hasSeenTutorial) {
      setRun(true);
    }
  }, [hasSeenTutorial]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRun(false);
      setHasSeenTutorial(true);
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton
      run={run}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      styles={{
        options: {
          arrowColor: '#1a1a1a',
          backgroundColor: '#1a1a1a',
          overlayColor: 'rgba(0, 0, 0, 0.5)',
          primaryColor: '#f97316', // orange-500
          textColor: '#ffffff',
          zIndex: 1000,
        },
        tooltip: {
          borderRadius: '8px',
          padding: '16px',
        },
        buttonNext: {
          backgroundColor: '#f97316',
          padding: '8px 16px',
          borderRadius: '6px',
        },
        buttonBack: {
          color: '#ffffff',
          marginRight: '8px',
        },
        buttonSkip: {
          color: '#9ca3af',
        },
      }}
    />
  );
}; 