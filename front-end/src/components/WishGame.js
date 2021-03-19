//Functionality
import { smallImage } from '../util';
//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { popUp } from '../animations';

const WishGame = ({ name, image}) => {
    return (
        <StyledWishGame variants={popUp} initial="hidden" animate="show">
                <h3>{name}</h3>
                <img src={smallImage(image, 640)} alt={name} />
        </StyledWishGame>
    );
};

const StyledWishGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px #f18d19;
    text-align: center;
    border-radius: 1rem;
    overflow:hidden;
    background-color: white;

    h3{
        font-family: 'Orbitron', sans-serif;
        font-size: 2rem;
        margin-top: 1.1rem;
        margin-bottom: 1.2rem;
    }

    img {
        width:100%;
        height:50vh;
        object-fit:cover;
    }
`;

export default WishGame;