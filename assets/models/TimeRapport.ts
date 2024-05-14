export class MonthReport {
  constructor(
    public monthIndex: number,
    public days: DayReport[],
    public totalHours: number,
    public isDone: boolean
  ) {}
}

export class DayReport {
  constructor(
    public dayIndex: number,
    public date: Date,
    public hours: number,
    public isDone: boolean
  ) {}
}
