import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 27rem;
    height: 32rem;
    text-align: center;
    box-shadow: 0px 8px 40px 0px #31208a0d;
    padding: 0 2.6rem;
    .shopex-icon {
        padding: 5.6rem 0 2.7rem 0;
        cursor: pointer;
        img {
            &:hover {
                transform: rotate(20deg);
            }
        }
    }

    .shopex-support-text {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 2.2rem;
        line-height: 2.6rem;
        color: #151875;
        margin: 0;
        padding: 0;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }

    .shopex-desc {
        font-style: normal;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.6rem;
        text-align: center;

        color: rgba(26, 11, 91, 0.3);
    }
`;
