import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Login = () => {
    const { loggedInUser, setUserName } = useContext(UserContext);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("login successful");
    };

    return (
        <div className="bg-green-100 mx-auto w-80 mt-20 p-5">
            <div className=" mx-25 font-bold text-2xl">Login</div>
            <div className="flex flex-wrap justify-around p-10">
                <form onSubmit={handleSubmit()}>
                    <input
                        className="border-2 p-2 my-2"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Username"
                        required
                    ></input>
                    <input
                        className="border-2 p-2 my-4"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    ></input>
                    <button
                        className="bg-orange-400 textlg font-semibold w-50 h-10 rounded-xl my-4"
                        value="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
