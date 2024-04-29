'use client';

import { CURRENT_MONTH } from '@/assets/constants/baseValues';
import { useGetDays } from '@/assets/hooks/useGetDays';
import React, { useState } from 'react';
import CurrentMonth from './CurrentMonth';

const MonthSelector = () => {
  const [currentMonth, setCurrentMonth] = useState(CURRENT_MONTH);
  const { daysInMonth } = useGetDays(+currentMonth);

  const goBack = () => {
    const previousMonth = new Date(currentMonth);
    previousMonth.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(previousMonth);
  };

  const goForward = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  return (
    <div className='m-auto max-w-[900px]'>
      <h2>
        {currentMonth.toLocaleString('en-US', {
          month: 'long',
          year: 'numeric',
        })}
      </h2>
      <div>
        <h3>Set month</h3>
        <button onClick={goBack}>back</button>
        <button onClick={goForward}>forward</button>
      </div>
        <CurrentMonth days={daysInMonth} />
    </div>
  );
};

export default MonthSelector;
