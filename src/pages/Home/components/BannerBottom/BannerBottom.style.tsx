import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1164px;
    margin: 0 auto;
    display: flex;

    .banner-content {
        .banner-content-heading {
            font-family: 'Josefin Sans', sans-serif;
            font-size: 3.5rem;
            line-height: 132%;
            letter-spacing: 0.15rem;
            color: #151875;
            margin: 0;
            padding: 9.7rem 0 2.9rem 0;
        }
        .banner-content-desc {
            display: flex;
            align-items: baseline;
            .content-desc-dot1 {
                width: 1.1rem;
                height: 1.1rem;
                border-radius: 50%;
                background-color: #f52b70;
                display: block;
                margin-right: 1.2rem;
            }
            .content-desc-dot2 {
                width: 1.3rem;
                height: 1.1rem;
                border-radius: 50%;
                background-color: #2b2bf5;
                display: block;
                margin-right: 1.2rem;
            }
            .content-desc-dot3 {
                width: 1.1rem;
                height: 1.1rem;
                border-radius: 50%;
                background-color: #2bf5cc;
                display: block;
                margin-right: 1.2rem;
            }
            .content-desc-text {
                font-weight: 500;
                font-size: 1.6rem;
                line-height: 132%;
                letter-spacing: 0.15rem;
                line-height: 3rem;

                color: #acabc3;
            }
        }
        .banner-content-bottom {
            display: flex;
            align-items: center;
            margin-top: 3.8rem;
            button {
                background: #fb2e86;
                border-radius: 2px;
                width: 17.5rem;
                height: 4.5rem;
                font-family: 'Josefin Sans', sans-serif;
            }
            .content-bottom-info {
                margin-left: 2rem;
                p {
                    font-family: 'Josefin Sans', sans-serif;
                    font-size: 1.4rem;
                    line-height: 1.6rem;
                    letter-spacing: 0.2rem;
                    color: #151875;
                    font-weight: 700;
                }
                span {
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.7rem;
                    color: #151875;
                }
            }
        }
    }
`;
