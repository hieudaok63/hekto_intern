import styled from 'styled-components';

export const StyledBannerSlide = styled.div`
    .mySwiper {
        display: block;
    }
    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        border: 1px solid #fb2e86;
        transform: rotate(-45deg) !important;
        background-color: transparent;
        border-radius: 0;
    }
    .swiper-pagination-bullet-active {
        background-color: #fb2e86;
    }
`;

export const Wrapper = styled.div`
    .Featured {
        h2 {
            text-align: center;
            font-size: 4.2rem;
            line-height: 5rem;
            color: #1a0b5b;
            font-family: 'Josefin Sans', sans-serif;
            margin: 129px 0 48px 0;
        }
    }
`;
