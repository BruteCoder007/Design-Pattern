
import { AirTrafficControl } from "./AirTrafficControl";
import { Aircraft } from "./Aircraft";

// Concrete Implementation of mediator.
export class RadarSystem implements AirTrafficControl {
  private aircraftList: Aircraft[] = [];

  registerAircraft(aircraft: Aircraft) {
    this.aircraftList.push(aircraft);
  }

  sendMessage(message: string, sender: Aircraft) {
    // Broadcast the message to all aircraft except the sender
    this.aircraftList  
      .filter((aircraft) => aircraft !== sender)
      .forEach((aircraft) => aircraft.receiveMessage(message));
  }
}