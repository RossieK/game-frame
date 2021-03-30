//Functionality
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadWishGames } from '../actions/wishesAction';
//Styling
import styled from 'styled-components';
//Components
import WishGame from '../components/WishGame';

const Wishlist = () => {
    //Get games data from state
    const wishGames = useSelector(state => state.wishGames);

    //Fetch Games Data
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadWishGames());
    }, [dispatch]);

    return (
        <StyledWishPage>
            <h2>My WishList</h2>
            <StyledWishlist>
                {wishGames.length ?
                    wishGames.map(wishGame => (
                        <WishGame
                            name={wishGame.gameName}
                            image={wishGame.imageUrl}
                            id={wishGame._id}
                            key={wishGame._id}
                        />
                    )) : (
                        <StyledPlaceholder>
                            <h1>Nothing here just yet. <Link to="/">Go</Link> add all the games that you are eager to play.</h1>
                            <img src="https://media.giphy.com/media/xkvttzvWDPMEEXAJB1/giphy.gif" alt="Gaming giphy"/>
                        </StyledPlaceholder>
                    )}
            </StyledWishlist>
        </StyledWishPage>
    );
};

const StyledWishPage = styled.div`
    h2{
        margin-top: 3rem;
        margin-left: 5rem;
    }
`;

const StyledWishlist = styled.div`
    padding: 5rem 5rem;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

const StyledPlaceholder = styled.div`
    h1{
        color:white;
        font-size: 2.5rem;
        text-align: center;
    }

    img{
        margin: auto;
        margin-top: 8rem;
        width: 40%;
    }
`;

export default Wishlist;