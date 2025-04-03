import { CDN_URL } from "../utils/constants";

const RestaurantItems = (props) => {
    console.log(props);
    return (
        <div>
            <div>
                {props.data.map((card) => (
                    <div className="flex flex-row justify-between p-2 m-2 border-b-1 border-b-gray-400">
                        <div className="w-9/12">
                            <div>
                                {card?.card?.info?.name}{" "}
                                <span>
                                    {" "}
                                    - ₹
                                    {card?.card?.info?.price
                                        ? card?.card?.info?.price / 100
                                        : card?.card?.info?.price / 100}
                                </span>
                            </div>
                            <div className="text-xs"> {card?.card?.info?.description}</div>
                        </div>
                        <div className="w-14">
                            <img src={CDN_URL + card?.card?.info?.imageId}></img>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantItems;
