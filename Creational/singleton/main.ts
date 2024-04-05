import {TrainBookingSystem} from './TrainBookingSystem.ts';
import {BusBookingSystem} from './BusBookingSystem.ts';
// Usage
const trainBookingSystem1 = TrainBookingSystem.getInstance();
trainBookingSystem1.bookTicket("123");
trainBookingSystem1.bookTicket("456");

const busBookingSystem1 = BusBookingSystem.getInstance();
busBookingSystem1.bookTicket("ABC");

const trainBookingSystem2 = TrainBookingSystem.getInstance();
trainBookingSystem2.bookTicket("789");

console.log("Train Bookings:", trainBookingSystem2.getTrainBookings());
console.log("Bus Bookings:", busBookingSystem1.getBusBookings());
