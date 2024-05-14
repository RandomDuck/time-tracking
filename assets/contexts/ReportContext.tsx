'use client';

import { MonthReport } from '@/assets/models/TimeRapport';
import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { ReportAction, ReportReducer } from '@/assets/reducers/ReportReducer';

interface ContextProps {
  children: ReactNode;
}

interface IReportContext {
  report: MonthReport;
  dispatch: Dispatch<ReportAction>;
}

export const ReportContext = createContext<IReportContext>({
  report: new MonthReport(0, [], 0, false),
  dispatch: () => {
    return;
  },
});

export const ContextWrapper = ({ children }: ContextProps) => {
  const [report, dispatch] = useReducer(ReportReducer, {
    monthIndex: 0,
    days: [],
    totalHours: 0,
    isDone: false,
  });

  return (
    <ReportContext.Provider value={{ report, dispatch }}>
      {children}
    </ReportContext.Provider>
  );
};
