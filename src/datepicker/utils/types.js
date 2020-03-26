/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

type DateValues<T> = T | string | number;
type DateInput<T> = DateValues<T>;

type Comparison<T> = (value: T, comparing: T) => boolean;
type DateInDateOut<T> = (value: T) => T;

type DateFuncT<T> = (DateInput<T> | void) => T;

export type DateIOAdapter<T> = {
  date: DateFuncT<T>,
  toJsDate(value: DateInput<T>): Date,
  parse(value: string, format: string): T,
  getCurrentLocaleCode(): string,
  is12HourCycleInCurrentLocale(): boolean,

  isNull(value?: T): boolean,
  isValid(value: DateInput<T>): boolean,
  getDiff: Comparison<T>,
  isEqual: Comparison<T>,
  isSameDay: Comparison<T>,
  isSameMonth: Comparison<T>,
  isSameYear: Comparison<T>,
  isSameHour: Comparison<T>,
  isAfter: Comparison<T>,
  isAfterDay: Comparison<T>,
  isAfterYear: Comparison<T>,

  isBeforeDay: Comparison<T>,
  isBeforeYear: Comparison<T>,
  isBefore: Comparison<T>,
  startOfMonth: DateInDateOut<T>,
  endOfMonth: DateInDateOut<T>,
  startOfWeek: DateInDateOut<T>,
  endOfWeek(value: T): T,
  addDays(value: T, count: number): T,

  startOfDay: DateInDateOut<T>,
  endOfDay: DateInDateOut<T>,
  format(value: T, formatKey: string): string,
  formatByString(value: T, formatString: string): string,
  formatNumber(numberToFormat: string): string,
  getHours(value: T): number,
  setHours(value: T, count: number): T,

  getMinutes(value: T): number,
  setMinutes(value: T, count: number): T,

  getSeconds(value: T): number,
  setSeconds(value: T, count: number): T,

  getMonth(value: T): number,
  setMonth(value: T, count: number): T,
  getNextMonth: DateInDateOut<T>,
  getPreviousMonth: DateInDateOut<T>,
  getMonthArray(value: T): T[],

  getYear(value: T): number,
  setYear(value: T, count: number): T,

  mergeDateAndTime(date: T, time: T): T,

  getWeekdays(): string[],
  getWeekArray(date: T): T[][],
  getYearRange(start: T, end: T): T[],

  /** Allow to customize displaying "am/pm" strings */
  getMeridiemText(ampm: 'am' | 'pm'): string,
};