import axios from 'axios';

//Actipn Creator
export const loadWishGames = () => async(dispatch) => {
    //Fetching data
    const wishGamesData = await axios.get("http://localhost:5000/games");

    dispatch({
        type: "FETCH_WISHGAMES",
        payload: {
            wishGames: wishGamesData.data
        }
    });
}