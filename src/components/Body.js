import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";
import UserContext from "../utils/UserContext";
import User from "./User";

const Body = () => {
    // Local State variable - Super powerful varibles
    const [searchText, setSearchText] = useState("");

    const { loggedInUser, setUserName } = useContext(UserContext);

    const onlineStatus = useOnlineStatus();

    const [listofRestaurants, filteredRestaurants, setFilteredRestaurants] = useBody();

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    if (!onlineStatus) return <h2> You are offline !! Please Check you internet connection </h2>;
    // conditional rendering
    else
        return listofRestaurants.length === 0 ? (
            <Shimmer />
        ) : (
            <div className="body m-2">
                <div className="flex">
                    <div className="flex m-4 p-4">
                        <div className="border-blue-700 px-4 m-1">
                            <input
                                className="border-2 h-8 p-2"
                                type="text"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            ></input>
                        </div>
                        <button
                            className="bg-green-300 w-20 h-10 hover:bg-green-400 hover:font-medium hover:cursor-pointer"
                            onClick={() => {
                                console.log(searchText);
                                console.log(listofRestaurants);
                                let filteredRestaurants = listofRestaurants.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurants(filteredRestaurants);
                            }}
                        >
                            Search
                        </button>
                    </div>

                    <button
                        className="bg-green-300 w-50 h-10 mt-8 hover:bg-green-400 hover:font-medium hover:cursor-pointer"
                        onClick={() => {
                            const filteredRestaurants = listofRestaurants.filter(
                                (res) => res?.info.avgRating > 4
                            );
                            setFilteredRestaurants([...filteredRestaurants]);
                        }}
                    >
                        Top Rated Restaurants
                    </button>

                    {/* <div className="border-blue-700 px-4 mt-8 m-1">
                        UserName :{" "}
                        <input
                            className="border-2 h-8 p-2"
                            type="text"
                            value={loggedInUser}
                            onChange={(e) => setUserName(e.target.value)}
                        ></input>
                    </div> */}
                </div>
                <div className="flex flex-wrap">
                    {filteredRestaurants.map((res) => (
                        <Link key={res?.info.id} to={"/restaurants/" + res?.info.id}>
                            {res?.info?.veg ? (
                                <RestaurantCard resData={res} />
                            ) : (
                                <PromotedRestaurantCard resData={res} />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        );
};

export default Body;
