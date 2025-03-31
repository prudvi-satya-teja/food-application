import { useState, useEffect } from "react";

import { RESTAURANT_URL } from "../utils/constants";

const useBody = () => {
    const [listofRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    let fetchData = async () => {
        const response = await fetch(RESTAURANT_URL);
        const json = await response.json();
        console.log("json", json);

        // optinal chaining
        const resList =
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        
        console.log(resList);
        setListofRestaurants(resList);
        setFilteredRestaurants(resList);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [listofRestaurants, filteredRestaurants];
};

export default useBody;
