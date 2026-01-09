import Flight from "./flight.js";
import { Student, RegularPassanger } from "./passanger.js";
import { Ticket } from "./ticket.js";
import { VIPTicket } from "./ticket.js";
class Airport {

    constructor(regularSeatsNumber, vipSeatsNUmber) {
        this.regularSeats = regularSeatsNumber
        this.vipSeats = vipSeatsNUmber
    }

    checkSeatAvilable(ticket) {
        if (ticket instanceof VIPTicket) {
            if (this.vipSeats === 0) {
                console.log("sorry there are no seats available")
                return false
            }
        }
        else {
            if (this.regularSeats === 0) {
                console.log("sorry there are no seats available")
                return false
            }
        }
        console.log("congratulations the seat is available")
        return true
    }

    updateSeat(flight, ticket) {
        console.log("the name of the client", ticket.ownerName)
        let name;
        if (ticket instanceof VIPTicket) {
            console.log("the location of the seat", this.vipSeats)
            name = flight.ticketsList[this.vipSeats]
            name.ownerName = ticket.ownerName
            console.log(name.ownerName, "the name in the current seat after purch")
            this.vipSeats--
        } else {
            console.log("the location of the seat", this.regularSeats)
            name = flight.ticketsList[this.regularSeats]
            console.log(name.ownerName, "the name in the current seat before purch")
            name.ownerName = ticket.ownerName
            console.log(name.ownerName, "the name in the current seat after purch")
            this.regularSeats--
        }
    }

    buyTicket(passanger, ticket, flight) {
        if (this.checkSeatAvilable(ticket)) {
            passanger.updataeAmount(ticket)
            this.updateSeat(flight, ticket)
            console.log("your purched succefully")
        }
    }

}

// const spain = new Flight("hola Madrid", "LEr3284", 300, 500, 700)
// const florida = new Flight("sun Beach", "POI4938759", 1000, 2500, 1200)
// const jacob = new RegularPassanger("jacob", "984376520", 1200, "Intel", true)
const budapesht = new Flight("hungar Airline", "YRT29834", 100, 150, 300)
const moshe = new Student("moshe", "23543436", 600, "MIT")
const ticket = new Ticket(94875, budapesht.regularTicketPrice, moshe.name)
const airport = new Airport(budapesht.getSeatsRegular(), budapesht.getSeatsVip())
airport.buyTicket(moshe, ticket, budapesht)
export default Airport