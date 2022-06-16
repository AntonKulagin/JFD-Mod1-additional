import './index.css'
import * as func from './utils/functions'

const donateForm = document.querySelector('.donate-form')

func.setStartPosition()

donateForm.addEventListener('submit', event => {
	event.preventDefault()

	func.addDonateItem()

	func.addDonateData()

	func.addToTotalAmount()

	func.clearInput()
})

