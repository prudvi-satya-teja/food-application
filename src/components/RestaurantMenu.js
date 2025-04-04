import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { id } = useParams();

    const resData = useRestaurantMenu(id);
    if (resData == null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resData?.cards[2]?.card?.card?.info;

    const categoryList = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c?.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="">
            <div className=" m-4 p-4 text-center">
                <div className="text-lg font-semibold">{name}</div>
                <div className="">{cuisines.join(", ")}</div>
                <div className="">{costForTwoMessage}</div>
            </div>
            {categoryList.length == 0 ? (
                <div className="m-4 p-4 text-center text-black">Currently No Item Available </div>
            ) : (
                <div className="">
                    {categoryList.map((c, index) => (
                        <RestaurantCategory key={index} data={c} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RestaurantMenu;
