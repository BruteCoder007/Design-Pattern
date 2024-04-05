// Leaf class 
import {Employee} from './Employee';
export class ContentCreators implements Employee {
    calculateSalary(): void {
        //pay calculation logic 

        console.log("pay for Contentcreators: 50000");
    }
}
