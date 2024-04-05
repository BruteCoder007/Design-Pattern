import { Meal } from "./Meal";
import {MealBuilder} from "./MealBuilder";
export class NonVegMealBuilder implements MealBuilder {
    private meal: Meal = new Meal();

    buildBurger(): void {
        this.meal.burger = "chicken burger";
    }

    buildDrink(): void {
        this.meal.drink = "Juice";
    }

    buildDessert(): void {
        this.meal.dessert = "brownie";
    }

    getMeal(): Meal {
        return this.meal;
    }
}

