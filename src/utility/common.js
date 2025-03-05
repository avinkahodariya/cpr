import {
    AcceptFileType,
    CommanReportComponentType,
    TaskGroupSectionsByDates,
} from './constant'
import { DateUtility } from './date-utility'
import * as yup from 'yup'

import queryString from 'query-string' // For ES6 modules

export class CommonUtility {
    static getInitials = text => {
        return text ? text.charAt(0).toUpperCase() : ''
    }

    static currencyFormat(value, currency) {
        if (Number.isNaN(value || 0)) {
            return value
        }

        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency || 'USD',
        }).format(value || 0)
    }

    static isNotEmpty(item) {
        return (
            item !== undefined &&
            item !== null &&
            item !== '' &&
            item.length !== 0
        )
    }

    static truncateString(text, ellipsisString) {
        return (text || '').length > ellipsisString
            ? `${text.substring(0, ellipsisString)}...`
            : text
    }

    static numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    static objectToParams(obj) {
        const str = queryString.stringify(obj)
        return str
    }

    static getFileNameFromUrl(url) {
        if (!url) {
            return ''
        }
        return url.split('/').pop()
    }

    static toTitleCase(phrase) {
        return phrase
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    static timeoutPromise(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    static roundNumber(num, decimals = 6) {
        const t = 10 ** decimals
        let result = Math.round((num + Number.EPSILON) * t) / t
        if (num < 0) {
            result *= -1
        }
        return result
    }

    static strippedHtml(html) {
        return html.replace(/<[^>]+>/g, '')
    }

    static groupByData(collection, property) {
        const groupedCollection = collection.reduce((previous, current) => {
            if (!previous[current[property]]) {
                previous[current[property]] = [current]
            } else {
                previous[current[property]].push(current)
            }
            return previous
        }, {})
        return Object.keys(groupedCollection).map(key => ({
            title: key,
            data: groupedCollection[key],
        }))
    }

    static reorderList = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
    }

    static getDarkColors(length) {
        const colors = [
            '#6fd193',
            '#e05f57',
            '#cccccc',
            '#f0c143',
            '#418136',
            '#496359',
            '#808080',
        ]
        let prevColorIndex = null
        const result = []
        const getRandomColorIndex = () => {
            let randomIndex = Math.floor(Math.random() * colors.length)
            while (prevColorIndex !== null && randomIndex === prevColorIndex) {
                randomIndex = Math.floor(Math.random() * colors.length)
            }
            return randomIndex
        }
        for (let i = 0; i < length; i += 1) {
            const randomIndex = getRandomColorIndex()
            prevColorIndex = randomIndex
            result.push(colors[randomIndex])
        }
        return result
    }

    static taskgroupedByDates(list) {
        const data = {}
        list.forEach(ele => {
            if (DateUtility.isToday(ele.InspectionDate)) {
                data[TaskGroupSectionsByDates.Today.key] = data[
                    TaskGroupSectionsByDates.Today.key
                ]?.length
                    ? [...(data[TaskGroupSectionsByDates.Today.key] || []), ele]
                    : [ele]
                return
            }
            if (DateUtility.isTomorrow(ele.InspectionDate)) {
                data[TaskGroupSectionsByDates.Tomorrow.key] = data[
                    TaskGroupSectionsByDates.Tomorrow.key
                ]?.length
                    ? [
                          ...(data[TaskGroupSectionsByDates.Tomorrow.key] ||
                              []),
                          ele,
                      ]
                    : [ele]
                return
            }
            if (DateUtility.isThisWeek(ele.InspectionDate)) {
                data[TaskGroupSectionsByDates.ThisWeek.key] = data[
                    TaskGroupSectionsByDates.ThisWeek.key
                ]?.length
                    ? [
                          ...(data[TaskGroupSectionsByDates.ThisWeek.key] ||
                              []),
                          ele,
                      ]
                    : [ele]
                return
            }
            if (
                DateUtility.differenceInSeconds(
                    ele.InspectionDate,
                    DateUtility.endOfWeek(new Date()),
                ) > 0
            ) {
                data[TaskGroupSectionsByDates.Later.key] = data[
                    TaskGroupSectionsByDates.Later.key
                ]?.length
                    ? [...(data[TaskGroupSectionsByDates.Later.key] || []), ele]
                    : [ele]
            }
        })
        return data
    }

    static getFieldName = sec => {
        return `section_${sec.SectionID}_subSection_ ${sec.SubsectionID}_type_${sec.ComponentType}`
    }

    static generateValidationSchema = sections => {
        const schema = {}
        sections.forEach(sec => {
            const fieldName = this.getFieldName(sec)
            switch (sec.AnswerTypeId) {
                case CommanReportComponentType.CompanyLogo:
                    schema[fieldName] = yup.array().optional()
                    break
                default:
                    schema[fieldName] = yup.string()
                    break
            }
        })
        return yup.object().shape(schema)
    }

    static isFileImageVideo = file => {
        return (
            file.type.indexOf('image') > -1 || file.type.indexOf('video') > -1
        )
    }

    static isFileImage = file => {
        return file.type.indexOf('image') > -1
    }

    static isFileVideo = file => {
        return file?.type?.indexOf('video') > -1
    }

    static isURLImageVideo = url => {
        const types = AcceptFileType.imageVideo['image/*']
        return types.some(x => url.includes(x))
    }

    static isURLVideo = url => {
        const types = AcceptFileType.video['video/*']
        return types.some(x => url.includes(x))
    }

    static isURLImage = url => {
        const types = AcceptFileType.image['image/*']
        return types.some(x => url.includes(x))
    }
}
