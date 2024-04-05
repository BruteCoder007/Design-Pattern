// Builder Interface
import { Meal } from "./Meal";
export interface MealBuilder {
    buildBurger(): void;
    buildDrink(): void;
    buildDessert(): void;
    getMeal(): Meal;
}

