const firstTicket = 1016
const lastTicket = 1937
const satisfyTickets = []

for (let i = firstTicket; i <= lastTicket; i++) {
	if (!(i % 3) && !(i % 7) && i % 5 && i % 2) {
		satisfyTickets.push(i)
	}
}

const winningTicket = Math.max(...satisfyTickets)

console.log(winningTicket)