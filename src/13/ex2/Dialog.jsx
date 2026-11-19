import { FancyBorder } from "../ex1/WelcomeDialog";
import "../ex1/FancyBorder.css";

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

export default Dialog;