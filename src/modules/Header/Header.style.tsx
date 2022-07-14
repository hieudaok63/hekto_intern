import styled from 'styled-components';

// Header top
export const StyledWrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    height: 122px;
`;
export const StyledHeaderTop = styled.div`
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    background-color: #7e33e0;
    position: fixed;
    z-index: 99;
`;

export const StyledHeaderTopLeft = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const StyledHeaderTopEmail = styled.div`
    margin-right: 48px;
    display: flex;
    span {
        padding-left: 10px;
    }
`;
export const StyledHeaderTopWrapper = styled.div`
    width: 1164px;
    margin: 0 auto;
    height: 44px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #fff;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.6rem;
`;

export const StyledHeaderTopPhone = styled.div`
    display: flex;
    span {
        padding-left: 10px;
    }
`;

export const StyledHeaderTopRight = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderTopRightList = styled.div`
    padding-left: 17px;
    position: relative;

    cursor: pointer;
    img {
        margin-bottom: -2px;
    }
    span {
        color: #fff;
    }

    .modal-header {
        position: absolute;
        background-color: white;
        width: 80px;
        height: auto;
        border: 1px solid;
        border-color: #ccc;
        color: #333;
        padding: 10px;
        z-index: 2;
        display: none;
    }
    .hover-header:hover .modal-header {
        display: block;
    }
`;

// Header bottom
export const StyledHeaderBottom = styled.div`
    height: 78px;
    max-width: 1164px;
    margin: 0 auto;
    padding-top: 7.8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderBottomBody = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const HeaderBottomLogo = styled.img`
    padding-right: 88px;
`;

export const HeaderBottomMenu = styled.div`
    a {
        margin-right: 35px;
    }
`;

export const HeaderBottomSearchInput = styled.div`
    top: -20px;
    width: 317px;
    position: relative;
    input {
        width: 100%;
        height: 40px;
        border: 2px solid #e7e6ef;
        padding: 0 5px;
        position: absolute;
    }

    button {
        position: absolute;
        width: 51px;
        height: 40px;
        right: 0;
        background-color: var(--primary);
    }
`;
