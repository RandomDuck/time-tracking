'use client';

import { ReportContext } from '@/assets/contexts/ReportContext';
import React, { useContext } from 'react';

const MonthHours = () => {
  const { report } = useContext(ReportContext);

  return (
    <div>
      <h2>You have worked: {report.totalHours} hours this month</h2>
    </div>
  );
};

export default MonthHours;
