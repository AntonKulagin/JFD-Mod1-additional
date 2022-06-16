import { getDate } from './date'

export class DonateItem {

	#donateItem

	constructor() {
		this.#donateItem = document.createElement('div')
		this.#donateItem.className = 'donate-item'
	}

	render(date, amount) {

		const amountItem = document.createElement('b')
		amountItem.textContent = `${amount}$`

		this.#donateItem.textContent = `${getDate(date)} - `
		this.#donateItem.append(amountItem)

		return this.#donateItem
	}
}