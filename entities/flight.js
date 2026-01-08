class Flight {
    
    #MaximumNumberOfPassengers
    constructor(flightName, airlineFlightNumber, regularTicketPrice, VIPTicketPrice, seatNumber){
        this.flightName = flightName
        this.airlineFlightNumber = airlineFlightNumber
        this.regularTicketPrice = regularTicketPrice
        this.VIPTicketPrice = VIPTicketPrice
        this.#MaximumNumberOfPassengers = seatNumber
        this.TicketsList = new Array(this.#MaximumNumberOfPassengers)
        
    }
    getMaxSeats(){
        return this.#MaximumNumberOfPassengers
    }
}

export default Flight