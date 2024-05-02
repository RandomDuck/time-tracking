export class MonthReport {
  constructor(
    public days: DayReport[],
    public totalHours: number,
    public isDone: boolean
  ) {}
}

export class DayReport {
  constructor(
    public date: Date,
    public hours: number,
    public isDone: boolean
  ) {}
}
