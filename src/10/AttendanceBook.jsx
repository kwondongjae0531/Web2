
import React from "react";
import "./AttendanceBook.css";

const students = [
    { name: "Inje" },
    { name: "Steve" },
    { name: "Bill" },
    { name: "Jeff" },
];

function AttendanceBook() {
    return (
        <div className="attendance-page">
            <header className="page-header">
                <span>STUDENT MANAGEMENT</span>
                <span className="semester">2026 / CLASS 01</span>
            </header>

            <main className="attendance-card">
                <div className="card-header">
                    <div>
                        <h1>Attendance.</h1>
                        <p>Student directory / 2026</p>
                    </div>

                    <div className="student-count">
                        <strong>{students.length.toString().padStart(2, "0")}</strong>
                        <span>TOTAL</span>
                    </div>
                </div>

                <div className="list-header">
                    <span>NO. / NAME</span>
                    <span>STATUS</span>
                </div>

                <ul className="student-list">
                    {students.map((student, index) => (
                        <li key={student.name} className="student-item">
                            <div className="student-info">
                                <span className="student-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="student-name">
                                    {student.name}
                                </span>
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

export default AttendanceBook;
