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

// const spain = new Flight("hola Madrid", "LEr3284", 300, 500, 700)
// const florida = new Flight("sun Beach", "POI4938759", 1000, 2500, 1200)
// const jacob = new RegularPassanger("jacob", "984376520", 1200, "Intel", true)
const budapesht = new Flight("hungar Airline", "YRT29834", 100, 150, 300)
const moshe = new Student("moshe", "23543436", 600, "MIT")
const ticket = new Ticket(94875, budapesht.regularTicketPrice, moshe.name)
const airport = new Airport()
airport.buyTicket(moshe, ticket, budapesht)
export default Airport