import React, { useState } from "react";
import Toolbar from "./Toolbar";
import image from "./기영이.jpg";
import "./LandingPage.css";

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClick = () => {
        setIsLoggedIn(true);
    };

    const logoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="landing-page">
            <header className="landing-header">
                <span className="landing-brand">REACT LAB · 09</span>
                <div className="landing-toolbar">
                    <Toolbar
                        isLoggedIn={isLoggedIn}
                        loginClick={loginClick}
                        logoutClick={logoutClick}
                    />
                </div>
            </header>

            <main className="landing-content">
                <p className="landing-eyebrow">CONDITIONAL RENDERING</p>
                <h1 className="landing-title">9장 조건부 렌더링 실습 화면입니다.</h1>
                <p className="landing-description">
                    로그인 버튼을 눌러 화면의 변화를 확인해 보세요.
                </p>
                <div className="landing-image-frame">
                    <img className="landing-image" src={image} alt="기영이" />
                </div>
                <p className="landing-caption">React · Chapter 09</p>
            </main>
        </div>
    );
}

export default LandingPage;
