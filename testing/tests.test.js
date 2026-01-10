import assert from 'node:assert'
import { test } from 'node:test';
import { Student } from '../entities/passanger.js';
import Flight from '../entities/flight.js';
import { VIPTicket } from '../entities/ticket.js';
import Airport from '../entities/airport-system.js';

const student = new Student("moshe", "8374652", 1000, "MIT")
const flight = new Flight("dada", "EP5493", 500, 900, 250)
const ticket = new VIPTicket(8743265, flight.vipTicketPrice, "moshe")
const airport = new Airport()



test('should make sure he has enough of money', () => {
  assert.strictEqual(student.checkMoney(ticket), false || true);
});

test("The ticket owner name matches the passenger name ", () => {
    assert.strictEqual(student.name, ticket.ownerName)
})

test("The passenger’s money is reduced by the correct ticket price", () => {
    const originalAmount = student.amountOfMoney
    airport.buyTicket(student, ticket, flight)
    console.log("in the assert function this is the amount to chech ", student.amountOfMoney)
    assert.strictEqual(student.amountOfMoney, originalAmount - ticket.price)
})