class Flight {
    
    #MaximumNumberOfPassengers
    constructor(flightName, airlineFlightNumber, regularTicketPrice, VIPTicketPrice){
        this.flightName = flightName
        this.airlineFlightNumber = airlineFlightNumber
        this.regularTicketPrice = regularTicketPrice
        this.VIPTicketPrice = VIPTicketPrice
        TicketsList = new Array(this.#MaximumNumberOfPassengers)
    }
}