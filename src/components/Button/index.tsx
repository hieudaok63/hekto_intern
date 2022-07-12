import React from 'react';

interface IButtonProps {
    width?: string;
    height?: string;
    color?: string;
    radius?: string;
    backgroundColor?: string;
    children?: React.ReactNode;
    borderRadius?: string;
    position?: any;
    onClick?: () => void;
    type?: any;
}

const Button: React.FC<IButtonProps> = (props) => {
    const {
        children,
        onClick,
        width,
        height,
        color,
        backgroundColor,
        borderRadius,
        position,
        type,
    } = props;

    return (
        <button
            onClick={onClick}
            type={type}
            style={{
                width: width,
                height: height,
                color: color,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                position: position,
            }}
        >
            {children}
        </button>
    );
};

export default Button;
