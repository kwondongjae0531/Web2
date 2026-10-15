
import React, { useState } from "react";

function MessageSender() {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim() === "") {
            alert("메시지를 입력해주세요.");
            return;
        }

        alert("전송한 메시지: " + message);
    };

    return (
        <div>
            <h1>메시지 전송 프로그램</h1>

            <input
                type="text"
                placeholder="메시지를 입력하세요"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />

            <button onClick={handleSend}>
                전송
            </button>

            <p>미리보기: {message}</p>
        </div>
    );
}

export default MessageSender;
