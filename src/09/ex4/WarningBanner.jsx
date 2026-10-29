import React from "react";

function WarningBanner(props) {
    if (!props.warning) {
        return null;
    }

    return (
        <div className="warning-banner" role="alert">
            <span className="warning-icon">⚠️</span>
            <div className="warning-content">
                <h2>경고!</h2>
                <p>주의가 필요한 상황입니다. 내용을 확인해 주세요.</p>
            </div>
        </div>
    );
}

export default WarningBanner;