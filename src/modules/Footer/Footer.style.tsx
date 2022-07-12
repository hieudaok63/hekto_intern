import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`;

export const WrapperFooterTop = styled.div`
    width: 100%;
    height: 479px;
    background-color: #eeeffb;
`;

export const FooterTopBody = styled.div`
    max-width: 1164px;
    margin: 0 auto;
    display: flex;

    padding: 95px 0 0 0;
`;

export const FooterTopList = styled.div`
    margin-right: 50px;
    h3 {
        margin-bottom: 40px;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 2.2rem;
    }
`;

export const FooterTopLogo = styled.div`
    margin-bottom: 40px;
`;

export const FooterTopInput = styled.div`
    width: 377px;
    height: 44px;
    position: relative;

    input {
        width: 100%;
        height: 44px;
        position: absolute;
        padding-left: 6px;
    }

    button {
        position: absolute;
        right: 0;
        top: 3px;
    }
`;

export const FooterTopItem = styled.li`
    font-size: 1.6rem;
    color: #8a8fb9;
    padding: 10px 0;
    cursor: pointer;
    :hover {
        color: var(--primary);
    }
`;

// Footer bottom

export const WrapperFooterBottom = styled.div`
    width: 100%;
    background-color: #e7e4f8;
    height: 53px;
`;

export const WrapperFooterBody = styled.div`
    width: 1164px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p {
        font-size: 1.6rem;
        color: #9da0ae;
    }

    div {
        img {
            padding: 6px;
            cursor: pointer;
        }
    }
`;
