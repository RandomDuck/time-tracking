'use client';

import React from 'react';
import checkIfRedirect from '@/lib/urlProofing';
import { useEffect, useState } from 'react';
import { User } from '@/assets/models/User';

export default function Page() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user') || '{}'));
    checkIfRedirect('/user');
  }, []);

  return (
    <div>
      <h2>Schedule</h2>
      <h3>Welcome {user?.name}</h3>
    </div>
  );
}
