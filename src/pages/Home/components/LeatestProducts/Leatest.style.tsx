import styled from 'styled-components';
export const Wrapper = styled.div`
    width: 36rem;
    height: auto;

    .leates-img {
        background-color: #f7f7f7;
        width: 100%;
        height: 27rem;
        position: relative;
        cursor: pointer;

        .latest-sale {
            position: absolute;
            top: 0;
            left: 0;
            padding: 2rem 5rem;

            img {
                width: 22.3rem;
                height: 23rem;
            }
        }

        .latest-icon {
            position: absolute;
            bottom: 1rem;
            left: 0;
            display: none;
            button {
                margin: 1rem 0;
                img {
                    width: 1.4rem;
                    height: 1.4rem;
                }
            }
        }
        &:hover {
            background-color: #fff;
        }

        &:hover .latest-sale {
            display: block;
            transition: all 0.5s ease;
        }
        &:hover .latest-icon {
            display: block;
        }
    }
    .leates-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5rem;

        p {
            font-family: 'Josefin Sans', sans-serif;
            font-size: 1.6rem;
            line-height: 1.9rem;

            color: #151875;
            border-bottom: 2px solid #eeeffb;
            transform: matrix(1, 0.01, -0.01, 1, 0, 0);
        }

        .leates-info-price {
            .info-price-new {
                font-family: 'Josefin Sans';
                font-size: 1.4rem;
                line-height: 1.6rem;
                color: #151875;
                padding-right: 0.9rem;
            }
            .info-price-old {
                font-family: 'Josefin Sans';
                font-size: 1.2rem;
                line-height: 1.4rem;
                text-decoration-line: line-through;

                color: #fb2448;
            }
        }
    }
`;
