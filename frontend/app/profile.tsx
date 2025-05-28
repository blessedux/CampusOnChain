'use client'

import { usePrivy } from '@privy-io/react-auth';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function ProfilePage() {
  const { user, logout } = usePrivy();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="mb-4">Por favor, conecta tu wallet para ver tu perfil.</p>
        <Button onClick={logout}>Volver a inicio</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-12 px-4 min-h-screen bg-background">
      <h1 className="text-3xl font-bold mb-4">Mi Perfil</h1>
      <div className="flex flex-col items-center bg-muted rounded-lg p-6 w-full max-w-md mb-8">
        {/* Profile image placeholder */}
        <div className="h-24 w-24 rounded-full bg-gray-300 mb-4 flex items-center justify-center overflow-hidden">
          <Image src="/placeholder-user.jpg" alt="Foto de perfil" width={96} height={96} />
        </div>
        {/* Wallet address */}
        <p className="text-sm text-muted-foreground mb-2">Wallet: {user.wallet?.address}</p>
        {/* Bio placeholder */}
        <p className="text-base mb-2">Bio: <span className="text-muted-foreground">(Agrega tu biografía aquí pronto)</span></p>
        <Button variant="outline" size="sm" onClick={logout}>Cerrar sesión</Button>
      </div>
      {/* POAPs and Events */}
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-2">Tus POAPs</h2>
        <div className="bg-muted rounded p-4 mb-6 min-h-[80px] flex items-center justify-center text-muted-foreground">
          (Aquí aparecerán tus POAPs de eventos asistidos)
        </div>
        <h2 className="text-xl font-bold mb-2">Eventos Asistidos</h2>
        <div className="bg-muted rounded p-4 min-h-[80px] flex items-center justify-center text-muted-foreground">
          (Aquí aparecerán tus eventos de Luma y otros)
        </div>
      </div>
    </div>
  );
} 