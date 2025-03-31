const Login = () => {
    return (
        <div>
            <div className="login-container">
                <input type="text" id="username" placeholder="username"></input>
                <br></br>
                <input type="text" id="password" placeholder="password"></input>
                <button className="Login">Login</button>
            </div>
        </div>
    );
};

export default Login;
