import React from "react";
import "./Book.css";

function Book(props) {
    return (
        <div className="book-card">
            <div className="img-wrapper">
                <img src={props.imgUrl} className="book-cover" alt={props.name} />
            </div>

            <div className="book-info">
                <h1 className="book-title">{props.name}</h1>
                <p className="book-author">{props.author}</p>

                <div className="book-tags">
                    {props.tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`tag tag-${tag === '종이책' ? 'paper' : tag === '전자책' ? 'ebook' : 'reserve'}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Book;