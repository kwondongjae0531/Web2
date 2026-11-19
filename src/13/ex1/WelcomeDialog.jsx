import React from 'react';
import './FancyBorder.css';

export function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1>어서오세요</h1>
            <p>우리 사이트에 방문하신 것을 환영합니다!</p>
        </FancyBorder>
    );
}

export default WelcomeDialog;