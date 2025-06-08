'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { mainnet } from 'viem/chains';

export function PrivyClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        appearance: { 
          theme: 'light',
          logo: '/favicon.ico',
          showWalletLoginFirst: true
        },
        embeddedWallets: { 
          createOnLogin: 'users-without-wallets'
        },
        defaultChain: mainnet,
        supportedChains: [mainnet]
      }}
    >
      {children}
    </PrivyProvider>
  );
}
