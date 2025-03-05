import {
    format,
    isValid,
    parseISO,
    isToday,
    isTomorrow,
    isThisWeek,
    endOfWeek,
    differenceInSeconds,
    endOfDay,
    startOfDay,
    isPast,
} from 'date-fns'

export const DateFormat = {
    localISO: "yyyy-MM-dd'T'HH:mm:ssXXX",
    date: 'yyy-MM-dd',
    dateTime: 'yyy-MM-dd hh:mm',
    MMDDYYYY: 'MM-dd-yyyy',
    DDMMYYYY: 'dd-MM-yyyy',
    mmDD: 'MMMM d',
}

export class DateUtility {
    static dateToLocalISO = (date, formatDate = DateFormat.localISO) => {
        if (!isValid(date)) {
            return null
        }
        const isoDate = parseISO(date.toISOString())
        return format(isoDate, formatDate)
    }

    static isToday(date) {
        return isToday(date)
    }

    static isTomorrow(date) {
        return isTomorrow(date)
    }

    static isThisWeek(date) {
        return isThisWeek(date)
    }

    static endOfWeek(date) {
        return endOfWeek(date)
    }

    static endDay(date) {
        return endOfDay(date)
    }

    static isPast(date) {
        return isPast(date)
    }

    static startDay(date) {
        return startOfDay(date)
    }

    static differenceInSeconds(date1, date2) {
        return differenceInSeconds(date1, date2)
    }

    static getDaysRemaining(date) {
        const diffInMs = new Date(date) - new Date()
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))
        return diffInDays > 0 ? `${diffInDays} days` : 'Ended'
    }
}
