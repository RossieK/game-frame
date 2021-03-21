const initState = {}

const wishGamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_WISHGAMES":
            return action.payload.wishGames;

        default:
            return {...state }
    }
};

export default wishGamesReducer;