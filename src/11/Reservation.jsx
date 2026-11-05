
import React, { useState } from "react";
import "./Reservation.css";

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(
            `예약 정보 확인\n\n` +
            `아침식사: ${haveBreakfast ? "신청" : "미신청"}\n` +
            `방문객 수: ${numberOfGuest}명\n\n` +
            `예약 정보가 확인되었습니다.`
        );
    };

    return (
        <div className="reservation-page">
            <form className="reservation-card" onSubmit={handleSubmit}>

                <span className="reservation-subtitle">
                    RESERVATION
                </span>

                <h2>예약 정보</h2>

                <p className="reservation-description">
                    예약에 필요한 정보를 입력해 주세요.
                </p>

                <div className="form-group">
                    <label>아침식사 여부</label>

                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={haveBreakfast}
                            onChange={(event) => {
                                setHaveBreakfast(event.target.checked);
                            }}
                        />
                        <span>아침식사를 신청합니다.</span>
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="guest">방문자 수</label>

                    <input
                        id="guest"
                        className="guest-input"
                        type="number"
                        min="1"
                        step="1"
                        value={numberOfGuest}
                        onChange={(event) => {
                            setNumberOfGuest(event.target.value);
                        }}
                        required
                    />
                </div>

                <button className="submit-button" type="submit">
                    예약 완료
                </button>

            </form>
        </div>
    );
}

export default Reservation;
