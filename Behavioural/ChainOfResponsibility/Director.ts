import {Approver} from './Approver';
export class Director implements Approver {
 private nextApprover: Approver;
 setNext(approver: Approver): void {
        this.nextApprover = approver;
      }
  processRequest(amount: number): void {
    console.log(`Director approves the purchase of $${amount}`);
  }
}