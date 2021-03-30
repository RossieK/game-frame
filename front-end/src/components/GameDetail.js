//Functionality
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { noDetailsLoaded } from '../actions/detailAction';
import { smallImage } from '../util';
import { addToWishGames } from '../actions/wishesAction';
//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
import heartEmpty from '../img/heart-empty.svg';
import heartFull from '../img/heart-full.svg';

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

    //Setting rating stars 
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

    //Setting images for platforms
    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;

            case "PlayStation 5":
                return playstation;

            case "Xbox One":
                return xbox;

            case "Xbox Series S/X":
                return xbox;

            case "PC":
                return steam;

            case "Nintendo Switch":
                return nintendo;

            case "iOS":
                return apple;

            case "macOS":
                return apple;

            default: return gamepad;
        }
    }

    //Get data from state
    const { game, screens, isLoading } = useSelector(state => state.detail);

    //Add to wishlist functionality
    const addToWishlist = (e) => {
        let gameName = game.name;
        let imageUrl = game.background_image;
        addToWishGames({ gameName, imageUrl });
        e.target.src = heartFull;
    }

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
                            <div className="wishListAdd">
                                <h3>Add to Wishlist</h3>
                                <img src={heartEmpty} alt="Heart" onClick={addToWishlist} />
                            </div>
                            <StyledInfo>
                                <h3>Platforms</h3>
                                <StyledPlatforms>
                                    {game.platforms.map(data => (
                                        <img alt={data.platform.name} src={getPlatform(data.platform.name)} title={data.platform.name} key={data.platform.id}></img>
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
    padding-top: 11rem;

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
    .wishListAdd{
        img{
            width: 100%;
            cursor:pointer;
        }
        h3{
            color:black;
        }
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