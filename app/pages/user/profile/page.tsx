'use client';

import Skeleton from '@/app/components/Skeleton';
import { User } from '@/app/models/User';
import checkIfRedirect from "@/lib/urlProofing";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User>();
  const router = useRouter()

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user') || '{}'));
    checkIfRedirect('/user');
  }, []);

  const logOut = () => {
    sessionStorage.removeItem('user');
    router.push('/')
  }

  return (
    <Skeleton>
      <section>
        <h1>Welcome {user?.name}</h1>
        <button className='btn-primary' onClick={logOut}>Log out</button>
      </section>
    </Skeleton>
  );
}
