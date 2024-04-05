import { RadarSystem } from "./RadarSystem";
import { Airplane } from "./Airplane";
const radarSystem = new RadarSystem();

const airplane1 = new Airplane("Flight 123", radarSystem);
const airplane2 = new Airplane("Flight 456", radarSystem);
const airplane3 = new Airplane("Flight 789", radarSystem);

airplane1.sendMessage("Traffic ahead, changing course.");
airplane2.sendMessage("Acknowledged, adjusting route.");
airplane3.sendMessage("No issues, maintaining altitude.");


