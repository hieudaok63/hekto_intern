import styled from 'styled-components';

export const StyledFeaturedWrapper = styled.div`
    .feature-item {
        width: 270px;
        height: 361px;
        box-shadow: 0px 0px 25px 0px #0000001a;
        transition: all 3s;
        &:hover .feature-item-content {
            background-color: #2f1ac4;
            height: 125px;
            p {
                color: #fff;
            }
            .feature-item-code,
            .feature-item-price {
                color: #fff;
            }
        }
        &:hover .feature-item-img {
            img {
                transform: scale(0.8, 0.8);
            }

            button {
                display: block;
                width: 9.4rem;
            }
        }

        .feature-item-img {
            width: 270px;
            height: 236px;
            background-color: #f6f7fb;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            cursor: pointer;
            img {
                width: 178px;
                height: 178px;
            }
            button {
                background-color: #08d15f;
                font-family: 'Josefin Sans', sans-serif;
                font-size: 1.2rem;
                line-height: 1.4rem;
                border-radius: 2px;
                bottom: 1rem;
                display: none;
                width: 0;
            }
            .feature-item-icon {
                position: absolute;
                display: flex;
                top: 1.1rem;
                left: 1.1rem;
                button {
                    width: 17px;
                    height: 17px;
                    background-color: transparent;

                    img {
                        width: 17px;
                        height: 17px;
                    }
                }
            }
        }

        .feature-item-content {
            text-align: center;
            p {
                font-size: 1.8rem;
                line-height: 2.1rem;
                font-weight: 700;
                color: var(--primary);
                padding: 1.5rem 0 1.2rem 0;
                cursor: pointer;
            }
            .feature-item-dot {
                line-height: 0;
                .dot1 {
                    display: inline-block;
                    width: 1.4rem;
                    height: 0.4rem;
                    background-color: #05e6b7;
                    border-radius: 10px;
                }
                .dot2 {
                    display: inline-block;
                    width: 1.4rem;
                    height: 0.4rem;
                    background-color: #f701a8;
                    border-radius: 10px;
                    margin: 0 0.5rem;
                }
                .dot3 {
                    display: inline-block;
                    width: 1.4rem;
                    height: 0.4rem;
                    background-color: #00009d;
                    border-radius: 10px;
                }
            }

            .feature-item-code {
                color: #151875;
                font-size: 1.4rem;
                line-height: 1.6rem;
                font-family: 'Josefin Sans', sans-serif;
                margin-top: 1.2rem;
            }

            .feature-item-price {
                font-size: 1.4rem;
                line-height: 1.7rem;
                color: #151875;
                margin-top: 1rem;
            }
        }
    }
`;
