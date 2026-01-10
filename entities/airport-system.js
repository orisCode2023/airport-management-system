import Flight from "./flight.js";
import { Student, RegularPassanger } from "./passanger.js";
import { Ticket } from "./ticket.js";
import { VIPTicket } from "./ticket.js";
class Airport {
    checkSeatAvilable(flight, ticket) {
        if (ticket instanceof VIPTicket) {
            if (flight.getSeatsVip() === 0) {
                console.log("sorry there are no seats available")
                return false
            }
        }
        else {
            if (flight.getSeatsRegular() === 0) {
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
            console.log("the location of the seat", flight.getSeatsVip())
            name = flight.ticketsList[flight.getSeatsVip()]
            name.ownerName = ticket.ownerName
            console.log(name.ownerName, "the name in the current seat after purch")
            flight.setSeatsVip(flight.getSeatsVip() - 1)
        } else {
            console.log("the location of the seat", flight.getSeatsRegular())
            name = flight.ticketsList[flight.getSeatsRegular()]
            console.log(name.ownerName, "the name in the current seat before purch")
            name.ownerName = ticket.ownerName
            console.log(name.ownerName, "the name in the current seat after purch")
            flight.setSeatsRegular(flight.getSeatsRegular() - 1)
        }
    }

    buyTicket(passanger, ticket, flight) {
        if (this.checkSeatAvilable(flight, ticket)) {
            passanger.updataeAmount(ticket)
            this.updateSeat(flight, ticket)
            console.log("your purched succefully")
        }
    }

}

export default Airport