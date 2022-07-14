import styled from 'styled-components';

export const StyledBannerSlide = styled.div`
    max-width: 1920px;
    margin: 0 auto;
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
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
    h2 {
        text-align: center;
        font-size: 4.2rem;
        line-height: 5rem;
        color: #1a0b5b;
        font-family: 'Josefin Sans', sans-serif;
        margin: 129px 0 48px 0;
    }

    .Featured {
        max-width: 1164px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .Leatest {
        max-width: 1164px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 10rem;
    }

    .Shopex {
        max-width: 1164px;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        margin-bottom: 13.5rem;
    }
    .banner-bottom {
        max-width: 1920px;
        margin: 0 auto;
        background-color: #f1f0ff;
        height: 57.9rem;
    }

    h3 {
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 3.5rem;
        line-height: 155%;
        letter-spacing: 0.15rem;
        color: #151875;
        padding: 0 30rem;
        margin-top: 8.8rem;
    }

    .home-btn {
        text-align: center;
        button {
            background: #fb2e86;
            border-radius: 2px;
            width: 17.3rem;
            height: 4rem;
            font-family: 'Josefin Sans', sans-serif;
            margin-top: 1rem;
        }
    }

    .Trending {
        max-width: 1164px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .brand-list {
        text-align: center;
        margin-top: 7.6rem;
    }

    .leatest-blog {
        max-width: 1164px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 11.5rem;
    }
`;
