// Singleton class for Train Booking System
export class TrainBookingSystem {
    private static instance: TrainBookingSystem | null = null;
    private bookings: string[] = [];

    private constructor() {}

    public static getInstance(): TrainBookingSystem {
        if (!TrainBookingSystem.instance) {
            TrainBookingSystem.instance = new TrainBookingSystem();
        }
        return TrainBookingSystem.instance;
    }

    public bookTicket(ticketNumber: string): void {
        this.bookings.push(`Train Ticket ${ticketNumber}`);
        console.log(`Train Ticket ${ticketNumber} booked successfully.`);
    }

    public getTrainBookings(): string[] {
        return this.bookings;
    }
}

