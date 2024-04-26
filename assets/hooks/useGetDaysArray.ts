import { useEffect, useState } from 'react';

interface Day {
  day: number;
}

export const useGetDaysInMonthArray = (selectedMonth: number) => {
  const [daysInMonth, setDaysInMonth] = useState<Day[]>([]);

  useEffect(() => {
    let daysInMonthArray: Day[] = [];
    const month = new Date(selectedMonth);
    const lastDayOfMonth = new Date(
      month.getFullYear(),
      month.getMonth() + 1,
      0
    ).getDate();

    for (let i = 0; i < lastDayOfMonth; i++) {
      const dayObject = { day: i + 1 };
      daysInMonthArray.push(dayObject);
    }

    setDaysInMonth(daysInMonthArray);
  }, [selectedMonth]);

  return { daysInMonth } as const;
};
