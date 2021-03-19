//Styling
import styled from 'styled-components';
//Components
import WishGame from '../components/WishGame';

const Wishlist = () => {
    return (
        <StyledWishPage>
            <h2>My WishList</h2>
            <StyledWishlist>
                <WishGame name="Game 1Game 1Game 1Game 1Game 1Game 1" image="https://media.rawg.io/media/resize/1280/-/games/b11/b114db08b8c14b560cfb087ebd89a138.jpg" />
                <WishGame name="Game 1" image="https://media.rawg.io/media/resize/1280/-/games/b11/b114db08b8c14b560cfb087ebd89a138.jpg" />
                <WishGame name="Game 1" image="https://media.rawg.io/media/resize/1280/-/games/b11/b114db08b8c14b560cfb087ebd89a138.jpg" />
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

export default Wishlist;