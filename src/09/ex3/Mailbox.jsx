import React from "react";
import "./Mailbox.css";

function Mailbox(props) {
    const unreadMessages = 0;

    return (
        <div className="mailbox-page">
            <div className="mailbox-card">
                <span className="mailbox-label">MAILBOX</span>

                <h1 className="mailbox-title">안녕하세요 👋</h1>

                {unreadMessages > 0 ? (
                    <h2 className="mailbox-message">
                        <span className="mailbox-count">
                            {unreadMessages}
                        </span>
                        현재 {unreadMessages}개의 읽지 않은 메시지가 있습니다.
                    </h2>
                ) : (
                    <h2 className="mailbox-empty">
                        모든 메시지를 읽으셨습니다. 즐거운 하루 되세요!
                    </h2>
                )}
            </div>
        </div>
    );
}

export default Mailbox;