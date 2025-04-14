import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/ReduxStore/cartSlice";

const CartItemList = (props) => {
    const dispatch = useDispatch();
    const handleAddItem = (data) => {
        dispatch(addItem(data));
    };
    const handleRemoveItem = (data) => {
        dispatch(removeItem());
    };
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
                        <div className="w-3/12">
                            <button
                                onClick={() => handleRemoveItem(card)}
                                className="absolute mt-18 ml-8 w-4 h-6 bg-black text-white rounded-b-xs text-center"
                            >
                                {" "}
                                -{" "}
                            </button>
                            <div className="absolute mt-18 ml-11 w-10 h-6 bg-black text-white rounded-b-xs text-center">
                                {1}
                            </div>
                            <button
                                onClick={() => handleAddItem(card)}
                                className="absolute mt-18 ml-20 w-4 h-6 bg-black text-white rounded-b-xs text-center"
                            >
                                {" "}
                                +{" "}
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

export default CartItemList;
   