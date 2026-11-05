
import React, { useState } from "react";
import "./FruitSelect.css";

function FruitSelect() {
    const [value, setValue] = useState("apple");

    const fruits = {
        apple: { name: "사과", emoji: "🍎" },
        banana: { name: "바나나", emoji: "🍌" },
        grapes: { name: "포도", emoji: "🍇" },
        melon: { name: "참외", emoji: "🍈" }
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("선택한 과일: " + fruits[value].name);
    };

    return (
        <div className="fruit-page">
            <form className="fruit-card" onSubmit={handleSubmit}>
                <span className="fruit-subtitle">FRUIT SELECT</span>

                <h2>과일 선택</h2>
                <p className="fruit-description">
                    원하는 과일을 선택해 주세요.
                </p>

                <div className="fruit-preview">
                    <span className="fruit-emoji">
                        {fruits[value].emoji}
                    </span>
                    <p>{fruits[value].name}</p>
                </div>

                <label htmlFor="fruit">과일 종류</label>

                <select
                    id="fruit"
                    value={value}
                    onChange={handleChange}
                >
                    <option value="apple">🍎 사과</option>
                    <option value="banana">🍌 바나나</option>
                    <option value="grapes">🍇 포도</option>
                    <option value="melon">🍈 참외</option>
                </select>

                <button type="submit">선택 완료</button>
            </form>
        </div>
    );
}

export default FruitSelect;
