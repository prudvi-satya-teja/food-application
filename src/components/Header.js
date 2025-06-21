import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

import { LOGO_URL } from "../utils/constants";

import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const { loggedInUser, setUserName } = useContext(UserContext);
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    return (
        <div className="flex bg-green-300 h-22 justify-between drop-shadow-lg">
            <div className="w-25 m-2.5 bg-amber-50 mb-2">
                <img className="logo w-20 h-16" src={LOGO_URL} />
            </div>
            <div className="flex  p-4 font-medium ">
                <ul className="flex">
                    <li className="px-5 mt-5"> Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-5 mt-5 hover:font-bold">
                        <Link to="/"> Home</Link>
                    </li>
                    {/* <li className="px-5 hover:font-bold mt-5">
                        <Link to="/about">About us </Link>
                    </li>
                    <li className="px-5 hover:font-bold mt-5">
                        <Link to="/contact">Contact us </Link>
                    </li> */}
                    {/* <li className="px-5 hover:font-bold mt-5">
                        <Link to="/grocery"> Grocery </Link>
                    </li> */}
                    <li className="px-5 hover:font-bold mt-5">
                        <Link to="/cart">Cart - {cartItems.length} Items</Link>
                    </li>
                    {/* <button
                        className="bg-orange-400 w-20 h-10 mt-3"
                        onClick={() => {
                            btnNameReact === "Login";
                            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                        }}
                    >
                        {btnNameReact}
                    </button> */}
                    {/* /* */}
                    {loggedInUser ? (
                        <li className="px-5 hover:font-bold mt-5">{loggedInUser}</li>
                    ) : (
                        <li className="bg-orange-400 w-20 h-10 mt-3 py-2 px-5 m-2">
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Header;
