'use client';

import { Actions } from '@/assets/constants/enums';
import { DayReport, MonthReport } from '@/assets//models/TimeRapport';

export interface ReportAction {
  type: Actions;
  payload: string;
}

export const ReportReducer = (report: MonthReport, action: ReportAction) => {
  switch (action.type) {
    case Actions.REPORT_DAY: {
      const { dayIndex, hours } = JSON.parse(action.payload) as DayReport;

      if (report.days.find((day) => day.dayIndex === dayIndex)) {
        const updatedDay = report.days.map((day) => {
          if (day.dayIndex === dayIndex) {
            return { ...day, hours: hours };
          }
          return day;
        });
        return {
          ...report,
          days: updatedDay,
          totalHours: report.totalHours + hours,
          isDone: true,
        };
      } else {
        return {
          ...report,
          days: [
            ...report.days,
            new DayReport(dayIndex, new Date(), hours, true),
          ],
          totalHours: report.totalHours + hours,
          isDone: false,
        };
      }
    }
    default:
      return report;
  }
};
