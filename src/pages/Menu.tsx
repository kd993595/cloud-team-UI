import StickyBar from "../components/StickyBar.tsx";
import {Food} from "../types/types.ts";
import DiningHall from "../components/DiningHall.tsx";
import {ReactElement} from "react";

const availableDiningHalls = ["Ferris", "John Jay", "Faculty House"];

function Menu() {
    
    // The following is a collection of test food items
    const food1: Food = {
        food_name: "Eggs",
        meal: "Breakfast",
        dining_hall: "Ferris",
    }
    const food2: Food = {
        food_name: "French Toast",
        meal: "Breakfast",
        dining_hall: "Ferris",
    }
    const food3: Food = {
        food_name: "Eggs",
        meal: "Breakfast",
        dining_hall: "John Jay",
    }
    const food4: Food = {
        food_name: "Pasta",
        meal: "Dinner",
        dining_hall: "Ferris",
    }

    const todaysFood = [food1, food2, food3, food4];
    // Assume we get today's Food from the API

    const diningHallOptions = new Map<string, Food[]>;
    availableDiningHalls.forEach((hall) => {
        diningHallOptions.set(hall, [])
    })
    todaysFood.forEach((food) => {
        if (!diningHallOptions.has(food.dining_hall))
            console.log("ERROR: Food from non-available dining hall: " + food.dining_hall)
        else
            diningHallOptions.get(food.dining_hall)!.push(food);
    })

    const diningHalls: ReactElement[] = [];
    diningHallOptions.forEach((food, name) => {
        diningHalls.push(<DiningHall name={name} allFood={food} key={name}/>);
    })

    return (
        <>
            <StickyBar/>
            {diningHalls}
        </>
    )
}

export default Menu
