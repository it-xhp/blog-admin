import moment from 'moment'

export function dateFormat(date) {
  return moment(date).format('YYYY-MM-DD HH:mm')
}
