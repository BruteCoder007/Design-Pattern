import {Approver} from './Approver';
export class TeamLead implements Approver {
  private nextApprover: Approver;

  setNext(approver: Approver): void {
    this.nextApprover = approver;
  }

  processRequest(amount: number): void {
    if (amount <= 1000) {
      console.log(`Team Lead approves the purchase of $${amount}`);
    } else if (this.nextApprover) {
      this.nextApprover.processRequest(amount);
    } else {
      console.log(`Cannot approve the purchase of $${amount}.`);
    }
  }
}


