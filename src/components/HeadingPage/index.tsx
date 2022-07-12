import React from 'react';
import { StyledBody, Wrapper } from './HeadingPage.style';
import { NavLink } from 'react-router-dom';

interface IHeadingPage {
    children?: React.ReactNode;
    title?: string;
    breadcrumb: {
        name?: string;
        path: string;
    }[];
}

const HeadingPage: React.FC<IHeadingPage> = (props) => {
    const { children, title, breadcrumb } = props;
    return (
        <>
            <Wrapper>
                <StyledBody>
                    <p>{title}</p>
                    <div>
                        {breadcrumb.map((item, index) => {
                            return (
                                <span key={index}>
                                    <NavLink to={item.path}>
                                        {item.name}
                                    </NavLink>
                                    {index !== breadcrumb.length - 1 && (
                                        <span>.</span>
                                    )}
                                </span>
                            );
                        })}
                    </div>
                </StyledBody>
            </Wrapper>
            {children}
        </>
    );
};

export default HeadingPage;
