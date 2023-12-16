'use client';

import Button from '@/components/ui/Button';
import { signOut } from 'next-auth/react';

export default function Home() {
  //return <Button variant={'ghost'}>Hello</Button>;
  return <button onClick={() => signOut()}>Sign out</button>;
}
