import * as moment from 'moment'

class CoreHelper {
  public convertObjToArray(obj: any) {
    const arr = []
    // tslint:disable-next-line:forin
    for (const key in obj) {
      const value = obj[key]
      arr.push(value)
    }
    return arr
  }

  public getDateString(d: Date, format: string) {
    let datestring = ''
    switch (format) {
      case 'yyyyMMddHHmmss': {
        datestring =
          d.getFullYear() +
          ('0' + (d.getMonth() + 1)).slice(-2) +
          ('0' + d.getDate()).slice(-2) +
          ('0' + d.getHours()).slice(-2) +
          ('0' + d.getMinutes()).slice(-2) +
          ('0' + d.getSeconds()).slice(-2)
        break
      }
      default:
        datestring =
          ('0' + d.getDate()).slice(-2) +
          '-' +
          ('0' + (d.getMonth() + 1)).slice(-2) +
          '-' +
          d.getFullYear() +
          ' ' +
          ('0' + d.getHours()).slice(-2) +
          ':' +
          ('0' + d.getMinutes()).slice(-2)
        break
    }
    return datestring
  }

  getAllEnumMultiLevelToArray(enumData: object, source = null) {
    const res = []
    let lstEnum = this.convertObjToArray(enumData)
    if (source) {
      lstEnum = this.convertObjToArray(source)
    }
    for (const e of lstEnum) {
      res.push(e)
      if (e.child || e.children) {
        let lstChildren: any = this.getAllEnumMultiLevelToArray(e.child || e.children)
        for (const c of lstChildren) {
          c.parent = e
          res.push(c)
        }
      }
    }
    return res
  }

  getRangeDate(start: any, end: any, type: any) {
    let from = moment(start)
    let to = moment(end)
    let diff = to.diff(from, type)
    let range = []
    for (let i = 0; i <= diff; i++) {
      range.push(moment(start).add(i, type))
    }
    return range
  }

  isValidDate(dateString: any) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false

    // Parse the date parts to integers
    var parts = dateString.split('/')
    var day = parseInt(parts[1], 10)
    var month = parseInt(parts[0], 10)
    var year = parseInt(parts[2], 10)

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12) return false

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1]
  }

  excelDateToJSDate(serial: any) {
    var utc_days = Math.floor(serial - 25569)
    var utc_value = utc_days * 86400
    var date_info = new Date(utc_value * 1000)

    var fractional_day = serial - Math.floor(serial) + 0.0000001

    var total_seconds = Math.floor(86400 * fractional_day)

    var seconds = total_seconds % 60

    total_seconds -= seconds

    var hours = Math.floor(total_seconds / (60 * 60))
    var minutes = Math.floor(total_seconds / 60) % 60

    return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds)
  }

  convertToDate(d: any) {
    if (Object.prototype.toString.call(d) === '[object Date]') {
      d = moment(d, 'DD/MM/YYYY').toDate()
      if (isNaN(d)) {
        return null
      } else {
        return new Date(d)
      }
    } else if (Object.prototype.toString.call(d) === '[object Number]') {
      d = this.excelDateToJSDate(d)
      if (isNaN(d)) {
        return null
      } else {
        return d
      }
    } else if (Object.prototype.toString.call(d) === '[object String]') {
      if (this.isValidDate(d) == true) {
        var dateParts = d.split('/')
        var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
        return dateObject
      } else {
        return null
      }
    } else {
      return null
    }
  }
}

export const coreHelper = new CoreHelper()
