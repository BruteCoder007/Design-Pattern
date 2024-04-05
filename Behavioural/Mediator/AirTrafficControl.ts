import { Aircraft } from "./Aircraft";
// Mediator interface
export interface AirTrafficControl {
  registerAircraft(aircraft: Aircraft): void;
  sendMessage(message: string, sender: Aircraft): void;
}