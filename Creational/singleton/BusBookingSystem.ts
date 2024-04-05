// Singleton class for Bus Booking System
export class BusBookingSystem {
    private static instance: BusBookingSystem | null = null;
    private bookings: string[] = [];

    private constructor() {}

    public static getInstance(): BusBookingSystem {
        if (!BusBookingSystem.instance) {
            BusBookingSystem.instance = new BusBookingSystem();
        }
        return BusBookingSystem.instance;
    }

    public bookTicket(ticketNumber: string): void {
        this.bookings.push(`Bus Ticket ${ticketNumber}`);
        console.log(`Bus Ticket ${ticketNumber} booked successfully.`);
    }

    public getBusBookings(): string[] {
        return this.bookings;
    }
}