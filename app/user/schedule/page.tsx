'use client';

import React from 'react';
import checkIfRedirect from '@/lib/urlProofing';
import { useEffect, useState } from 'react';
import { User } from '@/assets/models/User';
import MonthSelector from '@/assets/components/utility/MonthSelector';
import MonthHours from '@/assets/components/utility/MonthHours';

export default function Page() {
  const [user, setUser] = useState<User>();

  // useEffect(() => {
  //   setUser(JSON.parse(sessionStorage.getItem('user') || '{}'));
  //   checkIfRedirect('/user');
  // }, []);

  

  return (
    <>
      <h2>Schedule</h2>
      <MonthHours />
      <MonthSelector />
    </>
  );
}
