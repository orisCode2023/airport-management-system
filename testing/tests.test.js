import assert from 'node:assert'
import { test } from 'node:test';
import { Student } from '../entities/passanger.js';
import Flight from '../entities/flight.js';
import { Ticket } from '../entities/ticket.js';
import Airport from '../entities/airport-system.js';

const student = new Student("moshe", "8374652", 300, "MIT")
const flight = new Flight("dada", "EP5493", 500, 900, 250)
const ticket = new Ticket(8743265, flight.regularTicketPrice, "moshe")
const airport = new Airport()
const originalAmount = student.amountOfMoney
airport.addTickets(flight)
airport.buyTicket(student, ticket, flight)


test('should make sure he has enough of money', () => {
  assert.strictEqual(student.buyTicket(flight.regularTicketPrice), false)
});

// test("The ticket owner name matches the passenger name ", () => {
//     assert.strictEqual(student.name, ticket.ownerName)
// })

// test("The passenger’s money is reduced by the correct ticket price", () => {
//     assert.strictEqual(student.amountOfMoney, originalAmount - flight.VIPTicketPrice )
// })