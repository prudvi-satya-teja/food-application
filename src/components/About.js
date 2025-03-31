import User from "./User.js";
import UserClass from "./UserClass.js";
import { Component } from "react";

// class About extends Component {
//     constructor(props) {
//         super(props);
//         // console.log("constructor");
//     }

//     componentDidMount() {
//         // console.log("component did mount");
//     }

//     render() {
//         // console.log("render method");
//         return (
//             <>
//                 <h1>About</h1>
//                 <h2> This is About page in my food application</h2>
//                 <User />
//             </>
//         );
//     }
// }

const About = () => {
    return (
        <>
            <h1>About</h1>
            <h2> This is About page in my food application</h2>
            <User name={"Food Mart"} city={"kakinada"} state={"Andhra Pradesh"} />
        </>
    );
};

export default About;
