import { ReportContext } from '@/assets/contexts/ReportContext';
import React, { useContext } from 'react';

interface Props {
  dayIndex: number;
}

const DayHours = ({ dayIndex }: Props) => {
  const { report } = useContext(ReportContext);
  const currentDay = report.days.find((day) => day.dayIndex === dayIndex);

  return (
    <div>
      {currentDay && <h2>Current reported hours: {currentDay?.hours}</h2>}
    </div>
  );
};

export default DayHours;
