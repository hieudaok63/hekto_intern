import styled from 'styled-components';

export const FormBody = styled.div`
    height: 905px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledForm = styled.div`
    box-shadow: 0px 0px 25px 10px #f8f8fb;
    padding: 26px;
    margin-bottom: 109px;

    h3 {
        text-align: center;
        font-size: 3.2rem;
        line-height: 37px;
        font-family: 'Josefin Sans', sans-serif;
    }

    p {
        text-align: center;
        color: #9096b2;
        font-weight: 400;
        font-size: 17px;
        margin-bottom: 37px;
        span {
            color: var(--primary);
            cursor: pointer;
        }
    }

    input {
        width: 432px;
        height: 52px;
        border: 1px solid #c2c5e1;
        border-radius: 2px;
        margin-bottom: 23px;
        padding-left: 8px;
    }

    button {
        margin-bottom: 28px;
    }
`;
