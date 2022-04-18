import moment from 'moment';

export function formatDate(date, format = 'DD/MM/YYYY hh:mm') {
  return moment(date).format(format);
}
