class Passanger {
    constructor(name, iDNumber, amountOfMoney) {
        this.name = name
        this.iDNumber = iDNumber
        this.amountOfMoney = amountOfMoney
    }
    buyTicket(amount) {
        if (amount > this.amountOfMoney) {
            return false
        }
    }
    getDiscount(){}
    updataeAmount(amount){
        this.amountOfMoney -= amount
    }


}
class Student extends Passanger {
    constructor(name, iDNumber, amountOfMoney, universityName) {
        super(name, iDNumber, amountOfMoney)
        this.universityName = universityName
    }
    getDiscount(ticket, discount) {
        return (ticket.ticketPrice * discount) / 100
    }
}
class RegularPassanger extends Passanger {
    constructor(name, iDNumber, amountOfMoney, workPlace, knowsAnAirportEmployee) {
        super(name, iDNumber, amountOfMoney)
        this.workPlace = workPlace
        this.knowsAnAirportEmployee = knowsAnAirportEmployee

    }
    getDiscount(){

    }
}

export default { RegularPassanger, Student }


// TODO: FINISHE THE DISCOUNTS FUNCTION