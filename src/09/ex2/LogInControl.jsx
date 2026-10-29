import React, { useState } from "react";
import LogOutButton from "./LogOutButton";
import LogInButton from "./LogInButton";
import Greeting from "../ex1/Greeting";
import "./LogInControl.css";

function LogInControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    };

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    };

    let button;

    if (isLoggedIn) {
        button = <LogOutButton onClick={logOutClickListener} />;
    } else {
        button = <LogInButton onClick={logInClickListener} />;
    }

    return (
        <div className="login-control">
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}

export default LogInControl;