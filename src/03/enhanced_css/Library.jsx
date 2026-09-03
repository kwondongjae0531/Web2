import React from "react";
import Book from "./Book";
import "./Book.css";

function Library() {
    return (
        <div className="library-page">
            <section className="new-books-section">

                <div className="section-header">
                    <div>
                        <h2 className="section-title">새로나온책</h2>
                        <p className="section-subtitle">지금 막 세상에 나온 책을 만나보세요!</p>
                    </div>
                    <a href="#more" className="more-link">더보기 &rarr;</a>
                </div>

                <div className="book-list">
                    <Book
                        name="코딩은 처음이라 with 자바"
                        author="이중범"
                        imgUrl="https://image.yes24.com/goods/108837769/XL"
                        tags={["종이책", "예약"]}
                    />
                    <Book
                        name="난생처음 자바 프로그래밍"
                        author="우재남"
                        imgUrl="https://image.yes24.com/goods/119842978/XL"
                        tags={["종이책", "전자책"]}
                    />
                    <Book
                        name="처음 만난 리액트"
                        author="이한울"
                        imgUrl="https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2F997de102-7c86-4265-b39a-80c2bbceb420.jpg&w=512&q=100"
                        tags={["종이책", "예약"]}
                    />
                    <Book
                        name="처음 만나는 자바 스크립트"
                        author="야마구치 요헤이"
                        imgUrl="https://image.yes24.com/momo/TopCate1076/MidCate010/107597186.jpg"
                        tags={["종이책", "예약"]}
                    />
                    <Book
                        name="처음 시작하는 HTML & Java Script"
                        author="김덕진, 임한나"
                        imgUrl="https://image.yes24.com/momo/TopCate48/MidCate10/4799086.jpg"
                        tags={["종이책", "전자책"]}
                    />
                </div>

            </section>
        </div>
    );
}

export default Library;