import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary: #FB2E86;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: all .2s linear;
    }

    html { 
        font-size:62.5%;
    }

    body {
        font-family: 'Lato', sans-serif;
        font-size: 1.6rem;
        text-rendering: optimizeSpeed;

    }

    a { 
        text-decoration: none;
        color: #0D0E43;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
        color: #FFFFFF;
    }

    button:hover {
        opacity: 0.9;
    }

    input {
        border: none;
        outline: none;
    }

    li { 
        list-style-type: none;
    }

`;
