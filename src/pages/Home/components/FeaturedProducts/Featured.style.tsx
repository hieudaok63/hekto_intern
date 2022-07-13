import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`;

export const StyledFeaturedBody = styled.div`
    width: 1164px;
    margin: 0 auto;
`;

export const StyledFeaturedWrapper = styled.div`
    .feature-item {
        width: 270px;
        height: 361px;
        box-shadow: 0px 0px 25px 0px #0000001a;

        .feature-item-img {
            width: 270px;
            height: 236px;
            background-color: #f6f7fb;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 178px;
                height: 178px;
            }
        }

        .feature-item-content {
            p {
                text-align: center;
                font-size: 1.8rem;
                line-height: 2.1rem;
                font-weight: 700;
                color: var(--primary);
                padding: 1.5rem 0 1.2rem 0;
            }
        }
    }
`;
