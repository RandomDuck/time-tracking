'use client';

import { useGetDate } from '@/assets/hooks/useGetDate';
import React from 'react';

const Calender = () => {
  const { month } = useGetDate();
  return (
    <div>
      <h2>{month.toLocaleUpperCase()}</h2>
    </div>
  );
};

export default Calender;
