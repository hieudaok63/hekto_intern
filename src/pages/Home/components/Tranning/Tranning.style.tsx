import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 27rem;
    height: 35rem;
    background: linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
    padding: 1.2rem;
    text-align: center;
    box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
    margin-bottom: 7rem;
    .tranning-img {
        background: #f5f6f8;
        height: 24.4rem;
        img {
            padding: 3.3rem;
        }
    }
    .tranning-heading {
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        text-align: center;
        color: #151875;
        padding: 1.5rem 0 0.8rem 0;
    }
    .price-new {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.4rem;
        line-height: 1.6rem;
        text-align: center;
        color: #151875;
    }

    .price-old {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.2rem;
        line-height: 1.4rem;
        text-align: center;
        text-decoration-line: line-through;
        color: rgba(21, 24, 117, 0.3);
    }
`;
