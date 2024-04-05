import { MealBuilder } from "./MealBuilder";
import { Meal } from "./Meal";
// Concrete Builder
export class VegMealBuilder implements MealBuilder {
    private meal: Meal = new Meal();

    buildBurger(): void {
        this.meal.burger = "Veggie Burger";
    }

    buildDrink(): void {
        this.meal.drink = "Juice";
    }

    buildDessert(): void {
        this.meal.dessert = "Fruit Salad";
    }

    getMeal(): Meal {
        return this.meal;
    }
}

