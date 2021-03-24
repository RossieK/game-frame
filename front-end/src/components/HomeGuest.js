//Functionality
import { Link } from 'react-router-dom';
//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
//Image
import backgroundImg from '../img/background.jpeg';

const HomeGuest = () => {
    return (
        <StyledGuestHome variants={fadeIn} initial="hidden" animate="show">
            <h1>Please <Link to="/register">Register</Link> / <Link to="/login">Login</Link> to access content</h1>
            <img src={backgroundImg} alt="Games"/>
        </StyledGuestHome>
    );
};

const StyledGuestHome = styled(motion.div)`
    h1{
        color: white;
        font-family: 'Orbitron', sans-serif;
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }

    img{
        width:60%;
        margin: auto;
    }
`;

export default HomeGuest;