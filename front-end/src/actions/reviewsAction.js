import axios from 'axios';
import { returnErrors, clearErrors } from './errorAction';
import { tokenConfig } from './authAction';

//Get reviews
export const loadReviews = () => async(dispatch, getState) => {
    //Fetching data
    const reviewsData = await axios.get("http://localhost:5000/reviews", tokenConfig(getState));

    dispatch({
        type: "FETCH_REVIEWS",
        payload: {
            reviews: reviewsData.data
        }
    });
}

//Add review
export const addReview = ({ user, game, imageUrl, description }) => (dispatch, getState) => {
    //Request Body
    const body = JSON.stringify({ user, game, imageUrl, description });

    //Post review
    axios.post("http://localhost:5000/reviews", body, tokenConfig(getState))
        .then(res => {
            dispatch(loadReviews());
            dispatch(clearErrors());
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'ADD_REVIEW_FAIL'));
        })
}