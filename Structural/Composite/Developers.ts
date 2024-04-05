
import {Employee} from './Employee';
// Leaf class 
export class Developers implements Employee {
    calculateSalary(): void {
        //pay calculation logic
        console.log("pay for developers: 60000 ");
    }
}

