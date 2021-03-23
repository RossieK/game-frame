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

export const addToWishGames = ({ gameName, imageUrl }) => {
    //Header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request Body
    const body = JSON.stringify({ gameName, imageUrl });

    axios.post("http://localhost:5000/games", body, config);
}