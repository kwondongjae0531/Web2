import React from "react";
import "./Clock.css";

function Clock() {
    return (
        <div className="clock-container">
            <h1 className="clock-title">인공지능소프트웨어과</h1>
            <h2 className="clock-time">
                현재 시각은
                <span className="time-highlight">{new Date().toLocaleTimeString()}</span>
                입니다.
            </h2>
        </div>
    );
}

export default Clock;