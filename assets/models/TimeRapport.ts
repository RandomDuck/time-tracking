export class MonthHours{
	constructor(
		public days: DayHours[], public isDone: boolean, public totalHours: number
	){}
}


export class DayHours{
	constructor(
		public date: Date, public hours: number, public isDone: boolean
	){}
}