import { Ticket } from "./ticket.js";
import { VIPTicket } from "./ticket.js";

class Flight {

    #maximumNumberOfPassengers
    constructor(flightName, airlineFlightNumber, regularTicketPrice, vipTicketPrice, seatNumber) {
        this.flightName = flightName
        this.airlineFlightNumber = airlineFlightNumber
        this.regularTicketPrice = regularTicketPrice
        this.vipTicketPrice = vipTicketPrice
        this.#maximumNumberOfPassengers = seatNumber
        this.ticketsList = new Array(this.#maximumNumberOfPassengers)
        this.addTickets()

    }
    getMaxSeats() {
        return this.#maximumNumberOfPassengers
    }

    getSeatsRegular() {
        const PERCENT = 90
        return (this.#maximumNumberOfPassengers * PERCENT) / 100
    }

    getSeatsVip() {
        return this.#maximumNumberOfPassengers - this.getSeatsRegular()
    }

    addTickets() {
        this.ticketsList.fill(new Ticket("P123", this.regularTicketPrice, null), 0, this.getSeatsRegular())
        this.ticketsList.fill(new VIPTicket("P456", this.vipTicketPrice, null), this.getSeatsRegular())
        return this.ticketsList
    }
}

export default Flight