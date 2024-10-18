import {Food} from "../types/types.ts";

function FoodCard({food}: {food: Food}) {
    return (
        <div>
            {food.food_name}
        </div>
    )
}

export default FoodCard;