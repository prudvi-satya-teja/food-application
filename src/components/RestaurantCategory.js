import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    };

    return (
        <div className="shadow-lg  w-6/12 m-auto my-2 bg-black">
            <div className="p-2 bg-gray-200 flex justify-between" onClick={handleClick}>
                <div className="font-semibold">
                    {`${props?.data?.card?.card?.title} (${props.data?.card?.card?.itemCards?.length})`}
                </div>
                <div>{"🡇"}</div>
            </div>
            {showItems && (
                <div className="bg-gray-100 p-2">
                    <ItemList
                        key={props?.data?.card?.card?.categoryId}
                        data={props?.data?.card?.card?.itemCards}
                    />
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;
