
import { Aircraft } from "./Aircraft";
import { AirTrafficControl } from "./AirTrafficControl";
// Colleague
export class Airplane implements Aircraft {
  constructor(private name: string, private radarSystem: AirTrafficControl) {
    radarSystem.registerAircraft(this);
  }

  sendMessage(message: string) {
    console.log(`${this.name} sends: ${message}`);
    this.radarSystem.sendMessage(message, this);
  }

  receiveMessage(message: string) {
    console.log(`${this.name} receives: ${message}`);
  }
}