import React, { useRef } from "react";

function TextInputWithFocusButton() {
    const inPutElement = useRef(null);

    const onButtonClick = () => {
        inPutElement.current.focus();
    };

    return (
        <div>
            <input ref={inPutElement} type="text" size={20}/>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={onButtonClick}> Focus the input element</button>
        </div>
    );
}

export default TextInputWithFocusButton;