import { useState, useEffect } from "react";

const User = (props) => {
    const { name, state, city } = props;
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
        // const interval = setInterval(() => {
        //     console.log("hello");
        // }, 1000);
        // return () => {
        //     clearInterval(interval);
        // };
    }, []);

    return (
        <div className="user-details">
            <h2> {name} </h2>
            <h3> {city} </h3>
            <h4> {state} </h4>
        </div>
    );
};

export default User;
