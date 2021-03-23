//Functionality
import { smallImage } from '../util';
import { deleteWishGame } from '../actions/wishesAction';
//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { popUp } from '../animations';
//Images
import remove from '../img/remove.svg';

const WishGame = ({ name, image, id }) => {
    const deleteGameHandler = () => {
        deleteWishGame(id);
    }

    return (
        <StyledWishGame variants={popUp} initial="hidden" animate="show">
            <h3>{name}</h3>
            <img id="icon" src={remove} alt="remove" onClick={deleteGameHandler} />
            <img src={smallImage(image, 640)} alt={name} />
        </StyledWishGame>
    );
};

const StyledWishGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px #f18d19;
    border-radius: 1rem;
    overflow:hidden;
    background-color: white;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas: 
    "title icon"
    "image image";

    h3{
        font-family: 'Orbitron', sans-serif;
        font-size: 2rem;
        grid-area: title;
        margin-left: 1rem;
        align-self:center;
        color: #7d6190;
    }

    #icon{
        width: 2.5rem;
        height: 2.5rem;
        display: inline-block;
        grid-area: icon;
        align-self:center;
        margin:auto;
        cursor: pointer;
    }

    img {
        width:100%;
        height:50vh;
        object-fit:cover;
        grid-area: image;
    }
`;

export default WishGame;