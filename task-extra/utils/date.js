import moment from 'moment'

export const getDate = (date) => {
	return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}