import {Food} from "../types/types.ts";

function FoodCard({food, isFavorite, toggleFavorite}: {food: Food, isFavorite: boolean, toggleFavorite: (food: Food) => void}) {
    return (
        <div>
            <button 
                id="menuFavButton"
                onClick={() => toggleFavorite(food)}
                className={isFavorite ? 'favorite' : ''}
            >
                <span>{food.food_name}</span>
                <span style={{ marginLeft: 'auto' }}>
                    {isFavorite ? "★" : "☆"}
                </span>
            </button>
        </div>
    )
}

export default FoodCard;