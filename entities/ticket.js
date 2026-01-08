class Ticket{
    constructor(ticketNumber, price, ownerName){
        this.ticketNumber = ticketNumber
        this.price = price
        this.ownerName = ownerName
    }
}
class VIPTicket extends Ticket{
    #benefitsList
    constructor(ticketNumber, price, ownerName){
        super(ticketNumber, price, ownerName)
        this.#benefitsList = ["Free Alcohol", "Free Food ", "Hot Towels "]
    }
}