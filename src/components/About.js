import User from "./User.js";
import UserClass from "./UserClass.js";
import { Component } from "react";
import UserContext from "../utils/UserContext.js";

class About extends Component {
    constructor(props) {
        super(props);
        // console.log("constructor");
    }

    componentDidMount() {
        // console.log("component did mount");
    }

    render() {
        // console.log("render method");
        return (
            <div>
                loggedInUser
                <UserContext.Consumer>
                    {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                <h1>About</h1>
                <h2> This is About page in my food application</h2>
                <User />
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div className="">
//             <h1>About</h1>
//             <h2> This is About page in my food application</h2>
//             <User name={"Food Mart"} city={"kakinada"} state={"Andhra Pradesh"} />
//         </div>
//     );
// };

export default About;
