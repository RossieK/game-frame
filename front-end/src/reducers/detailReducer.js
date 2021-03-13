const initialState = {
    game: {
        platforms: []
    },
    screens: []
};

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screens: action.payload.screens
            }

        default:
            return {...state }
    }
}

export default detailReducer;