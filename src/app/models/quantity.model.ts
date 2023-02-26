export class Quantity {

    amount: number;
    measurement: string;
    optional: boolean;

    constructor(amount: number, measurement: string, optional: boolean) {
        this.amount = amount;
        this.measurement = measurement;
        this.optional = optional;
    }
}