
import React from "react";
import "./AttendanceBook.css";

const students = [
    {
        id: 1,
        name: "기영이",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: "/images/giyoung.jpg"
    },
    {
        id: 2,
        name: "기철이",
        grade: 2,
        major: "메가트로닉스",
        avatar: "/images/gicheol.jpg"
    },
    {
        id: 3,
        name: "할머니",
        grade: 3,
        major: "시각디자인",
        avatar: "/images/grandma.jpg"
    },
    {
        id: 4,
        name: "땡구",
        grade: 2,
        major: "애견미용",
        avatar: "/images/ddaenggu.jpg"
    }
];

function AttendanceCardBook() {
    return (
        <div className="attendance-page">

            <header className="page-header">
                <span>STUDENT MANAGEMENT</span>
                <span className="semester">
                    2026 / CLASS 01
                </span>
            </header>

            <main className="attendance-card">

                <div className="card-header">
                    <div>
                        <h1>Attendance.</h1>
                        <p>Student directory / 2026</p>
                    </div>

                    <div className="student-count">
                        <strong>
                            {String(students.length).padStart(2, "0")}
                        </strong>
                        <span>TOTAL</span>
                    </div>
                </div>

                <div className="list-header">
                    <span>NO. / STUDENT</span>
                    <span>STATUS</span>
                </div>

                <ul className="student-list">
                    {students.map((student, index) => (
                        <li
                            key={student.id}
                            className="student-item"
                        >
                            <div className="student-info">

                                <span className="student-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <img
                                    className="student-avatar"
                                    src={student.avatar}
                                    alt={`${student.name} avatar`}
                                />

                                <div className="student-details">
                                    <span className="student-name">
                                        {student.name}
                                    </span>

                                    <span className="student-major">
                                        {student.major} · {student.grade}학년
                                    </span>
                                </div>
                            </div>

                            <div className="student-status">
                                <span className="status-dot"></span>
                                <span>Enrolled</span>
                            </div>
                        </li>
                    ))}
                </ul>

            </main>

            <footer className="page-footer">
                DESIGNED FOR SIMPLICITY · 2026
            </footer>

        </div>
    );
}

export default AttendanceCardBook;
