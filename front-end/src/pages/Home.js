//Funtionality
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadGames } from '../actions/gamesAction';
//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
//Components
import Search from '../components/Search';
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

const Home = () => {
    //Location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    //Fetch Data
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    //Get data from state
    const { popular, newGames, upcoming, searched } = useSelector(state => state.games);

    return (
        <>
            <Search />
            <StyledGameList variants={fadeIn} initial="hidden" animate="show">
                {pathId && <GameDetail />}
                {searched.length ? (
                    <div className="searched">
                        <h2>Searched Games</h2>
                        <StyledGames>
                            {searched.map(game => (
                                <Game
                                    name={game.name}
                                    released={game.released}
                                    id={game.id}
                                    image={game.background_image}
                                    key={game.id}
                                    short_screenshots={game.short_screenshots}
                                />
                            ))}
                        </StyledGames>
                    </div>
                ) : ""}
                <h2>Upcoming Games</h2>
                <StyledGames>
                    {upcoming.map(game => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                            short_screenshots={game.short_screenshots}
                        />
                    ))}
                </StyledGames>
                <h2>Popular Games</h2>
                <StyledGames>
                    {popular.map(game => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </StyledGames>
                <h2>New Games</h2>
                <StyledGames>
                    {newGames.map(game => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </StyledGames>
            </StyledGameList>
        </>
    );
};

const StyledGameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`;

const StyledGames = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;
