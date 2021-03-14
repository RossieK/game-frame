import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import { popUp } from '../animations';

const Game = ({ name, released, image, id, short_screenshots }) => {
    //Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id, short_screenshots));
    };

    return (
        <StyledGame variants={popUp} initial="hidden" animate="show" onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={smallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px #f18d19;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow:hidden;
    background-color: white;
    img {
        width:100%;
        height:50vh;
        object-fit:cover;
    }
`;

export default Game;