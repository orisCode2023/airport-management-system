import { VIPTicket } from './ticket.js'

class Passanger {
    constructor(name, iDNumber, amountOfMoney) {
        this.name = name
        this.iDNumber = iDNumber
        this.amountOfMoney = amountOfMoney
    }
    buyTicket(ticketPrice) {
        return ticketPrice < this.amountOfMoney
    }

    updataeAmount(ticketPrice) {
        console.log("your amount updated succefully")
        this.amountOfMoney -= ticketPrice
    }


}
export class Student extends Passanger {
    constructor(name, iDNumber, amountOfMoney, universityName) {
        super(name, iDNumber, amountOfMoney)
        this.universityName = universityName
    }
    getDiscount(ticket) {
        if (ticket instanceof VIPTicket) {
            return "sorry cant get discount for this ticket"
        }
        console.log("you got a discount of 10 percent")
        const discount = 10
        return (ticket.price * discount) / 100
    }
}
export class RegularPassanger extends Passanger {
    constructor(name, iDNumber, amountOfMoney, workPlace, knowsAnAirportEmployee) {
        super(name, iDNumber, amountOfMoney)
        this.workPlace = workPlace
        this.knowsAnAirportEmployee = knowsAnAirportEmployee

    }
    getDiscount(ticket) {
        let discount;
        if (this.knowsAnAirportEmployee === true) {
            if (ticket instanceof VIPTicket) {
                console.log("you got a discount of 15 percent")
                discount = 15
            } else {
                console.log("you got a discount of 20 percent")
                discount = 20
            }
            return (ticket.price * discount) / 100
        }
    }
}

