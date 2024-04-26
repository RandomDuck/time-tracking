import { useEffect, useState } from 'react';

export const useGetDate = () => {
  const [month, setMonth] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const monthName = currentDate.toLocaleString('default', { month: 'long' });

    setMonth(monthName);
  }, []);

  return { month } as const;
};
