'use client'

import {MonthReport } from '../models/TimeRapport';
import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { ReportAction, ReportReducer } from '../reducers/ReportReducer';

interface ContextProps {
  children: ReactNode;
}

interface IReportContext {
  report: MonthReport;
  dispatch: Dispatch<ReportAction>;
}

export const ReportContext = createContext<IReportContext>({
  report: new MonthReport([], 0, false),
  dispatch: () => {
    return;
  },
});

export const ContextWrapper = ({ children }: ContextProps) => {
	const [report, dispatch] = useReducer(ReportReducer, {days: [], totalHours: 0, isDone: false}) 


  return (
    <ReportContext.Provider value={{ report, dispatch }}>
      {children}
    </ReportContext.Provider>
  );
};
