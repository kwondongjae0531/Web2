import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import TodoListApp from "./01/TodoListApp";
import reportWebVitals from './reportWebVitals';
// import Mybutton2 from "./08/Mybutton2";
//import Library from "./03/
// import Library from "./03/Library";
// import Library from "./03/enhanced_css/Library"
// import "./03/enhanced_css/Book.css"
// import Clock from "./04/Clock";
// import ConfirmDialog from "./04/ConfirmDialog";
// import ConfirmDialogList from "./04/ConfirmDialogList";
// import WelcomeList from "./05/exam01/WelcomeList";
// import "./05/exam01/Welcome.css";

// import BookList from "./05/exam02/BookList";
//import UserInfoList from "./05/exam03/UserInfoList";
// import NotificationList from "./06/NotificationList";
// import Counter from "./07/Counter";
// import UseEffect from "./07/UseEffect";
// import TextInputWithFocusButton from "./07/TextInputWithFocusButton";
// import Accommodate from "./07/02/Accommodate";
// import Toggle from "./08/Toggle";
// import Mybutton from "./08/Mybutton";
// import Toggle2 from "./08/Toggle2";
// import Mybutton from "./08/Mybutton2";
// import ConfirmButton from "./08/ConfirmButton";

// import ConfirmButton from "./08/ConfirmButton2";
// import MessageSender from "./08/MessageSender";
// import Greeting from "./09/ex1/Greeting";
// import LogInControl from "./09/ex2/LogInControl";
// import Mailbox from "./09/ex3/Mailbox";
// import LogInControl2 from "./09/ex3/LogInControl2";
// import MainPage from "./09/ex4/MainPage";
// import LandingPage from "./09/finalEX/LandingPage";

// import MapTest from "./10/MapTest";
// import AttendanceBook from "./10/AttendanceBook";
// import AttendanceCardBook from "./10/AttendanceCardBook";
// import NewForm from "./11/NewForm";

// import FruitSelect from "./11/FruitSelect";
import Reservation from "./11/Reservation";

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(
        <React.StrictMode>
            <Reservation/>
        </React.StrictMode>
        );
    }, 1000
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
