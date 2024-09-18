import React from 'react';
import './Button.css'; // Optional: For styling

const Button = ({ type, text, onClick, className }) => {
    return (
        <button type={type} onClick={onClick} className={className}>
            {text}
        </button>
    );
};

export default Button;
