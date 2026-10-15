import React from "react";

class Mybutton extends React.Component{
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // 이렇게 하면 'this'가 바운드 됩니다.
        return(
            <button onClick={() => this.handleClick()}>
                클릭
            </button>
        );
    }
}

export default Mybutton;