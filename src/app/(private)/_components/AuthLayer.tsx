'use client';

import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';
const AuthLayer: React.FC = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    const handleLogout = () => {
      localStorage.clear();
      router.push('/log-in');
    };

    window.addEventListener('auth:logout', handleLogout);

    return () => {
      window.removeEventListener('auth:logout', handleLogout);
    };
  }, [router]);

  return null;
};

export default AuthLayer;
// components/AuthHandler.tsx
