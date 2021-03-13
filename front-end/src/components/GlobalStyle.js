import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
    }

    body{
        font-family: 'Jura', sans-serif;
        width: 100%;
    }

    h2{
        font-size: 3rem;
        font-family: 'Orbitron', sans-serif;
        color: #f18d19
    }

    h3{
        font-size: 1.5rem;
        color: #333;
        padding: 1rem;
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
`;

export default GlobalStyles;