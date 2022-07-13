import styled from 'styled-components';

export const StyledWrapper = styled.div`
    max-width: 1164px;
    margin: 0 auto;
    display: flex;
    padding: 18px 20px;
    box-shadow: 0px 0px 25px 5px rgba(246, 246, 253, 0.5);

    .product-img {
        width: 31.4rem;
        height: 21.8rem;
        margin-right: 3.2rem;
        img {
            cursor: pointer;
            width: 100%;
            height: 100%;
        }
    }

    .product-item-content {
        padding: 20px 200px 20px 0;

        .product-title {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            cursor: pointer;

            .dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                cursor: pointer;
            }
            .dot1 {
                background-color: #de9034;
            }
            .dot2 {
                background-color: #e60584;
                margin: 0 10px;
            }
            .dot3 {
                background-color: #5e37ff;
            }
            h3 {
                margin-right: 32px;
                font-size: 2rem;
                color: #111c85;
                font-family: 'Josefin Sans', sans-serif;
            }
        }

        .price {
            size: 1.6rem;
            line-height: 1.8rem;
            color: #111c85;
            font-family: 'Josefin Sans', sans-serif;
        }

        .old-price {
            color: var(--primary);
            margin-left: 10px;
            text-decoration: line-through;
        }

        .product-desc {
            color: #9295aa;
            margin-top: 20px;
            letter-spacing: 1px;
            line-height: 2.5rem;
            width: 600px;
            height: 5rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .product-icon {
            display: flex;
            margin-top: 20px;
            .active {
                background-color: #ccc;
            }
            button {
                margin-right: 10px;
            }
        }
    }
`;
