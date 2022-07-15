import styled from 'styled-components';

export const RelatedWrapper = styled.div`
    color: #151875;
    font-family: 'Josefin Sans', sans-serif;
    width: 27rem;

    .related-img {
        margin-bottom: 2rem;
        img {
            width: 27rem;
            height: 34rem;
            cursor: pointer;
        }
    }
    .related-name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: auto;
        .related-heading-text {
            font-size: 1.6rem;
            line-height: 1.9rem;
            font-weight: 700;
            cursor: pointer;
        }
    }
    .related-price {
        font-size: 1.3rem;
        line-height: 1.5rem;
        margin-top: 1.5rem;
    }
`;
