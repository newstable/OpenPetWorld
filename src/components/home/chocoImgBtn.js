import React from 'react';
import "./button-style.css";

function ImgBtn(props) {
    const { text, onClick } = props;
    return (
        <button className="normal-btn" onClick={onClick}>{text}</button>
    )
}

export default ImgBtn;