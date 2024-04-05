export interface Approver {
  setNext(approver: Approver): void;
  processRequest(amount: number): void;
}


