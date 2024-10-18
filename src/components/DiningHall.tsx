import {Food} from "../types/types.ts";
import FoodCard from "./FoodCard.tsx";
import {ReactElement} from "react";

function DiningHall({name, allFood}: {name: string; allFood: Food[]}) {
    const menus = new Map<string, Food[]>;
    // Sort all food into its menu bucket
    allFood.forEach((food) => {
        if (!menus.has(food.meal))
            menus.set(food.meal, []);
        menus.get(food.meal)!.push(food);
    })

    const menuComponents: ReactElement[] = [];
    menus.forEach((food, name) => {
        menuComponents.push(<Menu name={name} foodArray={food} key={name}/>);
    })

    return (
        <div>
            <h2>{name}</h2>
            {menuComponents.length > 0 ? menuComponents : "Closed"}
        </div>
    )
}

function Menu({name, foodArray}: {name: string; foodArray: Food[]}) {
    return (
        <div>
            <h3>{name}</h3>
            {foodArray.length > 0 ?
                foodArray.map((food) => (<FoodCard food={food} key={food.food_name}/>))
                : "Closed"
            }
        </div>
    )
}

export default DiningHall;