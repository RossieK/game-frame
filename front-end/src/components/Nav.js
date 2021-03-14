import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';

const Nav = () => {
    return (
        <StyledNav>
            <StyledLogo>
                <img src={logo} alt="logo" />
                <h1>Game Frame</h1>
            </StyledLogo>
            <div className="search">
                <input type="text" />
                <button>Search</button>
            </div>
        </StyledNav>
    );
};

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    font-size: 2rem;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        font-weight: bold;
    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #f18d19;
        color: white;
    }
`;

const StyledLogo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1.5rem;
    cursor: pointer;
    img{
        height: 4rem;
        width: 4rem;
    }
`;

export default Nav;