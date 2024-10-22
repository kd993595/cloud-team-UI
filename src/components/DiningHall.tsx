import {Food} from "../types/types.ts";
import FoodCard from "./FoodCard.tsx";
import {ReactElement, useState, useEffect} from "react";


function DiningHall({name, allFood}: {name: string; allFood: Food[]}) {
    // Favorites is a list of all the food items that the user has favorited
    const [favorites, setFavorites] = useState<Food[]>([]);
    
    useEffect(() => {
        // This function should send a request to the API to get the user's favorite foods

        // This function should also send API requests to get all the daily food items 
    }, []);


    const menus = new Map<string, Food[]>;
    // Sort all food into its menu bucket
    allFood.forEach((food) => {
        if (!menus.has(food.meal))
            menus.set(food.meal, []);
        menus.get(food.meal)!.push(food);
    })

    const updateFavoriteStatus = async (food: Food, isFavorite: boolean) => {
        // This function should send a request to the API to update the favorite status of the food
    };

    const toggleFavorite = (food: Food) => {
        const isFavorite = favorites.includes(food);
        setFavorites((prevFavorites) => {
            if (isFavorite) {
                return prevFavorites.filter(fav => fav !== food);
            } else {
                return [...prevFavorites, food];
            }
        });
        updateFavoriteStatus(food, isFavorite);
    };

    const menuComponents: ReactElement[] = [];
    menus.forEach((food, name) => {
        menuComponents.push(
            <Menu 
                name={name} 
                foodArray={food} 
                key={name}
                favorites = {favorites}
                toggleFavorite={toggleFavorite}
                />
        );
    })

    return (
        <div>
            <h2>{name}</h2>
            {menuComponents.length > 0 ? menuComponents : "Closed"}
        </div>
    )
}

function Menu({
        name, 
        foodArray,
        favorites,
        toggleFavorite,
    }: {
        name: string; 
        foodArray: Food[];
        favorites: Food[];
        toggleFavorite: (food: Food) => void;}) {
    return (
        <div>
            <h3>{name}</h3>
            {foodArray.length > 0 ?
                foodArray.map((food) => (
                    <FoodCard 
                        food={food} 
                        key={food.food_name}
                        isFavorite={favorites.includes(food)}
                        toggleFavorite={toggleFavorite}
                    />))
                : "Closed"
            }
        </div>
    )
}

export default DiningHall;