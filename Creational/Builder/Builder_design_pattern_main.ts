import { VegMealBuilder } from "./VegMealBuilder";
import { Waiter } from "./Waiter";
import { NonVegMealBuilder } from "./NonVegMealBuilder";

// Client Code
const vegMealBuilder = new VegMealBuilder();
const waiter = new Waiter();
const nonVegMealBuilder = new NonVegMealBuilder();

waiter.construct(vegMealBuilder);
waiter.construct(nonVegMealBuilder);
const vegMeal = vegMealBuilder.getMeal();
const nonvegMeal = nonVegMealBuilder.getMeal();

console.log(vegMeal.toString());
console.log(nonvegMeal.toString());
