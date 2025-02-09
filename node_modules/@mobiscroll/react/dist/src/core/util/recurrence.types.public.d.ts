import { MbscDateType } from './datetime.types.public';
export interface MbscRecurrenceRule {
    repeat?: 'daily' | 'weekly' | 'monthly' | 'yearly';
    interval?: number;
    count?: number;
    from?: MbscDateType;
    until?: MbscDateType;
    month?: number | number[];
    day?: number | number[];
    pos?: number;
    weekDays?: string;
    weekStart?: string;
}
