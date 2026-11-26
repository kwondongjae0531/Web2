import { useContext, useState, useEffect, useRef } from "react";
import ThemeContext from "./ThemeContext";
import "./MainContent.css";

// 하트 아이콘
function HeartIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.84 4.61
                a5.5 5.5 0 0 0-7.78 0
                L12 5.67l-1.06-1.06
                a5.5 5.5 0 0 0-7.78 7.78
                l1.06 1.06L12 21.23
                l7.78-7.78 1.06-1.06
                a5.5 5.5 0 0 0 0-7.78z"
            />
        </svg>
    );
}

function MainContent(props) {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const [category, setCategory] = useState("ALL");
    const [search, setSearch] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const [showFavorites, setShowFavorites] = useState(false);

    const dialogRef = useRef(null);

    // 관심 상품 불러오기
    const [favorites, setFavorites] = useState(() => {
        try {
            const saved = JSON.parse(
                localStorage.getItem("fashionFavorites")
            );

            return Array.isArray(saved) ? saved : [];
        } catch {
            return [];
        }
    });

    // 관심 상품 저장
    useEffect(() => {
        try {
            localStorage.setItem(
                "fashionFavorites",
                JSON.stringify(favorites)
            );
        } catch {
            console.log("관심 상품 저장 실패");
        }
    }, [favorites]);

    // 카테고리
    const categories = [
        "ALL",
        "OUTER",
        "KNIT",
        "DENIM",
        "SHOES",
        "BAG",
        "ACCESSORIES"
    ];

    // 상품 데이터
    const collections = [
        {
            id: 1,
            category: "OUTER",
            title: "Wool Coat",
            description: "Classic outerwear",
            material: "Wool",
            price: 289000,
            detail: "클래식한 디자인과 여유로운 실루엣의 울 코트.",
            image: "/images/outer.jpg"
        },
        {
            id: 2,
            category: "KNIT",
            title: "Soft Knitwear",
            description: "Everyday essentials",
            material: "Wool Blend",
            price: 89000,
            detail: "부드러운 소재와 미니멀한 디자인의 니트웨어.",
            image: "/images/knit.jpg"
        },
        {
            id: 3,
            category: "DENIM",
            title: "Raw Denim",
            description: "Timeless classics",
            material: "Cotton",
            price: 129000,
            detail: "시간이 지날수록 자연스러운 멋이 더해지는 데님.",
            image: "/images/denim.jpg"
        },
        {
            id: 4,
            category: "SHOES",
            title: "Leather Shoes",
            description: "Modern heritage",
            material: "Leather",
            price: 219000,
            detail: "다양한 스타일에 활용할 수 있는 클래식 가죽 신발.",
            image: "/images/shoes.jpg"
        },
        {
            id: 5,
            category: "BAG",
            title: "Daily Bag",
            description: "Simple utility",
            material: "Canvas",
            price: 69000,
            detail: "일상에서 활용하기 좋은 실용적인 가방.",
            image: "/images/bag.jpg"
        },
        {
            id: 6,
            category: "ACCESSORIES",
            title: "Accessories",
            description: "Refined details",
            material: "Stainless Steel",
            price: 159000,
            detail: "심플한 디자인으로 스타일을 완성하는 액세서리.",
            image: "/images/accessories.jpg"
        }
    ];

    // 관심 상품 추가 및 삭제
    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    // 상품 필터링
    const filteredCollections = collections.filter((item) => {

        const matchCategory =
            category === "ALL" || item.category === category;

        const keyword = search.trim().toLowerCase();

        const matchSearch =
            item.title.toLowerCase().includes(keyword) ||
            item.category.toLowerCase().includes(keyword) ||
            item.detail.toLowerCase().includes(keyword);

        const matchFavorite =
            !showFavorites || favorites.includes(item.id);

        return matchCategory && matchSearch && matchFavorite;
    });

    // 전체 상품 보기
    const resetFilters = () => {
        setShowFavorites(false);
        setCategory("ALL");
        setSearch("");
    };

    // 상세 정보 팝업 열기
    useEffect(() => {
        if (
            selectedItem &&
            dialogRef.current &&
            !dialogRef.current.open
        ) {
            dialogRef.current.showModal();
        }
    }, [selectedItem]);

    // 팝업 닫기
    const closeModal = () => {
        dialogRef.current?.close();
        setSelectedItem(null);
    };

    return (
        <div className={`fashion-page ${theme}`}>

            {/* 상단 헤더 */}
            <header className="fashion-header" id="home">

                <h1>FASHION ARCHIVE®</h1>

                <div className="header-buttons">

                    <button
                        className={`favorite-menu ${
                            showFavorites ? "active" : ""
                        }`}
                        onClick={() => {
                            setShowFavorites(!showFavorites);
                            setCategory("ALL");
                            setSearch("");
                        }}
                        aria-label="관심 상품 모아보기"
                        aria-pressed={showFavorites}
                    >
                        <HeartIcon />
                        {favorites.length}
                    </button>

                    <button
                        className="theme-button"
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? "☾ DARK" : "☀ LIGHT"}
                    </button>

                </div>

            </header>

            {/* 상단 메뉴 */}
            <nav className="fashion-nav">
                <a href="#home" onClick={resetFilters}>HOME</a>
                <a href="#collection" onClick={resetFilters}>
                    COLLECTION
                </a>
                <a href="#about">ABOUT</a>
            </nav>

            {/* 메인 제목 */}
            <section className="page-title">

                <h2>THE ARCHIVE</h2>

                <p>TIMELESS STYLE — FALL / WINTER 2026</p>

            </section>

            {/* 메인 콘텐츠 */}
            <main className="archive-layout" id="collection">

                {/* 왼쪽 카테고리 */}
                <aside className="category-menu">

                    <h3>CATEGORY</h3>

                    {categories.map((item) => (
                        <button
                            key={item}
                            className={category === item ? "active" : ""}
                            onClick={() => setCategory(item)}
                        >
                            {item}
                        </button>
                    ))}

                </aside>

                <div className="collection-content">

                    {/* 검색창 */}
                    <div className="search-area">

                        <input
                            type="text"
                            placeholder="Search collection..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            aria-label="상품 검색"
                        />

                        <span>
                            {filteredCollections.length} ITEMS
                        </span>

                    </div>

                    {/* 관심 상품 모아보기 */}
                    {showFavorites && (
                        <div className="favorite-notice">

                            MY FAVORITES

                            <button onClick={resetFilters}>
                                VIEW ALL
                            </button>

                        </div>
                    )}

                    {/* 상품 갤러리 */}
                    <section className="collection-grid">

                        {filteredCollections.map((item) => (
                            <article
                                className="fashion-card"
                                key={item.id}
                            >

                                {/* 상품 사진 */}
                                <div className="image-box">

                                    <button
                                        className="image-trigger"
                                        onClick={() => setSelectedItem(item)}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </button>

                                </div>

                                {/* 카테고리 및 하트 */}
                                <div className="card-meta">

                                    <span>
                                        {String(item.id).padStart(2, "0")}
                                        {" / "}
                                        {item.category}
                                    </span>

                                    <button
                                        className={`heart-button ${
                                            favorites.includes(item.id)
                                                ? "liked"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            toggleFavorite(item.id)
                                        }
                                        aria-label={`${item.title} 관심 상품`}
                                        aria-pressed={
                                            favorites.includes(item.id)
                                        }
                                    >
                                        <HeartIcon />
                                    </button>

                                </div>

                                {/* 상품 이름 */}
                                <h3>{item.title}</h3>

                                {/* 상품 설명 */}
                                <p>{item.description}</p>

                                {/* 상품 가격 */}
                                <p className="product-price">
                                    ₩ {item.price.toLocaleString("ko-KR")}
                                </p>

                            </article>
                        ))}

                    </section>

                    {/* 검색 결과 없음 */}
                    {filteredCollections.length === 0 && (
                        <div className="empty-message">
                            No items found.
                        </div>
                    )}

                </div>

            </main>

            {/* 하단 푸터 */}
            <footer className="fashion-footer" id="about">

                <h3>Less, but better.</h3>

                <p>시간이 지나도 변하지 않는 스타일.</p>

                <p>© 2026 FASHION ARCHIVE®</p>

            </footer>

            {/* 상품 상세 정보 팝업 */}
            <dialog
                className="detail-modal"
                ref={dialogRef}
                aria-labelledby="modal-title"
                onClose={() => setSelectedItem(null)}
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        closeModal();
                    }
                }}
            >

                {selectedItem && (
                    <div className="modal-content">

                        {/* 닫기 버튼 */}
                        <button
                            className="close-button"
                            onClick={closeModal}
                            aria-label="닫기"
                        >
                            ×
                        </button>

                        {/* 상세 이미지 */}
                        <img
                            className="modal-image"
                            src={selectedItem.image}
                            alt={selectedItem.title}
                        />

                        {/* 상세 정보 */}
                        <div className="modal-info">

                            <span>{selectedItem.category}</span>

                            <h2 id="modal-title">
                                {selectedItem.title}
                            </h2>

                            <p className="product-price">
                                ₩ {selectedItem.price.toLocaleString("ko-KR")}
                            </p>

                            <p>{selectedItem.detail}</p>

                            <hr />

                            <p>
                                MATERIAL : {selectedItem.material}
                            </p>

                            <button
                                className={`save-button ${
                                    favorites.includes(selectedItem.id)
                                        ? "liked"
                                        : ""
                                }`}
                                onClick={() =>
                                    toggleFavorite(selectedItem.id)
                                }
                                aria-pressed={
                                    favorites.includes(selectedItem.id)
                                }
                            >
                                <HeartIcon />

                                {favorites.includes(selectedItem.id)
                                    ? "SAVED"
                                    : "SAVE TO FAVORITES"}
                            </button>

                        </div>

                    </div>
                )}

            </dialog>

        </div>
    );
}

export default MainContent;