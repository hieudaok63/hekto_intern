import React from 'react';
import { StyleButton } from './IconList.style';

interface IIcon {
    children: React.ReactNode;
    active?: boolean;
    className?: string;
}

const IconList: React.FC<IIcon> = ({ children, active = false, className }) => {
    return (
        <StyleButton className={`${active} ${className}`}>
            {children}
        </StyleButton>
    );
};

export default IconList;
