import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime, id } =
        resData?.info;

    return (
        <div className="m-3 p-4 w-68 h-90 bg-gray-200 hover:bg-gray-300 justify-around rounded-lg">
            <img className="w-60 h-40 rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-4">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h2 className="font-bold py-3 text-amber-900">{costForTwo} </h2>
            <h4>{avgRating}</h4>
            <h3>{deliveryTime}</h3>
        </div>
    );
};

export default RestaurantCard;
