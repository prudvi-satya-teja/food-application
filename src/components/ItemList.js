import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
    return (
        <div>
            {props.data.map((card, index) => (
                <div
                    key={index}
                    className="flex flex-row justify-between p-2 m-2 border-b-1 border-b-gray-400 h-30"
                >
                    <div className="w-9/12">
                        <div>
                            {card?.card?.info?.name}{" "}
                            <span>
                                - ₹
                                {card?.card?.info?.price
                                    ? card?.card?.info?.price / 100
                                    : card?.card?.info?.price / 100}
                            </span>
                        </div>
                        <div className="text-xs mt-2"> {card?.card?.info?.description}</div>
                    </div>
                    {card?.card?.info?.imageId == null ? (
                        <div></div>
                    ) : (
                        <div className="w-2/12">
                            <button className="absolute mt-18 ml-8 w-15 h-6 bg-black text-white rounded-b-xs">
                                Add +
                            </button>
                            <img
                                className="h-25 w-30"
                                src={CDN_URL + card?.card?.info?.imageId}
                            ></img>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ItemList;
