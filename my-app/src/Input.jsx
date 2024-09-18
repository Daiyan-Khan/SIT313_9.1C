import React from 'react';
import './Input.css'; // Optional: For styling

const Input = ({ name, type, placeholder, onChange, value }) => {
    return (
        <div className="input-field">
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required
            />
        </div>
    );
};

export default Input;
