import axios from 'axios';
import { popularGamesUrl } from '../api';

//Actipn Creator

export const loadGames = () => async(dispatch) => {
    //Fetching data
    const popularData = await axios.get(popularGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results
        }
    });
}