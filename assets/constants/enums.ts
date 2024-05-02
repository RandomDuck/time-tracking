export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GHOST = 'ghost',
}

export enum Actions {
  REPORT_DAY,
  REPORT_MONTH,
  CLEAR_DAY,
  CLEAR_MONTH,
}

export enum TimeInMS {
  oneSecond = 1000,
  oneMinute = 60 * 1000,
  oneHour = 60 * 60 * 1000,
  oneDay = 60 * 60 * 1000,
  oneWeek = 7 * 24 * 60 * 60 * 1000,
  oneMonth = 30 * 7 * 24 * 60 * 60 * 1000
}
