import React from 'react';
import { NavLink } from "react-router-dom";

export const btnPrimary = "bg-white text-gray-600 border border-white";
export const btnOutline = "bg-transparent text-white py-5 px-2 border border-white transition-all ease-in-out";
export const btnMedium = "py-5 px-2 text-lg hover:bg-white hover:text-gray-600 hover:transition-all ease-in-out";
export const btnLarge = "py-7 px-3 text-xl hover:bg-white hover:text-gray-600 hover:transition-all ease-in-out";

const STYLES = [btnPrimary, btnOutline];
const SIZES = [btnMedium, btnLarge];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <NavLink to="/contact" className="btn-mobile">
            <button 
            className={`bg-white-600 py-5 px-2 rounded-sm cursor-pointer ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </NavLink>
    );
};
