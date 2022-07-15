import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    width: 117rem;
    height: 50.9rem;
    padding: 1.2rem;
    box-shadow: 0px 0px 25px 10px #f6f4fd;
    font-family: 'Josefin Sans', sans-serif;
    color: #151875;

    .product-info-img {
        display: flex;

        .info-img-left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            img {
                width: 15.1rem;
                height: 15.5rem;
                border-radius: 3px;
            }
        }
        .info-img-right {
            img {
                width: 37.5rem;
                height: 48.7rem;
                margin-left: 2rem;
            }
        }
    }

    .product-info-content {
        padding: 6rem 4rem;
        h3 {
            font-size: 3.6rem;
            line-height: 4.2rem;
        }

        .info-content-star {
            margin-bottom: 1.5rem;
            span {
                font-family: 'Josefin Sans';
                font-size: 14px;
                line-height: 29px;
                text-transform: capitalize;
            }
        }

        .new-price {
            font-size: 16px;
            line-height: 29px;
            text-transform: capitalize;
            margin-right: 2rem;
        }

        .old-price {
            font-size: 16px;
            line-height: 29px;
            text-decoration-line: line-through;
            text-transform: capitalize;
            color: #fb2e86;
        }

        .info-content-color {
            font-size: 16px;
            line-height: 19px;
            margin: 1.2rem 0;
            font-weight: 700;
        }
        .info-content-desc {
            font-size: 16px;
            line-height: 29px;
            color: #a9acc6;
        }

        .info-content-add {
            display: flex;
            align-items: center;
            margin: 3rem 0;
            button {
                font-size: 16px;
                line-height: 29px;
                text-transform: capitalize;
                color: #151875;
                background-color: transparent;
                margin: 0 5rem;
            }
        }

        .info-content-category {
            font-size: 16px;
            line-height: 29px;
            margin-bottom: 1rem;
        }

        .info-content-social {
            display: flex;
            align-items: center;

            .info-content-search {
                margin-right: 2rem;
            }
            img {
                padding: 0 0.5rem;
            }
        }
    }
`;
