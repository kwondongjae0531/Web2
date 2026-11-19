import React from "react";
import Card from "./Card";

const hotels = [
    { title: "제주의 저택", date: "12월 19일~20일", price: "294,000", rating: 5.0 },
    { title: "제주의 집", date: "12월 19일~20일", price: "287,500", rating: 4.9 },
    { title: "제주의 펜션", date: "1월 2일~3일", price: "300,000", rating: 5.0 },
    { title: "서귀포시의 펜션", date: "2월 13일~14일", price: "430,000", rating: 4.98 },
    { title: "제주의 펜션", date: "12월 19일~20일", price: "252,544", rating: 4.96 }
];

function ProfileCard() {
    return (
        <div className="Container">
            <h2>제주의 숙소 →</h2>

            <div className="Card-list">
                {hotels.map((hotel, index) => (
                    <Card
                        key={index}
                        title={hotel.title}
                        image={`/images/jeju${index + 1}.jpg`}
                    >
                        <p>{hotel.date}</p>
                        <p>총액 ₩{hotel.price} · ★ {hotel.rating}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ProfileCard;