export class BalanceRequestInfo {
  minAmount: number;
  maxAmount: number;
  freeText: string;
  direction: string;

  toString(): string {
    return 'minAmount' + this.minAmount + 'maxAmount' + this.maxAmount + 'freeText' + this.freeText + 'direction' + this.direction;
  }
}
