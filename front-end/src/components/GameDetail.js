import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { noDetailsLoaded } from '../actions/detailAction';
import { smallImage } from '../util';
import { fadeIn } from '../animations';
//Images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

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

    //Getting images
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull}></img>);
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty}></img>);
            }
        }

        return stars;
    }

    const getPlatform = (platform) => {
        switch (platform) {
            case "Playstation 4":
                return playstation;

            case "Playstation 5":
                return playstation;

            case "Xbox One":
                return xbox;

            case "PC":
                return steam;

            case "Nintendo Switch":
                return nintendo;

            case "iOS":
                return apple;

            default: return gamepad;
        }
    }

    //Data
    const { game, screens, isLoading } = useSelector(state => state.detail);

    return (
        <>
            {!isLoading && (
                <StyledCardShadow variants={fadeIn} initial="hidden" animate="show" className="shadow" onClick={exitDetailHandler}>
                    <StyledDetail>
                        <StyledStats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                                {getStars()}
                            </div>
                            <StyledInfo>
                                <h3>Platforms</h3>
                                <StyledPlatforms>
                                    {game.platforms.map(data => (
                                        <img alt={data.platform.name} src={getPlatform(data.platform.name)} key={data.platform.id}></img>
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
    img{
        width: 2rem;
        height: 2rem;
        display: inline;
    }
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