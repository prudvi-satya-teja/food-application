import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import  useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { id } = useParams();

    const resData = useRestaurantMenu(id);
                 
    if (resData == null) return <Shimmer />;

    const { name, city, locality, avgRating } = resData?.cards[2]?.card?.card?.info;

    const { itemCards } =
        resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="specific-Resataurant">
            <h2> {name} </h2>
            <h4>{city + "," + " Rating : " + avgRating}</h4>
            <div className="Menu">
                <h3>Menu</h3>
                <ul>
                    {itemCards?.length > 0 ? (
                        itemCards.map((restaurant) => (
                            <li key={restaurant?.card?.info?.id}>
                                {restaurant?.card?.info?.name +
                                    "  -    Rs. " +
                                    restaurant?.card?.info?.price / 100}
                            </li>
                        ))
                    ) : (
                        <li>No items found </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
