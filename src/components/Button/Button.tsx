import React from 'react';
import "./button.css"

interface IProps {
    children?: string,
    onClick: () => void
}

const Button = ({children, onClick, }:IProps) => {
    return (
        <button
            onClick={onClick}
            className="button"
            type="button"
        >
            {children}
        </button>
    );
};

export default Button;