import { Ticket } from "./ticket.js";
import { VIPTicket } from "./ticket.js";

class Flight {

    #maximumNumberOfPassengers
    regularSeats
    vipSeats
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
        this.regularSeats = (this.#maximumNumberOfPassengers * PERCENT) / 100
        return this.regularSeats
    }

    getSeatsVip() {
        this.vipSeats = this.#maximumNumberOfPassengers - this.getSeatsRegular()
        return this.vipSeats
    }

    addTickets() {
        this.ticketsList.fill(new Ticket("P123", this.regularTicketPrice, null), 0, this.getSeatsRegular())
        this.ticketsList.fill(new VIPTicket("P456", this.vipTicketPrice, null), this.getSeatsRegular())
        return this.ticketsList
    }
    setSeatsRegular(newNumber) {
        this.regularSeats = newNumber
    }
    setSeatsVip(newNumber) {
        this.vipSeats = newNumber
    }
}

export default Flight