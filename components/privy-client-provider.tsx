'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export function PrivyClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        appearance: { theme: 'light' },
        embeddedWallets: { createOnLogin: 'users-without-wallets' },
      }}
    >
      {children}
    </PrivyProvider>
  );
}