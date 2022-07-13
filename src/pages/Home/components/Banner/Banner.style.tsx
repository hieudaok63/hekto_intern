import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 764px;
    background-color: #f2f0ff;
`;

export const StyledBody = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    max-width: 1164px;
    height: 100%;
    margin: 0 auto;
    padding-top: 173px;

    .banner-light {
        position: absolute;
        left: 0;
        top: 0;
    }

    .banner-right {
        padding-top: 5rem;
        span {
            font-size: 1.6rem;
            font-weight: 700;
            color: var(--primary);
            line-height: 2.8rem;
        }

        h1 {
            font-size: 5.3rem;
            line-height: 8.1rem;
            letter-spacing: 1px;
            color: #000;
            font-family: 'Josefin Sans', sans-serif;
            margin: 20px 0;
        }
        p {
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 2.8rem;
            color: #8a8fb9;
            margin-bottom: 2.7rem;
        }
    }
`;
