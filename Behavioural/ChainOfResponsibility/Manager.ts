import {Approver} from './Approver';
export class Manager implements Approver {
  private nextApprover: Approver;

  setNext(approver: Approver): void {
    this.nextApprover = approver;
  }

  processRequest(amount: number): void {
    if (amount <= 5000) {
      console.log(`Manager approves the purchase of $${amount}`);
    } else if (this.nextApprover) {
      this.nextApprover.processRequest(amount);
    } else {
      console.log(`Cannot approve the purchase of $${amount}.`);
    }
  }
}



