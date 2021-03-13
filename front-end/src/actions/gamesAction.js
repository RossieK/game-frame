import axios from 'axios';
import { newGamesUrl, popularGamesUrl, upcomingGamesUrl } from '../api';

//Actipn Creator

export const loadGames = () => async(dispatch) => {
    //Fetching data
    const popularData = await axios.get(popularGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results
        }
    });
}