import { VIPTicket } from './ticket.js'

class Passanger {
    constructor(name, iDNumber, amountOfMoney) {
        this.name = name
        this.iDNumber = iDNumber
        this.amountOfMoney = amountOfMoney
    }
    checkMoney(ticket) {
        return ticket.price < this.amountOfMoney
    }
    getDiscount(ticket) {}
    updataeAmount(ticket) {
        if (this.checkMoney(ticket) === true) {
            console.log("the money before purch", this.amountOfMoney)
            this.amountOfMoney -= (ticket.price - this.getDiscount(ticket))
            console.log("your amount updated succefully", this.amountOfMoney)
        } else {
            console.log("sorry you dont have enough money to purch this ticket")
        }
    }



}
export class Student extends Passanger {
    constructor(name, idNumber, amountOfMoney, universityName) {
        super(name, idNumber, amountOfMoney)
        this.universityName = universityName
    }
    getDiscount(ticket) {
        let discount = 0;
        if (ticket instanceof VIPTicket) {
            console.log("sorry cant get discount for this ticket")
            return discount
        } else {
            console.log("you got a discount of 10 percent")
            discount = 10
            console.log("ticket price is", ticket.price)
            return (ticket.price * discount) / 100
        }
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
