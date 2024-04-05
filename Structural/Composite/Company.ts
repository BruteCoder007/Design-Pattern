import {Employee} from './Employee';
// Composite class 
export class Company implements Employee {
    private employees: Employee[] = [];

    add(employee: Employee): void {
        this.employees.push(employee);
    }

    calculateSalary(): void {
        console.log("Payment for a particular office:");
        this.employees.forEach(employee => employee.calculateSalary());
    }
}




