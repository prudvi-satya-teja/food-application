import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex bg-green-300 h-22 justify-between drop-shadow-lg">
            <div className="w-30 m-2.5 ">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="flex  p-4 font-medium ">
                <ul className="flex">
                    <li className="px-5 mt-5"> Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-5 mt-5 hover:font-bold">
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="px-5 hover:font-bold mt-5">
                        <Link to="/about">About us </Link>
                    </li>
                    <li className="px-5 hover:font-bold mt-5">
                        <Link to="/contact">Contact us </Link>
                    </li>
                    <li className="px-5 hover:font-bold mt-5">
                        <Link to="/grocery"> Grocery </Link>
                    </li>
                    <li className="px-5 hover:font-bold mt-5">
                        <Link to="/cart">Cart </Link>
                    </li>
                    <button
                        className="bg-orange-400 w-20 h-10 mt-3"
                        onClick={() => {
                            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
