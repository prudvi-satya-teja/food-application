import { useEffect, useState } from "react";

import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (id) => {
    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + id + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResData(json?.data);
    };

    return resData;
};

export default useRestaurantMenu;
