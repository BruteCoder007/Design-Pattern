// Product
export class Meal {
    public burger: string | undefined;
    public drink: string | undefined;
    public dessert: string | undefined;

    public toString(): string {
        return `Meal: Burger=${this.burger}, Drink=${this.drink}, Dessert=${this.dessert}`;
    }
}

