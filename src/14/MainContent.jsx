import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./MainContent.css";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const collections = [
        {
            id: 1,
            name: "Outerwear",
            description: "01 / 아우터",
            image: "/images/outer.jpg"
        },
        {
            id: 2,
            name: "Knitwear",
            description: "02 / 니트웨어",
            image: "/images/knit.jpg"
        },
        {
            id: 3,
            name: "Denim",
            description: "03 / 데님",
            image: "/images/denim.jpg"
        }
    ];

    return (
        <div className={`fashion-page ${theme}`}>

            <header className="fashion-header">
                <h1>FASHION ARCHIVE®</h1>

                <nav>
                    <a href="#home">HOME</a>
                    <a href="#collection">COLLECTION</a>
                    <a href="#about">ABOUT</a>
                </nav>

                <button
                    className="theme-button"
                    onClick={toggleTheme}
                >
                    {theme === "light" ? "☾ DARK" : "☀ LIGHT"}
                </button>
            </header>

            <main className="fashion-main">

                <section className="hero" id="home">
                    <span>2026 FALL / WINTER COLLECTION</span>
                    <h2>Less, but better.</h2>
                    <p>시간이 지나도 변하지 않는 스타일.</p>

                    <img
                        className="hero-image"
                        src="/images/fashion.jpg"
                        alt="Fashion Collection"
                    />
                </section>

                <section id="collection">
                    <div className="collection-title">
                        <h2>THE COLLECTION</h2>
                        <span>01 — 03</span>
                    </div>

                    <div className="collection-grid">
                        {collections.map((item) => (
                            <article
                                className="fashion-card"
                                key={item.id}
                            >
                                <div className="image-box">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>

                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="about" id="about">
                    <span>OUR PHILOSOPHY</span>
                    <h2>Beyond Trends.</h2>
                    <p>
                        유행보다는 본질에 집중합니다.
                        일상 속에서 오래 함께할 수 있는
                        옷과 스타일을 기록합니다.
                    </p>
                </section>

            </main>

            <footer className="fashion-footer">
                © 2026 FASHION ARCHIVE®. All rights reserved.
            </footer>

        </div>
    );
}

export default MainContent;