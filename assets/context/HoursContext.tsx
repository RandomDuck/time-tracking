import { MonthHours } from '../models/TimeRapport';
import { Dispatch, ReactNode, createContext, useContext } from 'react';

interface MonthAction {}

interface ContextProps {
  children: ReactNode;
}

interface IReportContext {
  report: MonthHours;
  dispatch: Dispatch<MonthAction>;
}

const ReportContext = createContext<IReportContext>({
  report: new MonthHours([], false, 0),
  dispatch: () => {
    return;
  },
});

export const ContextWrapper = ({ children }: ContextProps) => {
  const { report, dispatch } = useContext(ReportContext);

  return (
    <ReportContext.Provider value={{ report, dispatch }}>
      {children}
    </ReportContext.Provider>
  );
};
