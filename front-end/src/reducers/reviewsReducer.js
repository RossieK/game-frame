const initState = {}

const reviewsReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_REVIEWS":
            return action.payload.reviews;

        default:
            return {...state }
    }
};

export default reviewsReducer;