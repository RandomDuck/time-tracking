'use client';

import { CURRENT_MONTH } from '@/assets/constants/baseValues';
import { useGetDaysInMonthArray } from '@/assets/hooks/useGetDaysArray';
import React, { useState } from 'react';

const MonthSelector = () => {
  const [currentMonth, setCurrentMonth] = useState(CURRENT_MONTH);
  const { daysInMonth } = useGetDaysInMonthArray(+currentMonth);

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
    <div>
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
      <div className='flex gap-2'>
        {daysInMonth.map((day, index) => (
          <div key={index}>{day.day}</div>
        ))}
      </div>
    </div>
  );
};

export default MonthSelector;
