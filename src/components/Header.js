import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li> Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us </Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us </Link>
                    </li>
                    <li>
                        <Link to="/grocery"> Grocery </Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart </Link>
                    </li>
                    <button
                        className="login-btn"
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
