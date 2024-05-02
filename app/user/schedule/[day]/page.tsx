'use client';

import { Actions } from '@/assets/constants/enums';
import { ReportContext } from '@/assets/contexts/ReportContext';
import Link from 'next/link';
import React, { FormEvent, useContext, useState } from 'react';

const Day = ({ params }: { params: { day: number } }) => {
  const { report, dispatch } = useContext(ReportContext);
  const [input, setInput] = useState(0);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: Actions.REPORT_DAY, payload: input.toString() });
    setInput(0);
  };

  return (
    <div>
      <h2>This is day: {params.day}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='hours'>Worked hours:</label>
        <input
          id='hours'
          type='number'
          value={input}
          onChange={(e) => setInput(+e.target.value)}
        />
        <button>Ok</button>
      </form>
      <Link className='button' href={'/user/schedule'}>
        Back
      </Link>
    </div>
  );
};

export default Day;
