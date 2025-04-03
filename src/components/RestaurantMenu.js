import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItems from "./RestaurantItems";

const RestaurantMenu = () => {
    const { id } = useParams();

    const resData = useRestaurantMenu(id);

    if (resData == null) return <Shimmer />;

    const { name, city, locality, avgRating } = resData?.cards[2]?.card?.card?.info;

    const itemCards = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categoryList = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c?.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("categoryList", categoryList);

    return (
        <div className="">
            <div className="text-lg font-semibold m-4 p-4 text-center">{name}</div>
            <div className="">
                {categoryList.map((c) => (
                    <div className="shadow-lg  w-6/12 m-auto my-2">
                        <div className="p-2 bg-gray-200 flex justify-between">
                            <div>
                                {`${c?.card?.card?.title} (${c?.card?.card?.itemCards?.length})`}
                            </div>
                            <span>{"🡇"}</span>
                        </div>
                        <div className="bg-gray-100 p-2">
                            <RestaurantItems
                                key={c?.card?.card?.categoryId}
                                data={c?.card?.card?.itemCards}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
