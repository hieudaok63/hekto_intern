import styled from 'styled-components';
interface IIcon {
    children?: React.ReactNode;
    active?: boolean;
    className?: string;
}

export const StyleButton = styled.button<IIcon>`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    &:hover {
        background-color: #eee;
    }
`;
