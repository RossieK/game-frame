import axios from 'axios';
import { returnErrors, clearErrors } from './errorAction';

//Get reviews
export const loadReviews = () => async(dispatch) => {
    //Fetching data
    const reviewsData = await axios.get("http://localhost:5000/reviews");

    dispatch({
        type: "FETCH_REVIEWS",
        payload: {
            reviews: reviewsData.data
        }
    });
}

//Add review
export const addReview = ({ user, game, imageUrl, description }) => dispatch => {
    //Header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request Body
    const body = JSON.stringify({ user, game, imageUrl, description });

    //Post review
    axios.post("http://localhost:5000/reviews", body, config)
        .then(res => {
            dispatch(loadReviews());
            dispatch(clearErrors());
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'ADD_REVIEW_FAIL'));
        })
}