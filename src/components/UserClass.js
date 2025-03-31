import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "dummy",
                login: "dummy",
                followers: "none",
            },
        };

        // console.log("constructor");
    }

    componentDidUpdate(prevProps, prevStats) {
        // if (prevProps.count != this.state.count) {
        // }
        // console.log("component did update");
    }

    componentWillUnmount() {
        // console.log("compnednent will unmount");
        // clearInterval(this.interval);
    }

    async componentDidMount() {
        // console.log("component did mount");

        // this.interval = setInterval(() => {
        //     console.log("set interval executted");
        // }, 1000);

        const data = await fetch("https://api.github.com/users/prudvi-satya-teja");
        const json = data.json();
        this.setState({
            userInfo: json,
        });

        // console.log("json data is " + json + " " + json.name);
        console.log(this.state.userInfo);
        console.log(json);
    }

    render() {
        // console.log("render ");
        const { name, login, followers } = this.state.userInfo;

        return (
            <div className="user-details">
                {console.log(name)}
                <h2> {"Name is : " + name}</h2>
                <h3> {"userId is : " + login}</h3>
                <h4> {"Followers count : " + followers}</h4>
            </div>
        );
    }
}

export default UserClass;
