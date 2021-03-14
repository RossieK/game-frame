const initialState = {
    game: {
        platforms: []
    },
    screens: [],
    isLoading: true
};

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screens: action.payload.screens,
                isLoading: false
            }

        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: false
            }

        case "NO_DETAILS_LOADED":
            return {
                ...state,
                game: {
                    platforms: []
                },
                screens: [],
                isLoading: true
            }

        default:
            return {...state }
    }
}

export default detailReducer;