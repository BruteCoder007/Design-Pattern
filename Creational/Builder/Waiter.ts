import { MealBuilder } from "./MealBuilder";
// Director
export class Waiter {
    construct(builder: MealBuilder): void {
        builder.buildBurger();
        builder.buildDrink();
        builder.buildDessert();
    }
}