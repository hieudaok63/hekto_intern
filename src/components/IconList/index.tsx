import React from 'react';
import { StyleButton } from './IconList.style';

interface IIcon {
    children: React.ReactNode;
    active?: boolean;
    className?: string;
    onClick?: () => void;
}

const IconList: React.FC<IIcon> = ({
    children,
    active = false,
    className,
    onClick,
}) => {
    return (
        <StyleButton
            className={`${active ? 'active' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </StyleButton>
    );
};

export default IconList;
