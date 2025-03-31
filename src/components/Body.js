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
    const [listofRestaurants, filteredRestaurants] = useBody();

    if (!onlineStatus) return <h2> You are offline !! Please Check you internet connection </h2>;
    // conditional rendering
    else
        return listofRestaurants.length === 0 ? (
            <Shimmer />
        ) : (
            <div className="body">
                <div className="top-rated">
                    <div className="search">
                        <div className="search-box">
                            <input
                                className="search-box-input"
                                type="text"
                                value={searchText}
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                }}
                            ></input>
                        </div>
                        <button
                            className="search-btn"
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
                        className="top-rated-btn"
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
                <div className="res-container">
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
