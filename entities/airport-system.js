import Flight from "./flight.js";
import { Student, RegularPassanger } from "./passanger.js";
import { Ticket } from "./ticket.js";
import { VIPTicket } from "./ticket.js";
class Airport {
    budapesht = new Flight("hungar Airline", "YRT29834", 100, 150, 300)
    spain = new Flight("hola Madrid", "LEr3284", 300, 500, 700)
    florida = new Flight("sun Beach", "POI4938759", 1000, 2500, 1200)

    moshe = new Student("moshe", "23543436", 600, "MIT")
    jacob = new RegularPassanger("jacob", "984376520", 1200, "Intel", true)

    regularSeats = (Flight.getMaxSeats() * 90) / 100
    vipSeats = (Flight.getMaxSeats() * 10) / 100



    getSeatsRegular(flight) {
        const PERCENT = 90
        return (flight.getMaxSeats() * PERCENT) / 100
    }

    getSeatsVip(flight) {
        return flight.getMaxSeats() - this.getSeatsRegular(flight)
    }


    addTickets(flight) {
        flight.TicketsList.fill(new Ticket("P123", flight.regularTicketPrice, null), 0, this.getSeatsRegular(flight))
        flight.TicketsList.fill(new VIPTicket("P456", flight.VIPTicketPrice, null), this.getSeatsRegular(flight))
        return flight.TicketsList
    }

    checkSeatAvilable(flight, ticket) {
        if (ticket instanceof VIPTicket) {
            if (this.vipSeats === this.getSeatsVip(flight)) {
                console.log("sorry there are no seats available")
                return false
            }
        }
        else{
            if (this.regularSeats === this.getSeatsRegular(flight)) {
            console.log("sorry there are no seats available")
            return false
        }
    }
    return true
}
updateSeat(flight, ticket){
    if (ticket instanceof VIPTicket){
        flight.TicketsList[this.vipSeats].ownerName = ticket.ownerName 
        this.vipSeats--
    } else {
         flight.TicketsList[this.regularSeats].ownerName = ticket.ownerName 
        this.regularSeats--
    }
}
buyTicket(passanger, ticket, flight){
    if (this.checkSeatAvilable(flight)){
    passanger.buyTicket(ticket.price)
    passanger.updataeAmount(passanger.getDiscount(ticket))
    this.updateSeat(flight, ticket)
    console.log("your purched succefully")
    }
}
    
}

const airport = new Airport()
const flight = airport.budapesht
const passanger = airport.jacob
passanger.buyTicket(flight.regularTicketPrice)
const passanger2 = airport.moshe
console.log(passanger2.buyTicket(flight.VIPTicketPrice))

