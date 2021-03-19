const initState = {
    reviews: []
}

const reviewsReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_REVIEWS":
            return {...state,
                reviews: action.payload
            }

        default:
            return {...state }
    }
};

export default reviewsReducer;