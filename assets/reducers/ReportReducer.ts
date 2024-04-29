'use client';

import { DayReport, MonthReport } from '../models/TimeRapport';

export enum Actions {
  REPORT_DAY,
  REPORT_MONTH,
  CLEAR_DAY,
  CLEAR_MONTH,
}

export interface ReportAction {
  type: Actions;
  payload: string;
}

export const ReportReducer = (report: MonthReport, action: ReportAction) => {
  switch (action.type) {
    case Actions.REPORT_DAY: {
      const newDayReport = action.payload;
      const updatedDayArray = [
        ...report.days,
        { date: new Date(), hours: +newDayReport, isDone: true },
      ];

      return {
        ...report,
        days: updatedDayArray,
        totalHours: +newDayReport,
        isDone: false,
      };
    }
    default:
      return report;
  }
};
