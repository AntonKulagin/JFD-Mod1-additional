import { DonateItem } from './donate-item'
import { donateData } from '../data/donate-data'
import { getDate } from './date'

const donateForm = document.querySelector('.donate-form')
const totalAmount = donateForm.querySelector('#total-amount')
const input = donateForm.querySelector('.donate-form__donate-input')

const donatesList = document.querySelector('.donates-container__donates')

let totalAmountCount = 0

export function setStartPosition() {

	donateData.forEach(donate => {
		donatesList.append(new DonateItem().render(donate.date, donate.amount))
		totalAmountCount += donate.amount
	})

	totalAmount.textContent = `${totalAmountCount}$`
}

export function addDonateItem() {

	const amountDonate = input.value
	donatesList.append(new DonateItem().render(new Date(), amountDonate))
}

export function addDonateData() {
	const date = getDate(new Date())
	const amount = +input.value
	donateData.push({ date, amount })
}

export function addToTotalAmount() {
	totalAmountCount += +input.value
	totalAmount.textContent = `${totalAmountCount}$`
}

export function clearInput() {
	input.value = ''
}