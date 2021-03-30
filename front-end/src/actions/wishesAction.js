import axios from 'axios';

//Get wish games
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

    //Post game
    axios.post("http://localhost:5000/games", body, config);
}

//Delete specific wish game
export const deleteWishGame = (id) => dispatch => {
    //Header
    const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //Delete game
    axios.delete("http://localhost:5000/games/" + id, config)
        .then(() => {
            dispatch(loadWishGames());
        })
        .catch(err => console.log(err));
}