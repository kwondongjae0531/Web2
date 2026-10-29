import React, { useState } from "react";
import WarningBanner from "./WarningBanner";
import "./MainPage.css";

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const btnListener = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    };

    return (
        <div className="main-page">
            <h1>알림 메시지</h1>
            <p className="page-description">
                버튼을 눌러 메시지를 확인하세요.
            </p>

            <WarningBanner warning={showWarning} />

            <button
                className="toggle-button"
                onClick={btnListener}
            >
                {showWarning ? "감추기" : "보이기"}
            </button>
        </div>
    );
}

export default MainPage;