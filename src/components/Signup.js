const Signup = () => {
    return (
        <div className="bg-green-100 mx-auto w-80 mt-20 p-5">
            <div className=" mx-22 font-bold text-2xl">SignUp</div>
            <div className="flex flex-wrap justify-around p-10">
                <input
                    className="border-2 p-2 my-2"
                    type="text"
                    id="username"
                    placeholder="Username"
                ></input>
                <input
                    className="border-2 p-2 my-4"
                    type="text"
                    id="password"
                    placeholder="Password"
                ></input>
                <button className="bg-orange-400 textlg font-semibold w-50 h-10 rounded-xl my-4">
                    Signup
                </button>
            </div>
        </div>
    );
};

export default Signup;
