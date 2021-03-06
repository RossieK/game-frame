import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track{
        background:white;
    }
    }

    body{
        font-family: 'Jura', sans-serif;
        width: 100%;
        background-color: #303548;
    }

    h2{
        font-size: 3rem;
        font-family: 'Orbitron', sans-serif;
        color: #f18d19
    }

    h3{
        font-size: 1.5rem;
        color: #333;
        padding: 1rem 0rem;
    }

    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }

    a{
        text-decoration: none;
        color: #f18d19;
    }

    img{
        display:block;
    }

    input{
        font-weight: bold;
        font-family: 'Jura', sans-serif;
    }

    .x-search{
    color: #f18d19;
    margin-top: 2.1rem;
    margin-right: 1rem;
    cursor: pointer;
    }
`;

export default GlobalStyles;