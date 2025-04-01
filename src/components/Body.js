import { useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";

const Body = () => {
    // Local State variable - Super powerful varibles
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();
    const [listofRestaurants, filteredRestaurants, setFilteredRestaurants, setListofRestaurants] =
        useBody();

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
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                }}
                            ></input>
                        </div>
                        <button
                            className="bg-orange-300 w-20 h-10"
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
                        className="bg-orange-300 w-50 h-10 mt-8"
                        onClick={() => {
                            const filteredRestaurants = listofRestaurants.filter(
                                (res) => res?.info.avgRating > 4
                            );
                            setFilteredRestaurants([...filteredRestaurants]);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>

                <div className="flex flex-wrap">
                    {filteredRestaurants.map((res) => (
                        <Link key={res?.info.id} to={"/restaurants/" + res?.info.id}>
                            <RestaurantCard resData={res} />
                        </Link>
                    ))}
                </div>
            </div>
        );
};

export default Body;
