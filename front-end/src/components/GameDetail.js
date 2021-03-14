import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { noDetailsLoaded } from '../actions/detailAction';
import { smallImage } from '../util';

const GameDetail = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    //Exit page
    const exitDetailHandler = (e) => {
        const element = e.target;

        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push('/');
            dispatch(noDetailsLoaded());
        }
    }

    //Data
    const { game, screens, isLoading } = useSelector(state => state.detail);

    return (
        <>
            {!isLoading && (
                <StyledCardShadow className="shadow" onClick={exitDetailHandler}>
                    <StyledDetail>
                        <StyledStats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <StyledInfo>
                                <h3>Platforms</h3>
                                <StyledPlatforms>
                                    {game.platforms.map(data => (
                                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                                    ))}
                                </StyledPlatforms>
                            </StyledInfo>
                        </StyledStats>
                        <StyledMedia>
                            <img src={smallImage(game.background_image, 1280)} alt={game.name} />
                        </StyledMedia>
                        <StyledDescription>
                            <p>{game.description_raw}</p>
                        </StyledDescription>
                        <div className="gallery">
                            {screens && screens.map(screen => (
                                <img src={smallImage(screen.image, 1280)} key={screen.id} alt={game.name} />
                            ))}
                        </div>
                    </StyledDetail>
                </StyledCardShadow>
            )}
        </>
    );
};

const StyledCardShadow = styled(motion.div)`
    width:100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top:0;
    left:0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb{
       background-color: #f18d19;
    }

    &::-webkit-scrollbar-track{
        background:white;
    }

    img{
        width: 100%;
    }
`;

const StyledDetail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 8rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
`;

const StyledStats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledInfo = styled(motion.div)`
    text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`;

const StyledMedia = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
    }
`;

const StyledDescription = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetail;